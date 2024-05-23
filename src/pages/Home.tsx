import { Box, Button, Typography } from "@mui/material";
import { png, svg } from "../assets";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import TxtField from "../components/atoms/TxtField";
import AutoComplete from "../components/atoms/AutoComplete";
import { areas, common_concerns, doctors, specialistImgs } from "../mock/strings";
import SpecialistChip from "../components/SpecialistChip";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import IconBtn from "../components/atoms/IconButton";
import HealthChip from "../components/HealthChip";
import DoctorChip from "../components/DoctorChip";

const Home = () => {
  const TOP_ITEM_WIDTH = 150;
  const COMMON_ITEM_WIDTH = 300;
  const DOCTOR_ITEM_WIDTH = 500;

  const [query, setQuery] = React.useState<string>("");
  const [topScroll, setTopScroll] = React.useState<number>(0);
  const [commonScroll, setCommonScroll] = React.useState<number>(0);
  const [doctorScroll, setDoctorScroll] = React.useState<number>(0);

  const handleTopScroll = (scrollAmount: number) => {
    const newScrollPosition = topScroll + scrollAmount;
    setTopScroll(newScrollPosition);
    topContainerRef.current.scrollLeft = newScrollPosition;
  };
  const handleCommonScroll = (scrollAmount: number) => {
    const newScrollPosition = commonScroll + scrollAmount;
    setCommonScroll(newScrollPosition);
    commonContainerRef.current.scrollLeft = newScrollPosition;
  };
  const handleDoctorScroll = (scrollAmount: number) => {
    const newScrollPosition = doctorScroll + scrollAmount;
    setDoctorScroll(newScrollPosition);
    doctorRef.current.scrollLeft = newScrollPosition;
  };
  const topContainerRef = React.useRef();
  const commonContainerRef = React.useRef();
  const doctorRef = React.useRef();
  return (
    <>
      <div
        style={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          position: "absolute",
          overflow: "scroll",
          backgroundColor:"#F2F2F2"
        }}
      >
        {/* Search */}
        <Box
          sx={{
            display: "flex",
            flex: 1,
            height: "22vh",
            backgroundColor: "#397693",
            marginInline: "5vw",
            marginTop: "10vh",
            borderRadius: 3,
            alignItems: "center",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              width: { sm: "flex", md: "none" },
              display: { md: "none", lg: "flex" },
            }}
          >
            <img
              src={svg.city}
              // width={"100%"}
              style={{
                position: "absolute",
                top: 70,
                left: "15vw",
                right: "15vw",
              }}
            />
          </Box>
          <Typography
            variant="h6"
            sx={{
              fontSize: "32px",
              color: "white",
              fontWeight: "bold",
              marginBlock: "2vh",
            }}
          >
            {`Best Doctors in {LOCATION}`}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flex: 1,
              width: "70%",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <TxtField
              placeHolder="Search By : Doctors, Services"
              fieldOnChange={setQuery}
              prefixIcon={<SearchIcon />}
              style={{ marginBlock: { xs: "1vh", md: "0vh" } }}
            />
            <AutoComplete options={areas} label={"Locations"} />
          </Box>
        </Box>

        {/* Top Specialities */}
        <Box
          style={{
            display: "flex",
            flex: 1,
            height: "25vh",
            marginInline: "5vw",
            marginTop: "1vh",
            padding: "5px",
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="h6"
              sx={{ fontSize: "24px", fontWeight: "bold", fontFamily: "Arial" }}
            >
              Top Specialistis
            </Typography>
            <Button
              variant="outlined"
              // onClick={onClick}
              sx={{
                width: { xs: "100px", sm: "110px", md: "90px" },
                fontSize: { xs: "8px", sm: "9px", md: "12px" },
                marginBlock: ".5vh",
              }}
            >
              See All
            </Button>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconBtn
              muiIcon={<KeyboardArrowLeftIcon />}
              onClick={() => handleTopScroll(-TOP_ITEM_WIDTH)}
              style={{ boxShadow: 2 }}
              bgColor="white"
            />
            <Box
              style={{
                display: "flex",
                overflowX: "scroll",
                width: "87vw",
                scrollBehavior: "smooth",
              }}
              component={"div"}
              ref={topContainerRef}
            >
              {specialistImgs.map((e) => (
                <SpecialistChip
                  image={e?.image}
                  title={e?.title}
                  price={e?.price}
                  // onClick={()=}
                />
              ))}
            </Box>
            <IconBtn
              muiIcon={<KeyboardArrowRightIcon />}
              onClick={() => handleTopScroll(TOP_ITEM_WIDTH)}
              style={{ boxShadow: 2 }}
              bgColor="white"
            />
          </Box>
        </Box>
        {/* Common Health Concern */}
        <Box
          style={{
            display: "flex",
            flex: 1,
            height: "25vh",
            marginInline: "5vw",
            marginTop: "5.5vh",
            padding: "5px",
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="h6"
              sx={{ fontSize: "24px", fontWeight: "bold", fontFamily: "Arial" }}
            >
              Common Health Concern
            </Typography>
            <Button
              variant="outlined"
              // onClick={onClick}
              sx={{
                width: { xs: "100px", sm: "110px", md: "90px" },
                fontSize: { xs: "8px", sm: "9px", md: "12px" },
                marginBlock: ".5vh",
              }}
            >
              See All
            </Button>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconBtn
              muiIcon={<KeyboardArrowLeftIcon />}
              onClick={() => handleCommonScroll(-COMMON_ITEM_WIDTH)}
              style={{ boxShadow: 2 }}
              bgColor="white"
            />
            <Box
              sx={{
                display: "flex",
                overflowX: "scroll",
                width: "87vw",
                scrollBehavior: "smooth",
                flexDirection: "row",
              }}
              component={"div"}
              ref={commonContainerRef}
            >
              {common_concerns.map((e) => (
                <HealthChip
                  image={e?.image}
                  title={e?.title}
                  price={e?.price}
                />
              ))}
            </Box>
            <IconBtn
              muiIcon={<KeyboardArrowRightIcon />}
              onClick={() => handleCommonScroll(COMMON_ITEM_WIDTH)}
              style={{ boxShadow: 2 }}
              bgColor="white"
            />
          </Box>
        </Box>
        {/* Doctors */}
        <Box
          style={{
            display: "flex",
            flex: 1,
            height: "25vh",
            marginInline: "5vw",
            marginTop: "15vh",
            padding: "5px",
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="h6"
              sx={{ fontSize: "24px", fontWeight: "bold", fontFamily: "Arial" }}
            >
              Some of the Best Doctors
            </Typography>
            <Button
              variant="outlined"
              // onClick={onClick}
              sx={{
                width: { xs: "100px", sm: "110px", md: "90px" },
                fontSize: { xs: "8px", sm: "9px", md: "12px" },
                marginBlock: ".5vh",
              }}
            >
              See All
            </Button>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconBtn
              muiIcon={<KeyboardArrowLeftIcon />}
              onClick={() => handleDoctorScroll(-DOCTOR_ITEM_WIDTH)}
              style={{ boxShadow: 2 }}
              bgColor="white"
            />
            <Box
              sx={{
                display: "flex",
                overflowX: "scroll",
                width: "87vw",
                scrollBehavior: "smooth",
                flexDirection: "row",
              }}
              component={"div"}
              ref={doctorRef}
            >
              {doctors.map((e) => (
                <DoctorChip
                  image={e?.image}
                  title={e?.title}
                  exp={e?.exp}
                  location={e?.location}
                  degree={e?.degree}
                  dept={e?.dept}
                  // price={e?.price}
                />
              ))}
            </Box>
            <IconBtn
              muiIcon={<KeyboardArrowRightIcon />}
              onClick={() => handleDoctorScroll(DOCTOR_ITEM_WIDTH)}
              style={{ boxShadow: 2 }}
              bgColor="white"
            />
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Home;
