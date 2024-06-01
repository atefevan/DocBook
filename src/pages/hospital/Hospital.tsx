import { Box, Button, Skeleton, Typography } from "@mui/material";
import TxtField from "../../components/atoms/TxtField";

import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import HospitalChip from "../../components/chips/HospitalChip";
import { hospitalsRead, searchHospitals } from "../../apis/hospitals";
import { useNavigate } from "react-router-dom";
import AutoComplete from "../../components/atoms/AutoComplete";

import SwitcH from "../../components/atoms/Switch";

const Hospital = () => {
  const [query, setQuery] = React.useState<any>();
  const [hospitals, setHospitals] = React.useState<[]>([]);
  const [tempHospitals, setTempHospitals] = React.useState<[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [specialities, setSpecialities] = React.useState([]);
  const [cities, setCities] = React.useState<[]>([]);
  const [districts, setDistricts] = React.useState<[]>([]);
  const [selectedCity, setSelectedCity] = React.useState();
  const [selectedSpeciality, setSelectedSpeciality] = React.useState();
  const [selectedDistrict, setSelectedDistrict] = React.useState();
  const [searchByDoc, setSearchByDoc] = React.useState<boolean>(true);
  const navigate = useNavigate();
  React.useEffect(() => {
    setLoading(true);
    hospitalsRead()
      .then((res) => {
        setHospitals(res?.data);
        setTempHospitals(res?.data);
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

  const handleSearch = () => {
    if (hospitals) {
      setTempHospitals(
        hospitals
          ?.filter((item) =>
            item.name.trim().toLowerCase().includes(query.trim().toLowerCase())
          )
          .sort((a, b) =>
            a.name
              .trim()
              .toLowerCase()
              .localeCompare(b.name.trim().toLowerCase())
          )
      );
    }
  };

  const handleFilter = () => {
    setLoading(true);
    searchHospitals({
      city: selectedCity,
      district: selectedDistrict,
      speciality: selectedSpeciality,
    })
      .then((res) => {
        setTempHospitals(res?.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <Box sx={{ marginInline: "5vw" }}>
      {/* Search */}
      <Box
        sx={{
          display: "flex",
          flex: 1,
          height: "28vh",
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
            _disabled={!searchByDoc ? true : false}
            placeHolder="Search Hospitals....."
            fieldOnChange={(event) => setQuery(event.target.value)}
            value={query}
            prefixIcon={<SearchIcon />}
            style={{ marginBlock: { xs: "1vh", md: "0vh" } }}
          />
          <Button
            variant="contained"
            sx={{
              height: { xs: "35px", sm: "40px", md: "45px" },
              width: "20%",
              marginInline: 3,
              backgroundColor: "#088df3",
              "&:hover": {
                backgroundColor: "#6DC5D1",
              },
            }}
            onClick={() => (searchByDoc ? handleSearch() : handleFilter())}
          >
            {searchByDoc ? "Search" : "Filter"}
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            // backgroundColor: "lightgreen",
            height: "5vh",
            // alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SwitcH
            id={"hospital_filter"}
            isChecked={searchByDoc}
            onChange={() => {
              searchByDoc ? setSearchByDoc(false) : setSearchByDoc(true);
            }}
            labelColor="white"
            label={`Filter By : ${searchByDoc ? "Search" : "Filter"}`}
            labelAlign="start"
            color="#9DDE8B"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            marginBottom: 1,
            marginTop: "2.5vh",
            justifyContent: "space-between",
          }}
        >
          <AutoComplete
            isDisabled={searchByDoc ? true : false}
            options={districts}
            label={"Districts"}
            value={selectedDistrict}
            focuseColor={searchByDoc ? "grey" : "white"}
            setValue={(value) => {
              setSelectedDistrict(value);
            }}
            style={{ marginLeft: "5vw" }}
          />

          <AutoComplete
            isDisabled={searchByDoc ? true : false}
            options={cities}
            label={"City"}
            value={selectedCity}
            focuseColor={searchByDoc ? "grey" : "white"}
            setValue={(value) => {
              setSelectedCity(value);
            }}
            style={{ marginInline: "5vw" }}
          />
          <AutoComplete
            isDisabled={searchByDoc ? true : false}
            options={specialities}
            label={"Speciality"}
            value={selectedSpeciality}
            focuseColor={searchByDoc ? "grey" : "white"}
            setValue={(value) => {
              setSelectedSpeciality(value);
            }}
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
            tempHospitals?.map((hospital: any) => (
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
          {tempHospitals.length <= 0 && (
            <Box
              sx={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                width: "90vw",
                height: "100%",
              }}
            >
              <Typography sx={{ fontSize: { xs: "14px", md: "24px" } }}>
                No Hospitals Available !
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Hospital;
