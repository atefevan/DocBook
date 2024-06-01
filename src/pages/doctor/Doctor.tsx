import { Box, Button, Skeleton, Typography } from "@mui/material";
import TxtField from "../../components/atoms/TxtField";

import SearchIcon from "@mui/icons-material/Search";
import React from "react";
// import MenuList from "../../components/atoms/MenuList";
import DoctorChip from "../../components/chips/DoctorChip";
import { doctorsRead } from "../../apis/doctor";
import { svg } from "../../assets";
import { useNavigate, useSearchParams } from "react-router-dom";
// import SwitcH from "../../components/atoms/Switch";
import AutoComplete from "../../components/atoms/AutoComplete";

const Doctor = () => {
  const [query, setQuery] = React.useState<string>("");
  const [formData, setFormData] = React.useState({});
  const [specialities, setSpecialities] = React.useState([]);
  const [tempDoctors, setTempDoctors] = React.useState<[]>([]);
  const [params] = useSearchParams();
  const speciality = params.get("speciality");
  const navigate = useNavigate();
  const [selectedSpeciality, setSelectedSpeciality] =
    React.useState(speciality);
  const [doctors, setDoctors] = React.useState<[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const consultPhone = "02 981 4246";

  React.useEffect(() => {
    setLoading(true);
    doctorsRead({ speciality: speciality })
      .then((res) => {
        setDoctors(res?.data);
        setTempDoctors(res?.data);
        filterParams(res?.data);
      })
      .finally(() => setLoading(false));
  }, []);
  const filterParams = (data: any) => {
    const specialities = [];
    if (data) {
      data?.map((item) => specialities.push(item?.speciality));
      setSpecialities([...new Set(specialities)]);
    }
  };
  const handleFormDataInput = (e: any) => {
    e.preventDefault();
    let obj: any = {};
    const key: string = e.target.id ? e.target.id : e.target.name;
    obj[key] = e.target.value;
    setFormData({ ...formData, ...obj });
  };
  const handleSearch = () => {
    if (doctors) {
      setTempDoctors(
        doctors
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
  const handleFilter = (value: string) => {
    if (doctors) {
      setTempDoctors(
        doctors
          ?.filter((item) =>
            item.speciality
              .trim()
              .toLowerCase()
              .includes(value.trim().toLowerCase())
          )
          .sort((a, b) =>
            a.speciality
              .trim()
              .toLowerCase()
              .localeCompare(b.speciality.trim().toLowerCase())
          )
      );
    }
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
            margin: 2,
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <TxtField
            placeHolder="Search Doctors....."
            fieldOnChange={(event) => setQuery(event.target.value)}
            value={query}
            prefixIcon={<SearchIcon />}
            style={{ marginBlock: { xs: "1vh", md: "0vh" } }}
          />
          <Button
            variant="contained"
            sx={{
              width: "20%",
              height: { xs: "32px", sm: "40px", md: "45px" },
              marginInline: 3,
              backgroundColor: "#088df3",
              "&:hover": {
                backgroundColor: "#6DC5D1",
              },
            }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            // flex: 1,
            width: "100%",
            margin: 2,
            // alignItems:"center",
            justifyContent: "space-between",
          }}
        >
          {/* <MenuList
            isDisabled={byDoc ? true : false}
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
          /> */}
          <AutoComplete
            options={specialities}
            label={"Speciality"}
            value={selectedSpeciality}
            setValue={(value) => {
              setSelectedSpeciality(value);
              handleFilter(value);
            }}
            style={{ marginRight: "5vw" }}
          />
          {/* <MenuList
            id="districts"
            name="districts"
            key="districts"
            label="districts"
            isRequired={true}
            size={"small"}
            value={
              Object.keys(formData).length && formData?.districts
                ? formData?.districts
                : ""
            }
            labelFontSize={{ xs: "14px", md: "18px" }}
            items={[...districts]}
            style={{ width: { xs: "25vw", md: "25vw" } }}
            onChange={handleFormDataInput}
          /> */}
          {/* <MenuList
            id="consult_type"
            name="consult_type"
            key="consult_type"
            label="Consult Type"
            isRequired={true}
            size={"small"}
            value={
              Object.keys(formData).length && formData?.consult_type
                ? formData?.consult_type
                : ""
            }
            labelFontSize={{ xs: "14px", md: "18px" }}
            items={["Video", "Audio", "Face to Face"]}
            style={{ width: { xs: "25vw", md: "25vw" } }}
            onChange={handleFormDataInput}
          /> */}
        </Box>
      </Box>
      <Typography sx={{ fontSize: "16px", marginTop: "2vh" }}>
        Book Appoinment with Specialized Doctors
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            width: { xs: "100%", sm: "100%", md: "70%" },
            backgroundColor: "white",
            flexDirection: "column",
            overflow: "scroll",
            height: "60vh",
          }}
        >
          {!loading ? (
            tempDoctors?.map((doctor) => (
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
            <Box>
              {[1, 2, 3, 4, 5].map(() => (
                <Skeleton
                  sx={{
                    width: { xs: "45vw", sm: "320px", md: "61vw" },
                    height: { xs: "50vh", sm: "30vh", md: "26vh" },
                    borderRadius: 2,
                    margin: 0.5,
                  }}
                />
              ))}
            </Box>
          )}
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "flex" },
            width: "30%",
            backgroundColor: "white",
            height: "40vh",
            justifyContent: "center",
            alignItems: "center",
            // boxShadow: 1,
            border: ".5px solid black",
            borderRadius: 3,
          }}
        >
          <Box
            component={"img"}
            src={svg.need_help}
            draggable={false}
            sx={{
              width: { xs: "90%", md: "90%" },
              height: { xs: "80%", md: "70%" },
              borderRadius: 2,
            }}
          />
          <Typography
            sx={{
              position: "absolute",
              fontFamily: "Arial",
              fontSize: "16px",
              color: "#e9ad0f",
              marginBottom: "8vh",
            }}
          >
            Consult Problem
          </Typography>
          <Typography
            sx={{
              position: "absolute",
              fontSize: "16px",
              fontFamily: "Arial",
              marginBottom: "2vh",
              cursor: "pointer",
            }}
            onClick={() => window.open(`tel:${consultPhone}`)}
          >
            {consultPhone}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Doctor;
