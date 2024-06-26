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
import BookingModal from "../../components/modal/BookingModal";
import { enqueueSnackbar } from "notistack";
import ReviewCard from "../../components/cards/ReviewCard";
import { reviewAdd, reviewRead } from "../../apis/review";
interface Props {}
const DoctorDetails = ({}: Props) => {
  const { doctorId } = useParams();
  const [details, setDetails] = React.useState({});
  const [date, setDate] = React.useState<Dayjs | null>(dayjs());
  const [time, setTime] = React.useState<Dayjs | null>(dayjs());
  const [loading, setLoading] = React.useState<boolean>(false);
  const [openAppoinment, setOpenAppoinment] = React.useState<boolean>(false);
  const [docSlots, setDocSlots] = React.useState<[]>([]);
  const [chamberDetails, setChamberDetails] = React.useState({});
  const [reviews, setReviews] = React.useState<[]>([]);
  const [query, setQuery] = React.useState();
  const uid = localStorage.getItem("DOCBOOK_USER_ID");
  const uemail = localStorage.getItem("DOCBOOK_USER_EMAIL");
  React.useEffect(() => {
    setLoading(true);
    doctorRead({ id: doctorId }).then((res) => {
      setDetails(res?.data);
      setDocSlots(getSlots(res?.data));
      setChamberDetails(res?.data?.chamber[0]);
    });
    reviewRead({ id: doctorId })
      .then((res) => setReviews(res?.data))
      .finally(() => setLoading(false));
  }, []);
  const getSlots = (data) =>
    data?.availability?.map((slot) => ({
      _id: slot._id,
      slot: `${slot.day} ${slot.start} - ${slot.end}`,
    }));
  const handleSubmitReview = (event?: any) => {
    const payload = {
      email: uemail,
      item: doctorId,
      message: query,
    };
    reviewAdd(payload).then((res) => {
      return enqueueSnackbar(res?.message, {
        variant: res?.status,
      });
    });
  };
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
      <BookingModal
        data={{
          slots: docSlots,
          rawSlots: docSlots?.map((item: any) => item?.slot),
          doctor: { name: details?.name, id: details?._id },
          user: { email: uemail, id: uid },
        }}
        setOpen={setOpenAppoinment}
        open={openAppoinment}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            height: "50vh",
            width: { xs: "90vw", md: "70vw" },
            backgroundColor: "white",
            marginTop: "10vh",
            borderRadius: 2,
            boxShadow: 1,
            marginLeft: { xs: "5vw", md: "2vw" },
            overflow: "clip",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  height: "100%",
                  justifyContent: { xs: "center" },
                }}
              >
                <Box
                  component={"img"}
                  draggable={false}
                  src={
                    details?.image_url
                      ? details?.image_url
                      : jpeg.doctor_skeleton
                  }
                  sx={{
                    width: { xs: "16vw", md: "160px" },
                    height: { xs: "16vw", md: "160px" },
                    margin: 2,
                    borderRadius: 1,
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  flexDirection: { xs: "column", md: "row" },
                  // flex:1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    width: { xs: "70vw", md: "30vw" },
                    flexDirection: "column",
                    alignItems: { xs: "center", md: "start" },
                    textAlign: { xs: "center", md: "start" },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "18px", md: "28px" },
                      marginInline: 1,
                      marginTop: { xs: 1, md: 2 },
                      width: "25vw",
                      color: "#007292",
                    }}
                  >
                    {details?.name || <Skeleton />}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "18px" },
                      marginInline: 1,
                      width: "25vw",
                      color: "#007292",
                    }}
                  >
                    {details?.qualification || <Skeleton />}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "18px" },
                      marginInline: 1,
                      width: "25vw",
                      color: "#007292",
                    }}
                  >
                    {details?.speciality || <Skeleton />}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "18px" },
                      marginInline: 1,
                      marginBlock: { xs: 1, md: 2 },
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
                      fontSize: { xs: "15px", md: "18px" },
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
                    width: { xs: "68vw", md: "27vw" },
                    flexDirection: "column",
                    paddingInline: "1vw",
                    // overflow:"scroll",
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
                            fontSize: { xs: "16px", md: "14px" },
                            wordWrap: "break-word",
                            whiteSpace: "normal",
                            marginLeft: 0.5,
                            color: "#007292",
                            marginBlock: { xs: 0, md: 0.5 },
                            textAlign: { xs: "center", md: "left" },
                          }}
                        >
                          {ch?.name}
                          {ch?.city},{ch?.district}
                        </Typography>
                      </Box>
                    ))
                  ) : (
                    <Skeleton count={3} style={{ margin: 4 }} />
                  )}
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                height: "100%",
                display: { xs: "none", md: "flex" },
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  marginTop: "4vh",
                  alignItems: "start",
                  marginLeft: "2vw",
                }}
              >
                <Icon sx={{ height: "35px", width: "35px" }}>
                  <AccessTimeSharpIcon
                    sx={{ height: "35px", width: "35px", color: "#007292" }}
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
              <Box
                sx={{
                  marginTop: "5vh",
                  marginRight: "5vw",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    width: { xs: "13vw", md: "15vw" },
                    height: { xs: "10vh", md: "16vh" },
                    borderRadius: 2,
                    justifyContent: "center",
                    textAlign: "center",
                    alignItems: "center",
                    overflow: "clip",
                    cursor: "pointer",
                  }}
                  component={"img"}
                  src="https://apps.canva-apps.com/integrations/promo_cards/large/googlemaps_promo_card.jpg"
                  onClick={() =>
                    (window.location.href = `${chamberDetails?.map_url}`)
                  }
                />
                <Typography
                  sx={{
                    fontSize: "16px",
                    paddingBlock: "1vh",
                    textAlign: "center",
                  }}
                >
                  View on Google Map
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <ReviewCard
          count={reviews?.length}
          reviews={reviews}
          value={query}
          setValue={(event) => setQuery(event.target.value)}
          onClick={handleSubmitReview}
        />
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
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
            boxShadow: 1,
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
          <Button
            variant="contained"
            sx={{ marginTop: 2, width: "90%" }}
            onClick={() => {
              if (uid) setOpenAppoinment(true);
              else {
                return enqueueSnackbar("Login First !", {
                  variant: "error",
                });
              }
            }}
          >
            Book Appoinment
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DoctorDetails;
