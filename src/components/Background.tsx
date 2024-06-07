import { Box } from "@mui/material";

interface Prop {
  children?: any;
  bgColor?: string;
}
const Background = ({ children, bgColor = "#F2F2F2" }: Prop) => {
  return (
    <Box
      sx={{
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        margin: 0,
        padding: 0,
        position: "absolute",
        opacity: 0.855,
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundColor: bgColor,
      }}
    >
      {children}
    </Box>
  );
};

export default Background;
