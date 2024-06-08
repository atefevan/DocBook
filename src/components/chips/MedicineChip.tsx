import { Box, Button, Tooltip, Typography } from "@mui/material";
import { png } from "../../assets";
interface Prop {
  // item?: any;
  key?: number;
  img?: any;
  name?: string;
  price?: number;
  quantity?: number;
  addMed?: (value?: any) => void;
  deleteMed?: (value?: any) => void;
}
const MedicineChip = ({
  key,
  img,
  name,
  price,
  quantity,
  addMed,
  deleteMed,
}: Prop) => {
  return (
    <Box
      key={key}
      sx={{
        display: "flex",
        // width: "100%",
        alignItems: "center",
        height: "100px",
        marginBlock: 1.5,
        borderRadius: 3,
        backgroundColor: "white",
        overflow: "clip",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", height: "100px", alignItems: "center" }}>
        <Box
          component={"img"}
          src={img ? img : png.med_skeleton}
          width={"100px"}
          height={"80px"}
          sx={{ scale: 1.15, margin: "20px", borderRadius: 4,border:".3px solid black" }}
          draggable={false}
        />
        <Tooltip title={name ? name : "MED NAME"}>
          <Typography sx={{ ml: ".5vw", fontSize: "24px", fontWeight: "bold" }}>
            {name ? name.split(" ").slice(0, 3).join(" ") : "ITEM NAME"}
          </Typography>
        </Tooltip>
      </Box>
      <Box sx={{ display: "flex", height: "100px", alignItems: "center" }}>
      <Button
          variant="contained"
          color="error"
          sx={{ width: "40px" }}
          onClick={deleteMed}
        >
          <Typography sx={{ fontSize: "20px" }}>-</Typography>
        </Button>
        <Typography sx={{ marginInline: "1vw", fontSize: "24px" }}>
          {quantity ? quantity : 0}
        </Typography>
        <Button variant="contained" sx={{ width: "40px" }} onClick={addMed}>
          <Typography sx={{ fontSize: "20px" }}>+ </Typography>
        </Button>
        

        <Typography
          sx={{
            marginInline: "1vw",
            fontSize: "16px",
            fontWeight: "bold",
            textAlign: "start",
            width: "90px",
          }}
        >
          {price ? price : 0} BDT
        </Typography>
      </Box>
    </Box>
  );
};

export default MedicineChip;
