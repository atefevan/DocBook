import { Box, Typography } from "@mui/material";
import dayjs from "dayjs";
import { rmvNums } from "../../utils/parser";
interface Prop {
  user_email?: string;
  doctor?: string;
  speciality?: string;
  fee?: string;
  slot?: string;
  date?: string | any;
  status?: string;
}
const AppoinmentCard = ({
  user_email,
  doctor,
  slot,
  speciality,
  date,
  fee,
  status,
}: Prop) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: { xs: "70vw", sm: "70vw", md: "60vw" },
        // flex:1,
        backgroundColor: "white",
        borderRadius: 2,
        flexDirection: "column",
        alignItems: { xs: "center", sm: "center", md: "start" },
        boxShadow: 2,
        margin: 2,
        textAlign: { xs: "center", md: "start" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          // backgroundColor: "pink",
          overflow: "hidden",
        }}
      >
        <Typography
          sx={{
            fontSize: "18px",
            marginInline: 1,
            paddingLeft: "2vw",
            padding: 1,
          }}
        >
          Patient : {rmvNums(user_email?.split("@")[0])}
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            margin: 1,
            paddingRight: "2vw",
            cursor: "pointer",
            borderRadius: 2,
            padding: 1,
            border: "1px solid black",
            "&:hover": {
              backgroundColor: `#E0FBE2`,
            },
          }}
          onClick={() => {
            window.location.href = "mailto:test@test.com";
          }}
        >
          Mail : {user_email}
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: "18px",
          marginInline: 1,
          paddingLeft: "2vw",
          padding: 1,
        }}
      >
        Doctor : {doctor}
      </Typography>
      <Typography
        sx={{
          fontSize: "18px",
          marginInline: 1,
          paddingLeft: "2vw",
          padding: 1,
        }}
      >
        Speciality : {speciality}
      </Typography>
      <Typography
        sx={{
          fontSize: "18px",
          marginInline: 1,
          paddingLeft: "2vw",
          padding: 1,
        }}
      >
        Appoinment Slot : {slot?.replace(/^\w{3} /, "")}
      </Typography>
      <Typography
        sx={{
          fontSize: "18px",
          marginInline: 1,
          paddingLeft: "2vw",
          padding: 1,
        }}
      >
        Book Date: {dayjs(date).format("DD-MMM-YYYY")}
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <Typography
          sx={{
            fontSize: "18px",
            marginInline: 1,
            paddingLeft: "2vw",
            padding: 1,
          }}
        >
          Appoinment Fee : {fee} BDT
        </Typography>
        <Typography
          sx={{
            fontSize: "24px",
            marginInline: 1,
            paddingLeft: "2vw",
            padding: 1,
            color:
              status === "Approved"
                ? "#06D001"
                : status === "Canceled"
                ? "#FF0000"
                : "#03AED2",
          }}
        >
          {status}
        </Typography>
      </Box>
    </Box>
  );
};

export default AppoinmentCard;
