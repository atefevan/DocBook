import { Box, Button, Skeleton, Typography } from "@mui/material";
import { png, svg } from "../assets";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import TxtField from "../components/atoms/TxtField";
import AutoComplete from "../components/atoms/AutoComplete";
import { areas, common_concerns } from "../mock/strings";
import SpecialistChip from "../components/chips/SpecialistChip";
import HealthChip from "../components/chips/HealthChip";
import InfoChip from "../components/chips/InfoChip";
import AmbulanceChip from "../components/chips/AmbulanceChip";
import Slider from "../components/Slider";
import { specialitiesRead } from "../apis/speciality";
import { doctorsRead } from "../apis/doctor";
import { useNavigate } from "react-router-dom";
import { ambulancesRead } from "../apis/ambulance";

const Home = () => {
  const navigate = useNavigate();
  const [query, setQuery] = React.useState<string>("");
  const doctorRef = React.useRef();
  const [specialists, setSpecialists] = React.useState<[]>([]);
  const [doctors, setDoctors] = React.useState<[]>([]);
  const [ambulances, setAmbulances] = React.useState<[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [selectedArea, setSelectedArea] = React.useState<string | null>(
    areas[0]
  );
  React.useEffect(() => {
    setLoading(true);
    specialitiesRead().then((res) => setSpecialists(res?.data));
    ambulancesRead().then((res) => setAmbulances(res?.data));
    doctorsRead()
      .then((res) => setDoctors(res?.data))
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      <div
        style={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          position: "absolute",
          overflow: "scroll",
          backgroundColor: "#F2F2F2",
        }}
      >
        {/* Search */}
        <Box
          sx={{
            display: "flex",
            flex: 1,
            height: "22vh",
            backgroundColor: "#397693",
            marginInline: "5vw",
            marginTop: "10vh",
            borderRadius: 3,
            alignItems: "center",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              width: { sm: "flex", md: "none" },
              display: { md: "none", lg: "flex" },
            }}
          >
            <Box
              component={"img"}
              src={svg.city}
              sx={{
                position: "absolute",
                top: 35,
                left: { xs: "1vw", md: "10vw" },
                // right: { xs: "1vw", md: "15vw" },
                // width:{ xs: "1vw", md: "10vw" }
              }}
            />
          </Box>
          <Typography
            variant="h6"
            sx={{
              fontSize: "32px",
              color: "white",
              fontWeight: "bold",
              marginBlock: "2vh",
            }}
          >
            {`Best Doctors in : ${selectedArea}`}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flex: 1,
              width: "70%",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <TxtField
              placeHolder="Search By : Doctors, Services"
              fieldOnChange={setQuery}
              prefixIcon={<SearchIcon />}
              style={{ marginBlock: { xs: "1vh", md: "0vh" } }}
            />
            <AutoComplete
              options={areas}
              label={"Locations"}
              setValue={setSelectedArea}
            />
          </Box>
        </Box>

        {/* Top Specialities */}
        <Box
          style={{
            display: "flex",
            flex: 1,
            height: "28vh",
            marginInline: "5vw",
            marginTop: "1vh",
            padding: "5px",
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="h6"
              sx={{ fontSize: "24px", fontWeight: "bold", fontFamily: "Arial" }}
            >
              Top Specialistis
            </Typography>
          </Box>
          <Slider autoScroll autoHideButton>
            {specialists?.map((e) => (
              <SpecialistChip
                image={e?.image_url}
                title={e?.speciality}
                price={e?.price}
              />
            ))}
          </Slider>
        </Box>
        {/* Common Health Concern */}
        <Box
          sx={{
            display: "flex",
            flex: 1,
            height: { xs: "35vh" },
            marginInline: "5vw",
            marginTop: "5.5vh",
            padding: "5px",
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="h6"
              sx={{ fontSize: "24px", fontWeight: "bold", fontFamily: "Arial" }}
            >
              Common Health Concern
            </Typography>
          </Box>
          <Slider autoHideButton>
            {!loading ? (
              common_concerns.map((e) => (
                <HealthChip
                  image={e?.image}
                  title={e?.title}
                  price={e?.price}
                />
              ))
            ) : (
              <Box sx={{ display: "flex",width:"85vw" }}>
                {[1, 2, 3, 4, 5].map(() => (
                  <Skeleton
                    variant="rectangular"
                    width={"33vw"}
                    height={"40vh"}
                    sx={{ margin: 3, borderRadius: 5 }}
                  />
                ))}
              </Box>
            )}
          </Slider>
        </Box>

        {/* Doctors */}
        <Box
          sx={{
            display: "flex",
            flex: 1,
            height: { xs: "40vh", sm: "38vh", md: "25vh" },
            marginInline: "5vw",
            marginTop: { xs: "6vh", sm: "10vh", md: "10vh" },
            padding: "5px",
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="h6"
              sx={{ fontSize: "24px", fontWeight: "bold", fontFamily: "Arial" }}
            >
              Some of the Best Doctors
            </Typography>
            <Button
              variant="outlined"
              // onClick={onClick}
              sx={{
                width: { xs: "100px", sm: "110px", md: "90px" },
                fontSize: { xs: "10px", sm: "11px", md: "12px" },
                marginBlock: ".5vh",
              }}
              onClick={() => navigate("/doctor")}
            >
              See All
            </Button>
          </Box>
          <Slider autoHideButton>
            {!loading ? (
              doctors?.map((e) => (
                <InfoChip
                  image={e?.image_url}
                  title={e?.name}
                  exp={e?.experience}
                  location={e?.address}
                  degree={e?.qualification}
                  dept={e?.speciality}
                  onTitleClick={() => navigate(`/doctor/${e?._id}`)}
                  onClick={() => {
                    navigate(`/doctor/${e?._id}`);
                  }}
                />
              ))
            ) : (
              <Box sx={{ display: "flex" }}>
                {[1, 2, 3].map(() => (
                  <Skeleton
                    variant="rectangular"
                    width={"23vw"}
                    height={"20vh"}
                    sx={{ margin: 3, borderRadius: 2 }}
                  />
                ))}
              </Box>
            )}
          </Slider>
        </Box>

        <Typography
          variant="h6"
          sx={{
            fontSize: "24px",
            fontWeight: "bold",
            fontFamily: "Arial",
            marginLeft: { xs: 5, sm: 7, md: 9, xl: 12 },
            marginTop: { xs: 6, sm: 6, md: 12 },
          }}
        >
          On Emergency
        </Typography>
        {/* Ambulance */}
        <Box
          sx={{
            display: "flex",
            flex: 1,
            height: { xs: "40vh", md: "38vh" },
            marginInline: "5vw",
            marginTop: { xs: "0vh", sm: "1vh", md: "2vh" },
            padding: "5px",
            flexDirection: "column",
            overflow: "scroll",
            // width:{xs:"120px",md:""}
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                display: "flex",
                width: "87vw",
              }}
              component={"div"}
              // ref={doctorRef}
            >
              {!loading ? (
                ambulances?.map((e) => (
                  <AmbulanceChip
                    image={e?.image_url}
                    title={e?.title}
                    point_1={"Get ambulance within 30 minutes*"}
                    point_2={"24/7 affordable quality service"}
                    point_3={"We are just a call away: 01405600700"}
                    onClick={() => {
                      navigate(`/ambulance/${e?._id}`);
                    }}
                  />
                ))
              ) : (
                <Box sx={{ display: "flex" }}>
                  {[1, 2, 3].map(() => (
                    <Skeleton
                      variant="rectangular"
                      width={"21vw"}
                      height={"20vh"}
                      sx={{ margin: 3, borderRadius: 2 }}
                    />
                  ))}
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Home;
