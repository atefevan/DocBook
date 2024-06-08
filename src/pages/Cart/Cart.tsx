import React from "react";
import Background from "../../components/Background";
import { Box, Button } from "@mui/material";
import Footer from "../Footer";
import MedicineChip from "../../components/chips/MedicineChip";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
interface Prop {}
const Cart = ({}: Prop) => {
  const navigate = useNavigate();
  const { cart, addItem, removeItem, getTotalPrice }: any = React.useContext(
    CartContext,
  );
  const [itemLen, setItemLen] = React.useState<number>(0);

  React.useEffect(() => {
    setItemLen(Object.entries(cart).length);
  }, [cart, addItem, removeItem]);

  // React.useEffect(() => {
  //   localStorage.setItem("DOCBOOK_TOTAL_PAYMENT", `${totalPrice}`);
  // }, [totalPrice]);

  return (
    <Background bgColor={itemLen ? "#F2F2F2" : "white"}>
      <Box
        sx={{
          display: "flex",
          flex: 1,
          justifyContent: "space-between",
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
            marginTop: "7vh",
            overflow: itemLen ? "scroll" : "hidden",
          }}
        >
          {itemLen
            ? (
              Object.keys(cart)?.map((key, index) => (
                <MedicineChip
                  key={index}
                  name={cart[key]?.name}
                  img={cart[key]?.iamge_url}
                  quantity={cart[key]?.quantity}
                  price={cart[key]?.price}
                  addMed={() => addItem(cart[key])}
                  deleteMed={() => removeItem(cart[key])}
                />
              ))
            )
            : (
              <Box
                component={"img"}
                width={"100%"}
                alignSelf={"center"}
                src="https://cdn.dribbble.com/users/1231865/screenshots/11157048/media/bc9427646c632ded563ee076fdc5dfda.jpg?resize=1600x1200&vertical=center"
              />
            )}
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{
              margin: 2,
            }}
            onClick={() => {
              itemLen ? navigate("/payment") : navigate("/shop");
            }}
          >
            {itemLen ? "Make Payment" : "Back to Shop"}
          </Button>

          {/* <Typography>Total Medicine Added : {getItemCount(cart)}</Typography> */}
        </Box>
      </Box>
      <Footer />
    </Background>
  );
};

export default Cart;
