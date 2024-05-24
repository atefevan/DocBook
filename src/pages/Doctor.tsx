import { Box, Button, Typography } from "@mui/material";
import { png, svg } from "../assets";
import AutoComplete from "../components/atoms/AutoComplete";
import TxtField from "../components/atoms/TxtField";
import { areas } from "../mock/strings";

import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import MenuList from "../components/atoms/MenuList";
import DoctorChip from "../components/DoctorChip";

const Doctor = () => {
  const [query, setQuery] = React.useState<string>("");
  const [formData, setFormData] = React.useState({});
  const [specialities, setSpecialities] = React.useState(["A", "B"]);
  const [districts, setDistricts] = React.useState(["C", "D"]);
  // React.useEffect(() => {
  //   // bankInfoRead().then((res) => {
  //   //   const { data } = res;
  //   //   const specialities = [];
  //   //   if (data) {
  //   //     data.map((item) => specialities.push(item?.speciality_english));
  //   //     setSpecialities([...specialities]);
  //   //   }
  //   // });
  // }, []);
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
            flexDirection: "column",
            overflow: "scroll",
            height: "60vh",
          }}
        >
          <DoctorChip
            image={png.d1}
            title="Atef Shahrier Evann"
            degree="MBBS BCS (Health),FCPS (Surgery),MS (ORTHO)"
            dept="Orthopedic Surgeon"
            exp="16"
            address="House # 479, DIT Road, (Near Malibagh Rail Gate, W Malibagh, Dhaka, 1217, Bangladesh"
            avaiableIn="1"
            time={{ start: "04.00 am", end: "7.00 am" }}
            days={["Sat", "Sun", "Mon"]}
          />

          <DoctorChip
            image={png.d1}
            title="Atef Shahrier Evann"
            degree="MBBS BCS (Health),FCPS (Surgery),MS (ORTHO)"
            dept="Orthopedic Surgeon"
            exp="16"
            address="House # 479, DIT Road, (Near Malibagh Rail Gate, W Malibagh, Dhaka, 1217, Bangladesh"
            avaiableIn="1"
            time={{ start: "04.00 am", end: "7.00 am" }}
            days={["Sat", "Sun", "Mon"]}
          />
          <DoctorChip
            image={png.d1}
            title="Atef Shahrier Evann"
            degree="MBBS BCS (Health),FCPS (Surgery),MS (ORTHO)"
            dept="Orthopedic Surgeon"
            exp="16"
            address="House # 479, DIT Road, (Near Malibagh Rail Gate, W Malibagh, Dhaka, 1217, Bangladesh"
            avaiableIn="1"
            time={{ start: "04.00 am", end: "7.00 am" }}
            days={["Sat", "Sun", "Mon"]}
          />
        </Box>
        {/* <Box
          sx={{
            display:{xs:"none",md:"flex"},
            width: { md: "35vw" },
            height: "30vh",
            boxShadow: 3,
            margin: 2,
            borderRadius: 2,
          }}
        >
          <Typography>

          </Typography>
        </Box> */}
      </Box>
    </Box>
  );
};

export default Doctor;
