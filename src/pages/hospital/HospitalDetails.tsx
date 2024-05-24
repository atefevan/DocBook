import { Box, Icon, Typography } from "@mui/material";
import ApartmentSharpIcon from "@mui/icons-material/ApartmentSharp";
import React from "react";
interface Props {}
const HospitalDetails = ({}: Props) => {
  const [selected, setSelected] = React.useState<string>("Info");
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        // marginInline: "5vw",
        backgroundColor: "#F2F2F2",
      }}
    >
      <Box sx={{ display: "flex", flex: 1, justifyContent: "center" }}>
        <Box
          component={"img"}
          src={
            "https://img.sasthyaseba.com/NgsDK0RCAzICFSpfVWUHBwNnW0k9/hospitals/cover-photos/5/zkqpQlChJP4hAWn42JeGTMvj7ODww32ToTFN9YvD/birdem-general-hospital.webp"
          }
          draggable={false}
          sx={{
            width: { xs: "90%", md: "90%" },
            height: { xs: "120%", md: "90%" },
            marginTop: 9,
          }}
        />
      </Box>
      {/* <Box
        sx={{
          // display: "flex",
          position: "absolute",
          top: 350,
          left: 150,
          height: "140px",
          width: "140px",
          borderRadius: 2,
          // overflow: "clip",
          backgroundColor: "blue",
          marginInline: "3vw",
          overflow: "clip",
          border: ".2px solid black",
        }}
      >
        <Box
          component={"img"}
          src={
            "https://img.sasthyaseba.com/LBUDK0RCAzICFSpfVWEGCwhiWz0/hospitals/5/jOXEyfiYRcxupDG1a4jjksOjXLAurfEgS6Gd3cQ9/birdem-general-hospital.webp"
          }
          draggable={false}
          sx={{ height: "100%", width: "100%" }}
        />
      </Box> */}
      <Box
        sx={{
          display: "flex",
          backgroundColor: "white",
          height: "28vh",
          boxShadow: 1,
          borderRadius: 2,
          marginInline: "4.5vw",
        }}
      >
        <Box
          sx={{
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              marginTop: "2vh",
              marginLeft: "2vw",
              fontSize: { xs: "", md: "24px" },
              fontWeight: "bold",
            }}
          >
            BIRDEM General Hospital
          </Typography>
          <Typography
            sx={{ marginLeft: "2vw", fontSize: { xs: "", md: "14px" } }}
          >
            10 Years in service
          </Typography>
          <Box
            sx={{
              display: "flex",
              width: "80vw",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                marginTop: "1vh",
                alignItems: "center",
                marginLeft: "2vw",
                marginBlock: "2vh",
              }}
            >
              <Icon>
                <ApartmentSharpIcon
                  sx={{ height: "20px", width: "20px", color: "#007292" }}
                />
              </Icon>
              <Typography
                sx={{
                  overflow: "scroll",
                  fontSize: { xs: "12px", md: "14px" },
                  wordWrap: "break-word",
                  whiteSpace: "normal",
                  width: { xs: "15vw", md: "20vw" },
                  marginLeft: 0.5,
                  color: "#007292",
                  marginBlock: { xs: 0, md: 0.5 },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                {"122 Kazi Nazrul Islam Ave, Dhaka, 1000, Bangladesh"}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "20vw",
                height: "10vw",
                borderRadius: 2,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "grey",
              }}
            >
              GOOGLE MAPS
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flex: 1,
          marginInline: "4.5vw",
          height: "100px",
          marginTop: "1vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: "3vh",
            width: "5vw",
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            backgroundColor: selected === "Info" ? "white" : "transparent",
            cursor: "pointer",
            justifyContent: "center",
          }}
          onClick={() => setSelected("Info")}
        >
          <Typography sx={{ fontSize: "14px" }}>Info</Typography>
        </Box>
        {/* <Box
          sx={{
            display: "flex",
            height: "3vh",
            width: "5vw",
            cursor: "pointer",
            justifyContent: "center",
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            backgroundColor: selected === "Doctor" ? "white" : "transparent",
          }}
          onClick={() => setSelected("Doctor")}
        >
          <Typography sx={{ fontSize: "14px" }}>Doctors</Typography>
        </Box> */}
      </Box>
      <Box sx={{ display: "flex" }}>
        {selected === "Info" && (
          <Box
            sx={{
              width: "100%",
              backgroundColor: "white",
              boxShadow: 1,
              marginInline: "4.5vw",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                margin: 2,
                fontSize: "18px",
                fontFamily: "Arial",
                fontWeight: "bold",
                color: "#007292",
              }}
            >
              About
            </Typography>
            <Typography
              sx={{
                margin: 2,
                fontSize: "14px",
                fontFamily: "Arial",
                color: "#007292",
                marginInline: "2vw",
              }}
            >
              BIRDEM Academy is a postgraduate institutions of BIRDEM General
              Hospital for conducting postgraduate courses for medical
              graduates. DAB, Diabetic Association of Bangladesh established
              BIRDEM Academy in 1986 with a view to creating skilled manpower in
              the field of Endocrinology & Metabolism to improve the care of
              patients in the country. Now BIRDEM conduct more than 18
              (Eighteen) residency & non-residency postgraduate courses like
              MD,MS, M.Phil. Diploma & Ph.D in different subjects under
              University of Dhaka and Bangabandhu Sheikh Mujib Medical
              University (BSMMU).
            </Typography>
          </Box>
        )}
        {/* {selected === "Doctor" && (
          <Box
            sx={{
              width: "100%",
              backgroundColor: "white",
              boxShadow: 1,
              marginInline: "4.5vw",
            }}
          >
            DOCTORS
          </Box>
        )} */}
      </Box>
    </Box>
  );
};

export default HospitalDetails;
