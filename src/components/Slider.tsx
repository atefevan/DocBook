import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import * as React from "react";

interface SliderProps {
  children: React.ReactNode;
  autoScroll?: boolean;
  autoScrollInterval?: number;
  autoHideButton?: boolean;
}

interface Style {
  [key: string]: React.CSSProperties;
}

const Slider: React.FC<SliderProps> = ({
  children,
  autoScroll = false,
  autoScrollInterval = 3000,
  autoHideButton = false,
}) => {
  const sliderRef = React.useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [visibleItems, setVisibleItems] = React.useState(1);
  const childrenArray = React.Children.toArray(children);
  const totalChildren = childrenArray.length;

  const updateVisibleItems = () => {
    if (sliderRef.current) {
      const containerWidth = sliderRef.current.offsetWidth;
      const itemWidth = sliderRef.current.scrollWidth / totalChildren;
      const newVisibleItems = Math.floor(containerWidth / itemWidth) || 1;
      setVisibleItems(newVisibleItems);
    }
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateVisibleItems);
    updateVisibleItems();
    return () => {
      window.removeEventListener("resize", updateVisibleItems);
    };
  }, []);

  React.useEffect(() => {
    let interval = null;
    if (autoScroll) {
      interval = setInterval(() => {
        handleNext();
      }, autoScrollInterval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoScroll, autoScrollInterval, currentIndex, visibleItems]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex + 1 >= totalChildren - visibleItems + 1) {
        return 0; // Reset to the first item
      } else {
        return prevIndex + 1;
      }
    });
  };

  React.useEffect(() => {
    if (sliderRef.current) {
      const itemWidth = sliderRef.current.offsetWidth / visibleItems;
      sliderRef.current.style.transform = `translateX(-${
        currentIndex * itemWidth
      }px)`;
    }
  }, [currentIndex, visibleItems]);

  return (
    <div style={styles.sliderContainer}>
      {!(autoHideButton && currentIndex === 0) && (
        <button
          style={{ ...styles.button, ...styles.prevButton }}
          onClick={handlePrev}
        >
          <KeyboardArrowLeft />
        </button>
      )}
      <div style={styles.sliderWrapper} ref={sliderRef}>
        {childrenArray.map((child, index) => (
          <div
            key={index}
            style={{ ...styles.slide, width: `${100 / visibleItems}%` }}
          >
            {child}
          </div>
        ))}
      </div>
      {!(autoHideButton && currentIndex >= totalChildren - visibleItems) && (
        <button
          style={{ ...styles.button, ...styles.nextButton }}
          onClick={handleNext}
        >
          <KeyboardArrowRight />
        </button>
      )}
    </div>
  );
};

const styles: Style = {
  sliderContainer: {
    position: "relative",
    width: "100%",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
  },
  sliderWrapper: {
    display: "flex",
    transition: "transform 0.5s ease-in-out",
    width: "100%",
  },
  slide: {
    boxSizing: "border-box",
    padding: "0 10px",
  },
  button: {
    backgroundColor: "white",
    border: "none",
    padding: "10px",
    cursor: "pointer",
    zIndex: 1,
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    borderRadius: "50%",
    boxShadow: "0px 2px lightgray",
    alignContent: "center",
  },
  prevButton: {
    left: "10px",
  },
  nextButton: {
    right: "10px",
  },
};

export default Slider;
