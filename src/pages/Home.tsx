import { Box, Button, Typography } from "@mui/material";
import { png, svg } from "../assets";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import TxtField from "../components/atoms/TxtField";
import AutoComplete from "../components/atoms/AutoComplete";
import {
  ambulances,
  areas,
  common_concerns,
  doctors,
  specialistImgs,
} from "../mock/strings";
import SpecialistChip from "../components/SpecialistChip";
import HealthChip from "../components/HealthChip";
import InfoChip from "../components/InfoChip";
import AmbulanceChip from "../components/AmbulanceChip";
import Slider from "../components/Slider";
import { specialitiesRead } from "../apis/speciality";

const Home = () => {
  const [query, setQuery] = React.useState<string>("");
  const doctorRef = React.useRef();
  const [specialists, setSpecialists] = React.useState<[]>([]);
  React.useEffect(() => {
    specialitiesRead().then((res) => setSpecialists(res?.data));
  }, []);
  // console.log("SPECIALS : ", specialists);
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
            {`Best Doctors in {LOCATION}`}
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
            <AutoComplete options={areas} label={"Locations"} />
          </Box>
        </Box>

        {/* Top Specialities */}
        <Box
          style={{
            display: "flex",
            flex: 1,
            height: "25vh",
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
          <Slider autoHideButton>
            {specialists.map((e) => (
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
          style={{
            display: "flex",
            flex: 1,
            height: "25vh",
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
          <Slider autoScroll autoHideButton>
            {common_concerns.map((e) => (
              <HealthChip image={e?.image} title={e?.title} price={e?.price} />
            ))}
          </Slider>
        </Box>

        {/* Doctors */}
        <Box
          sx={{
            display: "flex",
            flex: 1,
            height: "25vh",
            marginInline: "5vw",
            marginTop: { xs: "6vh", sm: "10vh", md: "13vh" },
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
          </Box>
          <Slider autoScroll autoHideButton>
            {doctors.map((e) => (
              <InfoChip
                image={e?.image}
                title={e?.title}
                exp={e?.exp}
                location={e?.location}
                degree={e?.degree}
                dept={e?.dept}
              />
            ))}
          </Slider>
        </Box>

        {/* Ambulance */}
        <Box
          sx={{
            display: "flex",
            flex: 1,
            height: "15vh",
            marginInline: "5vw",
            marginTop: { xs: "15vh", sm: "10vh", md: "5vh" },
            padding: "5px",
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="h6"
              sx={{ fontSize: "24px", fontWeight: "bold", fontFamily: "Arial" }}
            >
              On Emergency
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                display: "flex",
                width: "87vw",
              }}
              component={"div"}
              ref={doctorRef}
            >
              {ambulances.map((e) => (
                <AmbulanceChip
                  image={e?.image}
                  title={e?.title}
                  point_1={e?.point_1}
                  point_2={e?.point_2}
                  point_3={e?.point_3}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Home;
