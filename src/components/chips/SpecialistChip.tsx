import { Avatar, Box, Button, Typography } from "@mui/material";
import { png } from "../../assets";

interface Props {
  image?: any;
  title?: string;
  price?: string;
  onClick?: (value?: any) => void;
}
const SpecialistChip = ({ image, title, price, onClick }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        minWidth: { xs: "110px", sm: "120px", md: "150px" },
        height: {xs:"18vh",sm:"19vh",md:"22vh"},
        backgroundColor: "white",
        borderRadius: 2,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginInline: 1,
        border: ".2px solid grey",
      }}
    >
      <Avatar
        src={image}
        sx={{
          height: { xs: "60px", sm: "70px", md: "90px" },
          width: { xs: "60px", sm: "70px", md: "90px" },
          marginBlock: { xs: ".4vh", sm: ".6vh", md: ".8vh" },
        }}
      />

      <Typography
        style={{
          overflow: "scroll",
          paddingInline: "10px",
          wordBreak: "break-word",
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
      <Typography style={{ marginBlock: ".5vh", color: "#5AB2FF" }}>
        {price}
      </Typography>
      <Button
        variant="outlined"
        onClick={onClick}
        sx={{
          width: { xs: "120px", sm: "130px", md: "140px" },
          fontSize: { xs: "10px", sm: "11px", md: "12px" },
          marginBlock: ".5vh",
        }}
      >
        Consult Now
      </Button>
    </Box>
  );
};

export default SpecialistChip;
