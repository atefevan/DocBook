import { Box, Button, Skeleton, Typography } from "@mui/material";
import TxtField from "../components/atoms/TxtField";

import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import MenuList from "../components/atoms/MenuList";
import DoctorChip from "../components/DoctorChip";
import { doctorsRead } from "../apis/doctor";
import { svg } from "../assets";

const Doctor = () => {
  const [query, setQuery] = React.useState<string>("");
  const [formData, setFormData] = React.useState({});
  const [specialities, setSpecialities] = React.useState(["A", "B"]);
  const [districts, setDistricts] = React.useState(["C", "D"]);
  const [doctors, setDoctors] = React.useState<[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const consultPhone = "02 981 4246";
  React.useEffect(() => {
    setLoading(true);
    doctorsRead()
      .then((res) => setDoctors(res?.data))
      .finally(() => setLoading(false));
  }, []);
  const handleFormDataInput = (e: any) => {
    e.preventDefault();
    let obj: any = {};
    const key: string = e.target.id ? e.target.id : e.target.name;
    obj[key] = e.target.value;
    setFormData({ ...formData, ...obj });
  };
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
            placeHolder="Search Doctors....."
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
            // flex: 1,
            width: "100%",
            margin: 2,
            // alignItems:"center",
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
          />
          <MenuList
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
          />
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
            doctors?.map((doctor) => (
              <DoctorChip
                image={doctor?.image_url}
                title={doctor?.name}
                degree={doctor?.qualification}
                dept={doctor?.speciality}
                exp={doctor?.experience}
                address={doctor?.address}
                availability={doctor?.availability}
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
