import { Box, Button, Skeleton, Typography } from "@mui/material";
import React from "react";
import { svg } from "../../assets";
import { useNavigate } from "react-router-dom";
import { ambulancesRead } from "../../apis/ambulance";
import AmbulanceCard from "../../components/cards/AmbulanceCard";

interface Props {}
const Ambulance = ({}: Props) => {
  const [ambulances, setAmbulances] = React.useState<[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const consultPhone = "02 981 4246";
  const navigate = useNavigate();

  React.useEffect(() => {
    setLoading(true);
    ambulancesRead()
      .then((res) => setAmbulances(res?.data))
      .finally(() => setLoading(false));
  }, []);
  return (
    <Box sx={{ marginInline: "5vw" }}>
      <Typography sx={{ fontSize: "16px", marginTop: "10vh" }}>
        On emergency call as you need
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            width: { xs: "100%", sm: "100%", md: "70%" },
            backgroundColor: "white",
            flexDirection: "column",
            overflow: "scroll",
            height: "90vh",
          }}
        >
          {!loading ? (
            ambulances?.map((ambulance) => (
              <AmbulanceCard
                image={ambulance?.image_url}
                title={ambulance?.title}
                desciption={ambulance?.description}
                phone={ambulance?.contact}
                onTitleClick={() => navigate(`/ambulance/${ambulance?._id}`)}
                onClick={() => {
                  navigate(`/ambulance/${ambulance?._id}`);
                }}
              />
            ))
          ) : (
            <Box>
              {[1, 2, 3, 4, 5].map(() => (
                <Skeleton
                  sx={{
                    width: { xs: "45vw", sm: "320px", md: "61vw" },
                    height: { xs: "50vh", sm: "30vh", md: "26vh" },
                    borderRadius: 2,
                    margin: 0.5,
                  }}
                />
              ))}
            </Box>
          )}
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "flex" },
            width: "30%",
            backgroundColor: "white",
            height: "40vh",
            justifyContent: "center",
            alignItems: "center",
            // boxShadow: 1,
            border: ".5px solid black",
            borderRadius: 3,
          }}
        >
          <Box
            component={"img"}
            src={svg.need_help}
            draggable={false}
            sx={{
              width: { xs: "90%", md: "90%" },
              height: { xs: "80%", md: "70%" },
              borderRadius: 2,
            }}
          />
          <Typography
            sx={{
              position: "absolute",
              fontFamily: "Arial",
              fontSize: "16px",
              color: "#e9ad0f",
              marginBottom: "8vh",
            }}
          >
            Consult Problem
          </Typography>
          <Typography
            sx={{
              position: "absolute",
              fontSize: "16px",
              fontFamily: "Arial",
              marginBottom: "2vh",
              cursor: "pointer",
            }}
            onClick={() => window.open(`tel:${consultPhone}`)}
          >
            {consultPhone}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Ambulance;
