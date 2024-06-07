import { Box, Button, Typography } from "@mui/material";
import Background from "../Background";
import { png } from "../../assets";
interface Prop {
  item?: any;
}
const MedicineChip = ({ item }: Prop) => {
  return (
    <Box
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
          src={item?.img ? item?.img : png.med_skeleton}
          height={"80%"}
          sx={{ scale: 1.15, ml: "2vw", borderRadius: 5 }}
          draggable={false}
        />
        <Typography sx={{ ml: "2vw", fontSize: "28px", fontWeight: "bold" }}>
          {item?.name ? item?.name : "ITEM NAME"}{" "}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", height: "100px", alignItems: "center" }}>
        <Button variant="contained" sx={{ width: "40px" }}>
          <Typography sx={{ fontSize: "20px" }}>+ </Typography>
        </Button>
        <Typography sx={{ marginInline: "1vw", fontSize: "24px" }}>
          2
        </Typography>
        <Button variant="contained" color="error" sx={{ width: "40px" }}>
          <Typography sx={{ fontSize: "20px" }}>-</Typography>
        </Button>
        <Typography
          sx={{ marginInline: "1vw", fontSize: "28px", fontWeight: "bold" }}
        >
          {item?.price ? item?.price : "100 "} BDT
        </Typography>
      </Box>
    </Box>
  );
};

export default MedicineChip;
