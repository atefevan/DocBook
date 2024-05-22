import { Box, Select, Typography } from "@mui/material";
import ButtonAppBar from "../components/Appbar";
import { png, svg } from "../assets";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import TxtField from "../components/atoms/TxtField";
import AutoComplete from "../components/atoms/AutoComplete";
import { areas, specialistImgs, specialities } from "../mock/strings";
import SpecialistChip from "../components/SpecialistChip";

const Home = () => {
  const [query, setQuery] = React.useState<string>("");
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
          <Box sx={{ width: { sm: "flex", md: "none" },display:{md:"none",lg:"flex"} }}>
            <img
              src={svg.city}
              // width={"100%"}
              style={{
                position: "absolute",
                top: 70,
                left: "15vw",
                right: "15vw",
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
            backgroundColor: "green",
            height: "25vh",
            marginInline: "5vw",
            marginTop: "1vh",
            padding: "5px",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontSize: "24px", fontWeight: "bold", fontFamily: "Arial" }}
          >
            Top Specialistis
          </Typography>
          <Box style={{ display: "flex",overflow:"scroll",width:"89vw" }}>
            {specialistImgs.map((e) => (
              <SpecialistChip
                image={e?.image}
                title={e?.title}
                price={e?.price}
              />
            ))}
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Home;
