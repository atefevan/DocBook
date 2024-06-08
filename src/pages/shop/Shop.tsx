import { Box, Fab, Skeleton, Typography } from "@mui/material";
import Background from "../../components/Background";
import React from "react";
import { medicinesRead } from "../../apis/medicine";
import MedicineCard from "../../components/cards/MedicineCard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import { CartContext } from "../../context/CartContext";
import Slider from "../../components/Slider";

interface Prop {}
const Shop = ({}: Prop) => {
  const navigate = useNavigate();
  const uToken = localStorage.getItem("DOCBOOK_ACCESS_TOKEN");
  const { cart, addItem, getItemCount }: any = React.useContext(CartContext);
  const [medicines, setMedicines] = React.useState<[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  console.log("SHOPPING CART: ", cart);

  React.useEffect(() => {
    setLoading(true);
    medicinesRead()
      .then((res) => {
        setMedicines(res?.data);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleAddToCart = (data: any) => {
    addItem({
      medicine_id: data._id,
      price: data.price,
      name: data.name,
      iamge_url: data.image_url,
    });
    return enqueueSnackbar("Item Added Successfully", {
      variant: "success",
    });
  };

  return (
    <Background>
      <Box
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          height: "95%",
        }}
      >
        <Typography variant="h6" sx={{ mt: 10, fontWeight: "bold", ml: 5 }}>
          One stop shop for your daily medicine needs
        </Typography>
        {/* <center> */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            padding: 3,
            display: "flex",
            // backgroundColor:"blue",
            overflow: "scroll",
          }}
        >
          {/* <Slider autoHideButton> */}
          {medicines.length > 0 ? (
            medicines?.map((item, index) => (
              <MedicineCard
                title={item?.name}
                unit={item?.unit}
                img={item?.image_url}
                price={item?.price}
                key={index}
                remedy={item?.remedy}
                onClick={() => handleAddToCart(item)}
              />
            ))
          ) : (
            <Box sx={{ display: "flex", width: "85vw" }}>
              {new Array(5).fill(0).map((item, index) => (
                <Skeleton
                  variant="rectangular"
                  width={"30vw"}
                  height={"20vh"}
                  sx={{ margin: 3, borderRadius: 5 }}
                />
              ))}
            </Box>
          )}
          {/* </Slider> */}
        </Box>
        {/* </center> */}
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "100%",
            alignItems: "end",
            justifyContent: "end",
          }}
        >
          {/* <Footer /> */}
          <Fab
            variant="extended"
            sx={{ margin: 5 }}
            onClick={() => {
              uToken
                ? navigate("/cart")
                : enqueueSnackbar("Login To Continue !", {
                    variant: "error",
                  });
            }}
          >
            <ShoppingCartIcon sx={{ mr: 1 }} />
            {`Checkout (${getItemCount(cart)})`}
          </Fab>
        </Box>
      </Box>
      <Footer />
    </Background>
  );
};

export default Shop;
