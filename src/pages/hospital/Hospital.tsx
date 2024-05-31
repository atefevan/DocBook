import { Box, Button, Skeleton, Typography } from "@mui/material";
import TxtField from "../../components/atoms/TxtField";

import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import MenuList from "../../components/atoms/MenuList";
import HospitalChip from "../../components/chips/HospitalChip";
import { hospitalsRead } from "../../apis/hospitals";
import { useNavigate } from "react-router-dom";
import { areas } from "../../mock/strings";
import AutoComplete from "../../components/atoms/AutoComplete";

const Hospital = () => {
  const [query, setQuery] = React.useState<any>();
  const [formData, setFormData] = React.useState({});
  const [hospitals, setHospitals] = React.useState<[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [specialities, setSpecialities] = React.useState([]);
  const [cities, setCities] = React.useState<[]>([]);
  const [districts, setDistricts] = React.useState<[]>([]);
  const [selectedCity, setSelectedCity] = React.useState();
  const [selectedSpeciality, setSelectedSpeciality] = React.useState();
  const [selectedDistrict, setSelectedDistrict] = React.useState();
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
      .then((res) => {
        setHospitals(res?.data);
        filterParams(res?.data);
      })
      .finally(() => setLoading(false));
  }, []);

  const filterParams = (data: any) => {
    const cities = [];
    if (data) {
      data?.map((item) => cities.push(item?.city));
      setCities([...new Set(cities)]);
    }
    const specialities = [];
    if (data) {
      data?.map((item) => specialities.push(item?.speciality));
      setSpecialities([...new Set(specialities)]);
    }
    const districts = [];
    if (data) {
      data?.map((item) => districts.push(item?.district));
      setDistricts([...new Set(districts)]);
    }
  };

  const handleSearch = (
    city?: string,
    district?: string,
    speciality?: string
  ) => {
    const data = query.toLowerCase();
    
  };
  return (
    <Box sx={{ marginInline: "5vw" }}>
      {/* Search */}
      <Box
        sx={{
          display: "flex",
          flex: 1,
          height: "22vh",
          backgroundColor: "#397693",
          marginTop: "10vh",
          borderRadius: 3,
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flex: 1,
            marginInline: 2,
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <TxtField
            placeHolder="Search Hospitals....."
            fieldOnChange={(event) => setQuery(event.target.value)}
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
            onClick={() =>
              handleSearch(selectedCity, selectedDistrict, selectedSpeciality)
            }
          >
            Search
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            marginBottom: 1,
            justifyContent: "space-between",
          }}
        >
          <AutoComplete
            options={districts}
            label={"Districts"}
            value={selectedDistrict}
            setValue={setSelectedDistrict}
            style={{ marginLeft: "5vw" }}
          />

          <AutoComplete
            options={cities}
            label={"City"}
            value={selectedCity}
            setValue={setSelectedCity}
            style={{ marginInline: "5vw" }}
          />
          <AutoComplete
            options={specialities}
            label={"Speciality"}
            value={selectedSpeciality}
            setValue={setSelectedSpeciality}
            style={{ marginRight: "5vw" }}
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
          {!loading ? (
            hospitals?.map((hospital: any) => (
              <HospitalChip
                image={hospital?.image_url}
                title={hospital?.name}
                onTitleClick={() => navigate(`/hospital/${hospital?._id}`)}
                address={hospital?.address}
                phone={hospital?.contact}
                assignedDoctor={hospital?.doctors.length}
                onClick={() => {
                  navigate(`/hospital/${hospital?._id}`);
                }}
              />
            ))
          ) : (
            <Box>
              {[1, 2, 3, 4, 5].map(() => (
                <Skeleton
                  // variant="rectangular"
                  sx={{
                    width: { xs: "45vw", sm: "320px", md: "53vw" },
                    height: { xs: "50vh", sm: "30vh", md: "20vh" },
                    borderRadius: 2,
                    margin: 1,
                  }}
                />
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Hospital;
