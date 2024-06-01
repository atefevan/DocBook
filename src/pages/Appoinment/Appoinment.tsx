import { Box } from "@mui/material";

interface Props {}
const Appoinment = ({}: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        height: "100%",
        backgroundColor: "#F2F2F2",
        position: "absolute",
        padding: 0,
        margin: 0,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }}
    ></Box>
  );
};

export default Appoinment;
