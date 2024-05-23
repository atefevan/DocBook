import { Avatar, Box, Button, Icon, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import SchoolIcon from "@mui/icons-material/School";
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
        minWidth: { xs:"18vw",sm: "18vw", md: "25vw" },
        minHeight: { xs:"60vw",sm: "28vh", md: "18vh" },
        backgroundColor: "white",
        borderRadius: 2,
        flexDirection: { xs: "column", md: "row" },
        alignItems: "start",
        marginInline: 1,
        overflow: "clip",
        margin: 2,
        boxShadow: 2,
      }}
    >
      {/* <img
        // src={image}
        src={image}
        height={"40%"}
        // sx={{
        //   height: { xs: "40px", sm: "65px", md: "90px" },
        //   width: { xs: "40px", sm: "65px", md: "90px" },
        //   marginBlock: { xs: ".4vh", sm: ".6vh", md: ".8vh" },
        // }}
      /> */}
      <Box
        sx={{
          backgroundColor: "#f1f6f7",
          display: "flex",
          height: "100%",
          width: { xs: "100%", md: "60%" },
          flexDirection: { xs: "row", md: "column" },
          alignItems: "center",
          justifyContent: { xs: "center", md: "center" },
        }}
      >
        <Avatar
          src={image}
          sx={{
            height: { sm: "55px", md: "80px" },
            width: { sm: "55px", md: "80px" },
            marginBlock: { xs: ".3vh", sm: ".5vh", md: ".7vh" },
            margin: 1,
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          height: "100%",
          width: "100%",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            overflow: "scroll",
            // padding: "10px",
            wordBreak: "break-word",
            textAlign: { xs: "center", md: "left" },
            fontWeight: "bold",
            margin: 1,
            color: "#174e61",
          }}
        >
          {title}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Typography
              sx={{
                overflow: "scroll",
                paddingInline: "10px",
                fontSize: "14px",
                // marginLeft: 1,
                color: "#007292",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              {dept}
            </Typography>
            <Typography
              sx={{
                overflow: "scroll",
                paddingInline: "10px",
                fontSize: "14px",
                // marginLeft: 0.5,
                color: "#007292",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              {exp}Year Exp
            </Typography>
          </Box>

          <Box
            sx={{
              borderBottom: "1px solid black",
              display: "flex",
              width: "100%",
            }}
          />
        </Box>
        <Box sx={{ display: "flex", marginTop: "1vh", alignItems: "center" }}>
          <Icon>
            <PlaceIcon sx={{ height: "20px", width: "20px" }} />
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
            {location}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", marginTop: "1vh", alignItems: "center" }}>
          <Icon>
            <SchoolIcon sx={{ height: "20px", width: "20px" }} />
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
            {degree}
          </Typography>
        </Box>
        <Button
          variant="text"
          // onClick={onClick}
          sx={{
            width: { xs: "100px", sm: "110px", md: "140px" },
            fontSize: { xs: "8px", sm: "9px", md: "12px" },
            marginBlock: ".5vh",
            marginRight: { xs: "0px", md: "5px" },
            alignSelf: { xs: "center", md: "end" },
          }}
        >
          Consult Now
        </Button>
      </Box>

      {/* 
      <Typography style={{ marginBlock: ".5vh", color: "#5AB2FF" }}>
        {price}
      </Typography>
       */}
    </Box>
  );
};

export default DoctorChip;
