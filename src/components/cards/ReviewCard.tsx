import { Avatar, Box, Button, Typography } from "@mui/material";
import TxtField from "../atoms/TxtField";
import { rmvNums } from "../../utils/parser";
import dayjs from "dayjs";

interface Prop {
  count?: string | number;
  value?: any;
  setValue?: (value?: any) => void;
  reviews?: any;
  onClick?: (event?: any) => void;
}
const ReviewCard = ({ count = 0, value, reviews, setValue, onClick }: Prop) => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "265px",
        width: { xs: "90vw", md: "65vw" },
        backgroundColor: "white",
        marginTop: "3vh",
        borderRadius: 2,
        boxShadow: 1,
        marginLeft: { xs: "5vw", md: "2vw" },
        alignItems: { xs: "center", md: "start" },
        flexDirection: "column",
        overflow: "scroll",
        padding: 5,
      }}
    >
      <Typography
        sx={{ fontSize: "24px", paddingBottom: "1vh" }}
      >{`Review (${count})`}</Typography>
      <TxtField
        textRows={5}
        isMultiline
        value={value}
        fieldOnChange={setValue}
        fontColor="black"
        focuseBorderColor="black"
        focuseColor="black"
      />
      <Button
        variant="contained"
        fullWidth
        style={{ backgroundColor: "#006769" }}
        onClick={onClick}
      >
        Submit
      </Button>
      {reviews?.map((item: any) => (
        <Box
          sx={{
            display: "flex",
            // flex: 1,
            width: "97%",
            flexDirection: "column",
            boxShadow: 1,
            marginBlock: 1,
            padding: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Avatar />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Typography sx={{ fontSize: "18px", paddingLeft: "10px" }}>
                {rmvNums(`${item?.email}`.split("@")[0])}
              </Typography>
              <Typography sx={{ fontSize: "14px", paddingLeft: "10px" }}>
                {dayjs(item?.createdAt).format("DD-MMM-YYYY")}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{ display: "flex", width: "100%", flex: 1, paddingTop: "1vh" }}
          >
            <Typography sx={{ fontSize: "14px" }}>{item?.message}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ReviewCard;
