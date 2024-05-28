import { Box, Button, Typography } from "@mui/material";
import { png, svg } from "../../assets";
import AutoComplete from "../../components/atoms/AutoComplete";
import TxtField from "../../components/atoms/TxtField";
import { areas } from "../../mock/strings";

import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import MenuList from "../../components/atoms/MenuList";
import HospitalChip from "../../components/HospitalChip";
import { hospitalsRead } from "../../apis/hospitals";
import { useNavigate } from "react-router-dom";

const Hospital = () => {
  const [query, setQuery] = React.useState<string>("");
  const [formData, setFormData] = React.useState({});
  const [specialities, setSpecialities] = React.useState(["AA", "BB"]);
  const [districts, setDistricts] = React.useState(["CC", "DD"]);
  const [hospitals, setHospitals] = React.useState<[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const navigate = useNavigate();

  const handleFormDataInput = (e: any) => {
    e.preventDefault();
    let obj: any = {};
    const key: string = e.target.id ? e.target.id : e.target.name;
    obj[key] = e.target.value;
    setFormData({ ...formData, ...obj });
  };
  React.useEffect(() => {
    setLoading(true);
    hospitalsRead()
      .then((res) => setHospitals(res?.data))
      .finally(() => setLoading(false));
  }, []);
  return (
    <Box sx={{ marginInline: "5vw" }}>
      {/* Search */}
      <Box
        sx={{
          display: "flex",
          flex: 1,
          height: "25vh",
          backgroundColor: "#397693",

          marginTop: "10vh",
          borderRadius: 3,

          // alignItems: "center",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flex: 1,
            margin: 2,
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <TxtField
            placeHolder="Search Hospitals....."
            fieldOnChange={setQuery}
            value={query}
            prefixIcon={<SearchIcon />}
            style={{ marginBlock: { xs: "1vh", md: "0vh" } }}
          />
          <Button
            variant="contained"
            sx={{
              height: "50px",
              width: "20%",
              marginInline: 3,
              backgroundColor: "#088df3",
              "&:hover": {
                backgroundColor: "#6DC5D1",
              },
            }}
          >
            Search
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            marginLeft: 1,
            marginBottom: 1,
            justifyContent: "space-between",
          }}
        >
          <MenuList
            id="speciality"
            name="speciality"
            key="speciality"
            label="Speciality"
            isRequired={true}
            size={"small"}
            value={
              Object.keys(formData).length && formData?.speciality
                ? formData?.speciality
                : ""
            }
            items={[...specialities]}
            labelFontSize={{ xs: "14px", md: "18px" }}
            style={{ width: { xs: "25vw", md: "25vw" }, marginBottom: 1 }}
            onChange={handleFormDataInput}
          />
          <MenuList
            id="districts"
            name="districts"
            key="districts"
            label="districts"
            isRequired={true}
            size="small"
            value={
              Object.keys(formData).length && formData?.districts
                ? formData?.districts
                : ""
            }
            labelFontSize={{ xs: "14px", md: "18px" }}
            items={[...districts]}
            style={{ width: { xs: "25vw", md: "25vw" } }}
            onChange={handleFormDataInput}
          />
          <MenuList
            id="cities"
            name="cities"
            key="cities"
            label="Cities"
            size="small"
            isRequired={true}
            value={
              Object.keys(formData).length && formData?.cities
                ? formData?.cities
                : ""
            }
            labelFontSize={{ xs: "14px", md: "18px" }}
            items={["A CITY", "B CITY", "C CITY"]}
            style={{ width: { xs: "25vw", md: "25vw" } }}
            onChange={handleFormDataInput}
          />
        </Box>
      </Box>
      <Typography sx={{ fontSize: "16px", marginTop: "2vh" }}>
        Book appointments with minimum wait-time & Video consult with verified
        doctors
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            overflow: "scroll",
            height: "60vh",
          }}
        >
          {hospitals?.map((hospital: any) => (
            <HospitalChip
              image={hospital?.image_url}
              title={hospital?.name}
              address={hospital?.address}
              price_range={{ start: 500, end: 1200 }}
              assignedDoctor={hospital?.doctors.length}
              onClick={() => {
                navigate(`/hospital/${hospital?._id}`);
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Hospital;
