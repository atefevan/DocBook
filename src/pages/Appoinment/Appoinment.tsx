import { Box, Skeleton, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { appointmentsRead } from "../../apis/appoinment";
import { svg } from "../../assets";
import AppoinmentCard from "../../components/cards/AppoinmentCard";
import Background from "../../components/Background";
import Footer from "../Footer";

interface Props {}
const Appoinment = ({}: Props) => {
  const [appoinments, setAppoinments] = React.useState<[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const uToken = localStorage.getItem("DOCBOOK_ACCESS_TOKEN");
  const uId = localStorage.getItem("DOCBOOK_USER_ID");
  const consultPhone = "02 981 4246";
  React.useEffect(() => {
    setLoading(true);
    appointmentsRead({ id: uId })
      .then((res) => setAppoinments(res?.data))
      .finally(() => setLoading(false));
  }, []);
  const handleSubmit = () => {
    // if(){}
  };
  return (
    <>
      {uToken ? (
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
        >
          <Background>
            <Box sx={{ marginInline: "5vw" }}>
              <Typography
                sx={{ fontSize: "48px", marginTop: "7vh", fontFamily: "Arial" }}
              >
                My Appointments
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "93vw",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    width: { xs: "100%", sm: "100%", md: "100%" },
                    // backgroundColor: "w",
                    flexDirection: "column",
                    overflow: "scroll",
                    height: "80vh",
                  }}
                >
                  {!loading ? (
                    appoinments?.map((appointment) => (
                      <AppoinmentCard
                        user_email={appointment?.email}
                        doctor={appointment?.doctor}
                        speciality={appointment?.speciality}
                        date={appointment?.created_at}
                        fee={appointment?.fees}
                        slot={appointment?.slot}
                        // onTitleClick={() => navigate(`/ambulance/${ambulance?._id}`)}
                        // onClick={() => {
                        //   navigate(`/ambulance/${ambulance?._id}`);
                        // }}
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
            <div style={{ marginTop: "1vh" }} />
            <Footer />
          </Background>
        </Box>
      ) : (
        <Background>
          <Box
            sx={{
              display: "flex",
              flex: 1,
              width: "100%",
              height: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div />
            <Typography sx={{ fontSize: { xs: "24px", md: "38px" } }}>
              No Appoinment Available !
            </Typography>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                height: "5%",
                backgroundColor: "black",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Footer />
            </Box>
          </Box>
        </Background>
      )}
    </>
  );
};

export default Appoinment;
