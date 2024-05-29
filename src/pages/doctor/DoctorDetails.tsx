import React from "react";
import { useParams } from "react-router-dom";
import { doctorRead } from "../../apis/doctor";
import { Box, Button, Icon, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import AccessTimeSharpIcon from "@mui/icons-material/AccessTimeSharp";
import { jpeg } from "../../assets";
import PickTime from "../../components/atoms/TimePicker";
import DatePickerValue from "../../components/atoms/DatePicker";
import dayjs, { Dayjs } from "dayjs";
interface Props {}
const DoctorDetails = ({}: Props) => {
  const { doctorId } = useParams();
  const [details, setDetails] = React.useState({});
  const [date, setDate] = React.useState<Dayjs | null>(dayjs());
  const [time, setTime] = React.useState<Dayjs | null>(dayjs());
  const [loading, setLoading] = React.useState<boolean>(false);
  React.useEffect(() => {
    setLoading(true);
    doctorRead({ id: doctorId })
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
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            height: "50vh",
            width: "70vw",
            backgroundColor: "white",
            marginTop: "10vh",
            borderRadius: 2,
            boxShadow: 1,
            marginLeft: "2vw",
            overflow: "clip",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box sx={{ height: "100%" }}>
                <Box
                  component={"img"}
                  draggable={false}
                  src={
                    details?.image_url
                      ? details?.image_url
                      : jpeg.doctor_skeleton
                  }
                  sx={{
                    width: { xs: "12vw", md: "160px" },
                    height: { xs: "12vw", md: "160px" },
                    margin: 2,
                    borderRadius: 1,
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  // backgroundColor: "lightgreen",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    width: "30vw",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "28px",
                      marginInline: 1,
                      marginTop: 2,
                      width: "25vw",
                      color: "#007292",
                    }}
                  >
                    {details?.name || <Skeleton />}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      marginInline: 1,
                      // marginTop: 1,
                      width: "25vw",
                      color: "#007292",
                    }}
                  >
                    {details?.qualification || <Skeleton />}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      marginInline: 1,
                      width: "25vw",
                      color: "#007292",
                    }}
                  >
                    {details?.designation || <Skeleton />}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      marginInline: 1,
                      marginBlock: 2,
                      width: "25vw",
                      color: "#007292",
                    }}
                  >
                    {!loading ? (
                      `${details?.experience} years of Experience overall`
                    ) : (
                      <Skeleton />
                    )}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      marginInline: 1,
                      marginTop: 1,
                      width: "25vw",
                      color: "#007292",
                    }}
                  >
                    {!loading ? `BMDC Reg.: Coming Soon` : <Skeleton />}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    width: "27vw",
                    flexDirection: "column",
                    paddingInline: "1vw",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "24px",
                      color: "#007292",
                      marginInline: 1,
                      marginTop: 3,
                      alignSelf: "center",
                    }}
                  >
                    Places
                  </Typography>
                  {!loading ? (
                    details?.chamber?.map((ch: any) => (
                      <Box
                        sx={{
                          display: "flex",
                          marginTop: "1vh",
                          alignItems: "center",
                        }}
                      >
                        <Icon sx={{ height: "30px", width: "30px" }}>
                          <PlaceIcon
                            sx={{
                              height: "30px",
                              width: "30px",
                              color: "#007292",
                            }}
                          />
                        </Icon>
                        <Typography
                          sx={{
                            overflow: "scroll",
                            fontSize: { xs: "12px", md: "14px" },
                            wordWrap: "break-word",
                            whiteSpace: "normal",
                            marginLeft: 0.5,
                            color: "#007292",
                            marginBlock: { xs: 0, md: 0.5 },
                            textAlign: { xs: "center", md: "left" },
                          }}
                        >
                          {ch?.name},{ch?.city},{ch?.district}
                        </Typography>
                      </Box>
                    ))
                  ) : (
                    <Skeleton count={3} style={{ margin: 4 }} />
                  )}
                </Box>
              </Box>
            </Box>
            <Box sx={{ height: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  marginTop: "4vh",
                  alignItems: "start",
                  marginLeft: "2vw",
                }}
              >
                <Icon sx={{ height: "40px", width: "40px" }}>
                  <AccessTimeSharpIcon
                    sx={{ height: "40px", width: "40px", color: "#007292" }}
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
                      fontSize: { xs: "12px", md: "18px" },
                      wordWrap: "break-word",
                      whiteSpace: "normal",
                      marginLeft: 0.5,
                      color: "#007292",
                      marginTop: ".5vh",
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    Availability
                  </Typography>
                  {details?.availability?.map((available: any) => (
                    <Box sx={{ width: "20vw" }}>
                      {!loading ? (
                        <Typography
                          sx={{
                            overflow: "scroll",
                            fontSize: "16px",
                            wordWrap: "break-word",
                            whiteSpace: "normal",
                            marginLeft: 0.5,
                            color: "#007292",
                            margin: 1,
                            textAlign: { xs: "center", md: "left" },
                          }}
                        >
                          {available?.day} - {available?.start} -{" "}
                          {available?.end}
                        </Typography>
                      ) : (
                        <Skeleton style={{ marginBlock: 5 }} />
                      )}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            height: "35vh",
            width: "70vw",
            backgroundColor: "white",
            marginTop: "3vh",
            borderRadius: 2,
            boxShadow: 1,
            marginLeft: "2vw",
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "25vw",
          // backgroundColor: "white",
          // boxShadow: 1,
          height: "88vh",
          marginTop: "10vh",
          marginLeft: "2vw",
          borderRadius: 2,
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{ fontSize: "24px", fontFamily: "Arial", color: "#007292" }}
        >
          Book An Appoinment
        </Typography>
        <Box
          sx={{
            display: "flex",
            width: "80%",
            height: "43%",
            paddingInline: "2vw",
            marginBlock: "1vh",
            borderRadius: 2,
            boxShadow:1,
            backgroundColor: "white",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{ marginTop: "2vh", fontSize: "24px", fontFamily: "Arial" }}
          >
            Time
          </Typography>

          <PickTime
            variant="mobile"
            label={""}
            value={time}
            setValue={setTime}
            width={"90%"}
            style={{ margin: 2 }}
          />
          <Typography
            sx={{ marginTop: "2vh", fontSize: "24px", fontFamily: "Arial" }}
          >
            Date
          </Typography>

          <DatePickerValue
            label={""}
            value={date}
            width={"90%"}
            setValue={setDate}
            style={{ margin: 1 }}
          />
          <Button variant="contained" sx={{ marginTop: 2, width: "90%" }}>
            Book Appoinment
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DoctorDetails;
