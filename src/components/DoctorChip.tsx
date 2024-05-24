import { Box, Button, Icon, Typography } from "@mui/material";
import ApartmentSharpIcon from "@mui/icons-material/ApartmentSharp";
import AccessTimeSharpIcon from "@mui/icons-material/AccessTimeSharp";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React from "react";
import dayjs, { Dayjs } from "dayjs";
import DatePickerValue from "./atoms/DatePicker";

interface Props {
  title?: string;
  degree?: string;
  image?: any;
  location?: string;
  exp?: string;
  dept?: string;
  avaiableIn?: string;
  time?: any;
  days?: any;
}
const DoctorChip = ({
  title,
  degree,
  image,
  location,
  exp,
  dept,
  avaiableIn,
  time,
  days,
}: Props) => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs());
  // console.log("DATE : ", value["$d"]);
  return (
    <Box
      sx={{
        display: "flex",
        width: { sm: "320px", md: "470px" },
        backgroundColor: "white",
        borderRadius: 2,
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "center", sm: "center", md: "start" },
        boxShadow: 2,
        margin: 2,
      }}
    >
      <Box
        component={"img"}
        src={image}
        sx={{
          width: { xs: "10vw", md: "100px" },
          height: { xs: "12vw", md: "100px" },
          margin: 2,
          borderRadius: 1,
        }}
      />

      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "start" },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "18px" },
            fontWeight: { xs: "bold", md: "normal" },
            color: "#007292",
            margin: { xs: 0, md: 1 },
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "12px", md: "14px" },
            color: "#007292",
            marginLeft: { xs: 0, md: 1 },
          }}
        >
          {degree}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "12px", md: "14px" },
            color: "#007292",
            marginLeft: { xs: 0, md: 1 },
            marginBlock: { xs: 0, md: 1 },
          }}
        >
          {dept}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "12px", md: "14px" },
            color: "#007292",
            marginLeft: { xs: 0, md: 1 },
            marginBlock: { xs: 0, md: 0.5 },
          }}
        >
          {exp} Years of Experience Overall
        </Typography>
        <Box>
          <Box sx={{ display: "flex", marginTop: "1vh", alignItems: "center" }}>
            <Icon>
              <ApartmentSharpIcon
                sx={{ height: "20px", width: "20px", color: "#007292" }}
              />
            </Icon>
            <Typography
              sx={{
                overflow: "scroll",
                fontSize: { xs: "12px", md: "14px" },
                wordWrap: "break-word",
                whiteSpace: "normal",
                marginLeft: 0.5,
                color: "#007292",
                marginBlock: { xs: 0, md: 0.5 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Available in {avaiableIn} locations
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{ display: "flex", marginBlock: "1vh", alignItems: "start" }}
          >
            <Icon>
              <AccessTimeSharpIcon
                sx={{ height: "20px", width: "20px", color: "#007292" }}
              />
            </Icon>
            <Box
              sx={{
                flexDirection: "column",
                display: "flex",

                alignItems: "start",
              }}
            >
              <Typography
                sx={{
                  overflow: "scroll",
                  fontSize: { xs: "12px", md: "14px" },
                  wordWrap: "break-word",
                  whiteSpace: "normal",
                  marginLeft: 0.5,
                  color: "#007292",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Availability
              </Typography>
              <Typography
                sx={{
                  overflow: "scroll",
                  fontSize: "12px",
                  wordWrap: "break-word",
                  whiteSpace: "normal",
                  marginLeft: 0.5,
                  color: "#007292",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                {days?.map((day: string) => `${day} `)}
                {time?.start} - {time?.end}
              </Typography>
            </Box>
          </Box>
        </Box>
        <DatePickerValue
          label={"Appoinemnt"}
          value={value}
          setValue={setValue}
        />
        <Button
          variant="outlined"
          sx={{ alignSelf: { xs: "center", md: "end" }, margin: 1 }}
        >
          Book Appoinment
        </Button>
      </Box>
    </Box>
  );
};

export default DoctorChip;
