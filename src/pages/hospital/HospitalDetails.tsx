import { Box, Icon, Typography } from "@mui/material";
import ApartmentSharpIcon from "@mui/icons-material/ApartmentSharp";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { hospitalRead } from "../../apis/hospitals";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import DoctorChip from "../../components/chips/DoctorChip";
interface Props {}
const HospitalDetails = ({}: Props) => {
  const { hospitalId } = useParams();
  const [selected, setSelected] = React.useState<string>("Info");
  const [details, setDetails] = React.useState({});
  const [loading, setLoading] = React.useState<boolean>(false);
  const navigate = useNavigate();
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
        position: "relative",
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
              height: {
                xs: loading ? "110px" : "",
                md: loading ? "350px" : "",
              },
              marginTop: 9,
              borderRadius: 2,
              backgroundColor: "#E3E1D9",
            }}
          />
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "white",
          height: { xs: "20vh", md: "23vh" },
          boxShadow: 1,
          borderRadius: 2,
          marginInline: "4.5vw",
        }}
      >
        <Box
          sx={{
            width: "70vw",
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
          <Box sx={{ display: "flex", flexDirection: "row" }}>
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
                  width: { xs: "15vw", md: "8vw" },
                  marginLeft: 0.5,
                  color: "#007292",
                  marginBlock: { xs: 0, md: 0.5 },
                  textAlign: { xs: "center", md: "left" },
                  cursor: "pointer",
                }}
                onClick={() => window.open(`tel:${details?.contact}`)}
              >
                {details?.contact || <Skeleton />}
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
                <LocalHospitalIcon
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
                {details?.speciality || <Skeleton />}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "30vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: { xs: "13vw", md: "15vw" },
              height: { xs: "10vh", md: "16vh" },
              borderRadius: 2,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "grey",
              cursor: "pointer",
            }}
            component={"img"}
            src="https://apps.canva-apps.com/integrations/promo_cards/large/googlemaps_promo_card.jpg"
            onClick={() => (window.location.href = `${details?.map_url}`)}
          />
          <Typography
            sx={{
              marginBlock: { xs: ".2vh", md: "1vh" },
              fontSize: { xs: "10px", md: "14px" },
              textAlign: "center",
            }}
          >
            View Hospital in Google Maps
          </Typography>
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
            width: "100px",
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
              display: "flex",
              flexDirection: { xs: "column", sm: "column", md: "row" },
              width: "100%",
              backgroundColor: "white",
              boxShadow: 1,
              marginInline: "4.5vw",
            }}
          >
            <Box
              sx={{
                width: "75%",
                backgroundColor: "white",
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
                {loading ? (
                  <Skeleton count={5} />
                ) : details?.description === undefined ? (
                  "No Description Available !"
                ) : (
                  details?.description
                )}
              </Typography>
            </Box>

            {/* {details?.doctors?.length && (
              <Box sx={{ backgroundColor: "orange" }}>
                <Box
                  sx={{
                    display: "flex",
                    height: "29vh",
                    width: { xs: "90%", md: "20vw" },
                    backgroundColor: "#F6F5F2",
                    borderRadius: 2,
                    margin: 2,
                    // justifyContent: "center",
                    alignItems: "center",
                    boxShadow: 1,
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      margin: 1,
                      fontSize: "18px",
                      fontFamily: "Arial",
                      fontWeight: "bold",
                      color: "#007292",
                    }}
                  >
                    Appoinment
                  </Typography>
                  <DatePickerValue
                    label={"Day"}
                    value={value}
                    width={"90%"}
                    setValue={setValue}
                    style={{ margin: 1 }}
                  />
                  <PickTime
                    variant="mobile"
                    label={"Appoinment Time"}
                    value={value}
                    setValue={setValue}
                    width={"90%"}
                    style={{ margin: 2 }}
                  />
                  <Button
                    variant="outlined"
                    // sx={{ alignSelf: { xs: "center", md: "end" }, margin: 1 }}
                    // onClick={() => setOpenAppoinment(true)}
                  >
                    Book Appoinment
                  </Button>
                </Box>
              </Box>
            )} */}
          </Box>
        )}
        {selected === "Doctor" && (
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "column", md: "row" },
              width: "100%",
              backgroundColor: "white",
              boxShadow: 1,
              marginInline: "4.5vw",
              overflow: "scroll",
              height: details?.doctors?.length ? "50vh" : "10vh",
            }}
          >
            <Box
              sx={{
                width: "75%",
                backgroundColor: "white",
                flexDirection: "column",
              }}
            >
              {details?.doctors?.length ? (
                details?.doctors?.map((doctor) => (
                  <DoctorChip
                    image={doctor?.image_url}
                    title={doctor?.name}
                    degree={doctor?.qualification}
                    dept={doctor?.speciality}
                    exp={doctor?.experience}
                    address={doctor?.address}
                    availability={doctor?.availability}
                    onTitleClick={() => navigate(`/doctor/${doctor?._id}`)}
                    onClick={() => {
                      navigate(`/doctor/${doctor?._id}`);
                    }}
                  />
                ))
              ) : (
                <Typography
                  sx={{
                    margin: 2,
                    fontSize: "14px",
                    fontFamily: "Arial",
                    color: "#007292",
                    marginTop: "2vw",
                  }}
                >
                  No Doctors assigned to this Hospital !
                </Typography>
              )}
            </Box>
            {/* {details?.doctors?.length && (
              <Box sx={{ backgroundColor: "white" }}>
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                    height: "29vh",
                    width: { xs: "90%", md: "22vw" },
                    backgroundColor: "#F6F5F2",
                    borderRadius: 2,
                    margin: 2,
                    // justifyContent: "center",
                    alignItems: "center",
                    boxShadow: 1,
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      margin: 1,
                      fontSize: "18px",
                      fontFamily: "Arial",
                      fontWeight: "bold",
                      color: "#007292",
                    }}
                  >
                    Appoinment
                  </Typography>
                  <DatePickerValue
                    label={"Day"}
                    value={value}
                    width={"90%"}
                    setValue={setValue}
                    style={{ margin: 1 }}
                  />
                  <PickTime
                    variant="mobile"
                    label={"Appoinment Time"}
                    value={value}
                    setValue={setValue}
                    width={"90%"}
                    style={{ margin: 2 }}
                  />
                  <Button variant="outlined">Book Appoinment</Button>
                </Box>
              </Box>
            )} */}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HospitalDetails;
