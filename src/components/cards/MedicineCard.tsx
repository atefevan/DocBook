import { Box, Button, Typography } from "@mui/material";
import { png } from "../../assets";
interface Prop {
  title?: string;
  img?: any;
  remedy?: string;
  price?: number | string;
  unit?: number | string;
  key?: number;
  onClick?: (value?: any) => void;
}
const MedicineCard = ({
  key,
  title,
  img,
  remedy,
  price,
  unit,
  onClick,
}: Prop) => {
  //
  return (
    <Box
      sx={{
        display: "flex",
        // flex: 1,
        backgroundColor: "white",
        overflow: "clip",
        borderRadius: 3,
        flexDirection: "column",
        width: "250px",
        height: "370px",
        boxShadow: 1,
        alignItems: "center",
        margin: 1.5,
      }}
      key={key}
    >
      <Box
        component={"img"}
        src={img ? img : png.med_skeleton}
        height={"60%"}
        sx={{ scale: 1.15 }}
        draggable={false}
      />
      <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
        {title ? title : "Name : "}
      </Typography>
      <Typography>{unit ? `Unit : ${unit} / Per Peice` : `Unit : `}</Typography>
      <Typography>{price ? `Price : ${price} / Unit` : `Price : `}</Typography>
      <Typography>{remedy ? `Remedy : ${remedy}` : `Remedy : `}</Typography>
      <Button
        variant="outlined"
        sx={{ width: "70%", alignSelf: "center" }}
        onClick={onClick}
      >
        Add To Cart
      </Button>
    </Box>
  );
};

export default MedicineCard;
