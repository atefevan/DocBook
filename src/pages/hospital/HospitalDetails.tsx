import { Box, Icon, Typography } from "@mui/material";
import ApartmentSharpIcon from "@mui/icons-material/ApartmentSharp";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import React from "react";
import { useParams } from "react-router-dom";
import { hospitalRead } from "../../apis/hospitals";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
interface Props {}
const HospitalDetails = ({}: Props) => {
  const { hospitalId } = useParams();
  const [selected, setSelected] = React.useState<string>("Info");
  const [details, setDetails] = React.useState({});
  const [loading, setLoading] = React.useState<boolean>(false);
  React.useEffect(() => {
    setLoading(true);
    hospitalRead({ id: hospitalId })
      .then((res) => {
        setDetails(res?.data);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#F2F2F2",
      }}
    >
      <Box sx={{ display: "flex", flex: 1, justifyContent: "center" }}>
        {!loading && (
          <Box
            component={"img"}
            src={details?.image_url}
            draggable={false}
            sx={{
              width: { xs: "90%", md: "90%" },
              height: { xs: "120%", md: "90%" },
              marginTop: 9,
              borderRadius: 2,
            }}
          />
        )}
        {loading && (
          <Box
            sx={{
              width: { xs: "90%", md: "90%" },
              height: { xs: "110px", md: "350px" },
              marginTop: 9,
              borderRadius: 2,
              backgroundColor: "#B4B4B8",
            }}
          />
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "white",
          height: { xs: "20vh", md: "31vh" },
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
            {details?.name || <Skeleton />}
          </Typography>
          <Typography
            sx={{ marginLeft: "2vw", fontSize: { xs: "", md: "14px" } }}
          >
            {loading ? (
              <Skeleton />
            ) : details?.service_year === undefined ? (
              0
            ) : (
              details?.service_year
            )}
            Years in service
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
                {details?.address || <Skeleton />}
              </Typography>
            </Box>
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
                <LocalPhoneIcon
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
                {details?.contact || <Skeleton />}
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
            width: "80px",
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
        <Box
          sx={{
            display: "flex",
            height: "3vh",
            width: "80px",
            cursor: "pointer",
            justifyContent: "center",
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            backgroundColor: selected === "Doctor" ? "white" : "transparent",
          }}
          onClick={() => setSelected("Doctor")}
        >
          <Typography sx={{ fontSize: "14px" }}>
            Doctors ({details?.doctors?.length ? details?.doctors?.length : 0})
          </Typography>
        </Box>
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
              {details?.description || <Skeleton />}
            </Typography>
          </Box>
        )}
        {selected === "Doctor" && (
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
        )}
      </Box>
    </Box>
  );
};

export default HospitalDetails;
