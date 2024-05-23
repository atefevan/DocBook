import { Box } from "@mui/material";

interface Props {
  title?: string;
  degree?: string;
  image?: any;
  location?: string;
  exp?: string;
  dept?: string;
}
const DoctorChip = ({ title, degree, image, location, exp, dept }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: { xs: "18vw", sm: "18vw", md: "50vw" },
        height: { xs: "60vw", sm: "28vh", md: "45vh" },
        backgroundColor: "white",
        borderRadius: 2,
        flexDirection: { xs: "column", md: "row" },
        alignItems: "start",
        overflow: "clip",
        boxShadow: 2,
      }}
    >
       <Box
              component={"img"}
              src={image}
              sx={{
                position: "absolute",
                top: 70,
                left: { xs: "1vw", md: "15vw" },
                right: { xs: "1vw", md: "15vw" },
                // width:{ xs: "1vw", md: "10vw" }
              }}
            />
    </Box>
  );
};

export default DoctorChip;
