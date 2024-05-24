import { Box, Icon, Typography } from "@mui/material";
import ApartmentSharpIcon from "@mui/icons-material/ApartmentSharp";
import AccessTimeSharpIcon from "@mui/icons-material/AccessTimeSharp";
interface Props {
  title?: string;
  degree?: string;
  image?: any;
  location?: string;
  exp?: string;
  dept?: string;
  avaiableIn?: string;
  time?: any;
  days?: any;
}
const DoctorChip = ({
  title,
  degree,
  image,
  location,
  exp,
  dept,
  avaiableIn,
  time,
  days,
}: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: { sm: "320px", md: "520px" },
        height: { xs: "50vw", sm: "28vh", md: "35vh" },
        backgroundColor: "white",
        borderRadius: 2,
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "center", sm: "center", md: "start" },
        overflow: "clip",
        boxShadow: 2,
      }}
    >
      <Box
        component={"img"}
        src={image}
        sx={{
          width: { xs: "10vw", sm: "10vw", md: "5vw" },
          height: { xs: "12vw", sm: "12vw", md: "6vw" },
          margin: 2,
          borderRadius: 1,
        }}
      />

      <Typography
        sx={{
          fontSize: { xs: "14px", md: "18px" },
          fontWeight: { xs: "bold", md: "normal" },
          color: "#007292",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{ fontSize: { xs: "12px", md: "18px" }, color: "#007292" }}
      >
        {degree}
      </Typography>
      <Typography
        sx={{ fontSize: { xs: "12px", md: "18px" }, color: "#007292" }}
      >
        {dept}
      </Typography>
      <Typography
        sx={{ fontSize: { xs: "12px", md: "18px" }, color: "#007292" }}
      >
        {exp} Years of Experience Overall
      </Typography>
      <Box>
        <Box sx={{ display: "flex", marginTop: "1vh", alignItems: "center" }}>
          <Icon>
            <ApartmentSharpIcon
              sx={{ height: "20px", width: "20px", color: "#007292" }}
            />
          </Icon>
          <Typography
            sx={{
              overflow: "scroll",
              fontSize: "12px",
              wordWrap: "break-word",
              whiteSpace: "normal",
              marginLeft: 0.5,
              color: "#007292",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Available in {avaiableIn} locations
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box sx={{ display: "flex", marginTop: "1vh", alignItems: "start" }}>
          <Icon>
            <AccessTimeSharpIcon
              sx={{ height: "20px", width: "20px", color: "#007292" }}
            />
          </Icon>
          <Box
            sx={{
              flexDirection: "column",
              display: "flex",
              alignItems: "start",
            }}
          >
            <Typography
              sx={{
                overflow: "scroll",
                fontSize: "12px",
                wordWrap: "break-word",
                whiteSpace: "normal",
                marginLeft: 0.5,
                color: "#007292",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Availability
            </Typography>
            <Typography
              sx={{
                overflow: "scroll",
                fontSize: "12px",
                wordWrap: "break-word",
                whiteSpace: "normal",
                marginLeft: 0.5,
                color: "#007292",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              SAPLE
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DoctorChip;
