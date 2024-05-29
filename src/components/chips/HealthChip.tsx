import { Box, Avatar, Typography, Button } from "@mui/material";
interface Props {
  image?: any;
  title?: any;
  price?: any;
  onClick?: (value?: any) => void;
}
const HealthChip = ({ image, title, price, onClick }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        minWidth: { xs: "40vw", sm: "30vw", md: "15vw" },
        minHeight: { xs: "35vw", sm: "30vw", md: "15vw" },
        backgroundColor: "white",
        borderRadius: 2,
        flexDirection: "column",
        alignItems: "center",
        overflow: "clip",
        margin: 2,
        boxShadow: 2,
      }}
    >
      <img
        src={image}
        width={"100%"}
        // sx={{
        //   height: { xs: "40px", sm: "65px", md: "90px" },
        //   width: { xs: "40px", sm: "65px", md: "90px" },
        //   marginBlock: { xs: ".4vh", sm: ".6vh", md: ".8vh" },
        // }}
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
        variant="text"
        onClick={onClick}
        sx={{
          width: { xs: "150px", sm: "110px", md: "140px" },
          fontSize: { xs: "10px", sm: "12px", md: "12px" },
          marginBlock: ".5vh",
        }}
      >
        Consult Now
      </Button>
    </Box>
  );
};

export default HealthChip;
