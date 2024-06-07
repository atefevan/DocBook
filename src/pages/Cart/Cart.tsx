import React from "react";
import Background from "../../components/Background";
import { Box, Button } from "@mui/material";
import Footer from "../Footer";
import MedicineChip from "../../components/chips/MedicineChip";
import { useNavigate } from "react-router-dom";
interface Prop {}
const Cart = ({}: Prop) => {
  const navigate = useNavigate();
  return (
    <Background>
      <Box
        sx={{
          display: "flex",
          flex: 1,
          //   backgroundColor: "blue",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          height: "95%",
        }}
      >
        <Box
          sx={{
            // display: "flex",
            flexDirection: "column",
            width: "60%",
            // backgroundColor: "orange",
            marginTop: "10vh",
            overflow: "scroll",
          }}
        >
          {new Array(10).fill(0).map((item, index) => (
            <MedicineChip />
          ))}
        </Box>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/payment");
          }}
        >
          Make Payment
        </Button>
      </Box>
      <Footer />
    </Background>
  );
};

export default Cart;
