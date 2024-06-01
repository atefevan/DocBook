import { Box, Button, Skeleton, Typography } from "@mui/material";
import React from "react";
import AutoComplete from "../components/atoms/AutoComplete";
import { common_concerns } from "../mock/strings";
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
  const [specialists, setSpecialists] = React.useState<[]>([]);
  const [doctors, setDoctors] = React.useState<[]>([]);
  const [ambulances, setAmbulances] = React.useState<[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [selectedDoctor, setSelectedDoctor] = React.useState<string>("");
  const [selectedSpeciality, setSelectedSpeciality] =
    React.useState<string>("");
  const [docsNames, setDocNames] = React.useState<[]>([]);
  const [specialityNames, setSpecialityNames] = React.useState<[]>([]);
  const [docsID, setDocsId] = React.useState({});
  React.useEffect(() => {
    setLoading(true);
    specialitiesRead().then((res) => {
      setSpecialists(res?.data);
    });
    ambulancesRead().then((res) => setAmbulances(res?.data));
    doctorsRead()
      .then((res) => {
        setDoctors(res?.data);
        specialityByNames(res?.data);
        setDocsId(getDocsID(res?.data));
      })
      .finally(() => setLoading(false));
  }, []);
  const specialityByNames = async (data: any) => {
    const specialists = [];
    if (data) {
      data?.map((item) => specialists.push(item?.speciality));
      setSpecialityNames([...new Set(specialists)]);
    }
  };
  React.useEffect(() => {
    setDocNames(getDocNames(doctors, selectedSpeciality));
  }, [selectedSpeciality]);
  const getDocNames = (data, search) =>
    data.filter((d) => d.speciality === search).map((d) => d.name);
  const getDocsID = (data) =>
    Object.fromEntries(data.map(({ name, _id }) => [name, _id]).slice(0, 2));
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
          {/* <Box
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
          </Box> */}
          <Typography
            variant="h6"
            sx={{
              fontSize: "32px",
              color: "white",
              fontWeight: "bold",
              marginBlock: { xs: "1vh", md: "2vh" },
            }}
          >
            {`Find Doctor by Specialist`}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flex: 1,
              width: "70%",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <AutoComplete
              options={docsNames}
              label={"Doctors"}
              value={selectedDoctor}
              placeHolder={"Search By Doctors"}
              setValue={(value) => {
                setSelectedDoctor(value);
                navigate(`/doctor/${docsID[`${value}`]}`);
              }}
              style={{ marginBlock: { xs: ".5vh", md: "0vh" } }}
            />
            <AutoComplete
              options={specialityNames}
              value={selectedSpeciality}
              label={"Speciality"}
              setValue={(value) => {
                setSelectedSpeciality(value);
              }}
              style={{ marginTop: { xs: "2vh", md: "0vh" } }}
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
            {/* {specialists?.map((e) => (
              <SpecialistChip
                image={e?.image_url}
                title={e?.speciality}
                price={e?.price}
              />
            ))} */}
            {!loading ? (
              specialists?.map((e) => (
                <SpecialistChip
                  image={e?.image_url}
                  title={e?.speciality}
                  price={e?.price}
                  // onClick={() => }
                />
              ))
            ) : (
              <Box sx={{ display: "flex", width: "85vw" }}>
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
              <Box sx={{ display: "flex", width: "85vw" }}>
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
