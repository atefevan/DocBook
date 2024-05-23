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
        minWidth: { xs: "20vw", sm: "18vw", md: "15vw" },
        // minWidth:"15vw",
        backgroundColor: "white",
        borderRadius: 2,
        flexDirection:"column",
        alignItems: "center",
        marginInline: 1,
        // border: ".2px solid grey",
        
        overflow:"clip",
        margin:2,boxShadow:2,
      }}
    >
      <img
        // src={image}
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
          width: { xs: "100px", sm: "110px", md: "140px" },
          fontSize: { xs: "8px", sm: "9px", md: "12px" },
          marginBlock: ".5vh",
        }}
      >
        Consult Now
      </Button>
    </Box>
  );
};

export default HealthChip;
