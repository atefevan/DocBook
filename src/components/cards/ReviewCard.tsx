import { Avatar, Box, Button, Typography } from "@mui/material";
import TxtField from "../atoms/TxtField";
import { rmvNums } from "../../utils/parser";

interface Prop {
  count?: string | number;
  value?: any;
  setValue?: (value?: any) => void;
  reviews?: any;
}
const ReviewCard = ({
  count = 0,
  value,
  reviews = [
    {
      email: "atefevan1020@gmail.com",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      email: "atefevan1020@gmail.com",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ],
  setValue,
}: Prop) => {
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
      <Button variant="contained" fullWidth style={{backgroundColor:"#006769"}}>Submit</Button>
      {reviews?.map((item: any) => (
        <Box
          sx={{
            display: "flex",
            flex: 1,
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
            <Typography sx={{ fontSize: "18px", paddingLeft: "10px" }}>
              {rmvNums(`${item?.email}`.split("@")[0])}
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", width: "100%", flex: 1, paddingTop: "1vh" }}
          >
            <Typography sx={{ fontSize: "14px" }}>{item?.review}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ReviewCard;
