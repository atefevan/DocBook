import React from "react";
import Background from "../../components/Background";
import { Box, Button, Typography } from "@mui/material";
import MenuList from "../../components/atoms/MenuList";
import Footer from "../Footer";
import TxtField from "../../components/atoms/TxtField";
import { rmvNums } from "../../utils/parser";
import { addOrder } from "../../apis/order";
import { enqueueSnackbar } from "notistack";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
interface Props {}
const Payment = ({}: Props) => {
  const navigate = useNavigate();
  const { cart, getTotalPrice }: any = React.useContext(CartContext);
  const price = getTotalPrice(cart);
  const userEmail = localStorage.getItem("DOCBOOK_USER_EMAIL");
  const userId = localStorage.getItem("DOCBOOK_USER_ID");
  const userName = rmvNums(userEmail?.split("@")[0]);
  const [formData, setFormData] = React.useState<any>({});

  const handleFormDataInput = (e: any) => {
    e.preventDefault();
    let obj: any = {};
    const key: string = e.target.id ? e.target.id : e.target.name;
    obj[key] = e.target.value;
    setFormData({ ...formData, ...obj });
  };
  const handleSubmit = () => {
    console.log("F : ", formData);
    if (!formData?.payment_method) {
      return enqueueSnackbar("Select Payment Method", {
        variant: "error",
      });
    }
    if (!formData?.phone) {
      return enqueueSnackbar("Fill up phone number", {
        variant: "error",
      });
    }

    if (!formData?.account) {
      return enqueueSnackbar("Fill up account number ", {
        variant: "error",
      });
    }
    addOrder({
      user_id: userId,
      total_price: parseInt(price!),
      products: cart,
      name: userName,
      email: userEmail!,
      phone_no: formData?.phone,
      transaction_id: formData?.account,
      payment_method: formData?.payment_method,
      address: formData?.address,
    }).then((res) => {
      navigate("/shop");
      return enqueueSnackbar(res?.message, {
        variant: res?.status,
      });
    });
  };
  return (
    <Background>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            height: "100%",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              marginTop: "7vh",
              display: "flex",
              width: "100%",
              height: "8vh",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ fontSize: "32px", fontFamily: "Arial", fontWeight: "bold" }}
            >
              CONFIRM PAYMENT
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: "2vh",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                fontFamily: "Arial",
                fontWeight: "bold",
                color: "#ff6247",
                marginBottom: "2vh",
              }}
            >
              Pay {price}৳ through bKash, nagad or rocket to confirm purchase
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              // width: "100%",
              borderRadius: 3,
              // height: "75vh",
              flex: 1,
              marginInline: "5vw",
              paddingInline: "2vw",
              marginBottom: "2vh",
              alignItems: "center",
              backgroundColor: "white",
              boxShadow: 3,
              flexDirection: "column",
            }}
          >
            <MenuList
              value={
                Object.keys(formData).length ? formData?.payment_method : ""
              }
              id={"payment_method"}
              name={"payment_method"}
              key={"payment_method"}
              label="Method"
              items={["Bank", "Bkash", "Nagad", "Rocket"]}
              style={{ marginTop: "5vh" }}
              outlineColor="black"
              onChange={handleFormDataInput}
            />
            <TxtField
              label="Phone"
              id="phone"
              name="phone"
              placeHolder="Enter your phone number"
              value={Object.keys(formData).length ? formData?.phone : ""}
              fieldOnChange={handleFormDataInput}
              style={{ width: "100%", marginTop: "3vh" }}
              fontColor="black"
              focuseColor="black"
              focuseBorderColor="black"
            />
            <TxtField
              label="Username"
              id="username"
              name="username"
              value={userName}
              style={{ width: "100%", marginTop: "3vh" }}
              fontColor="black"
              focuseColor="black"
              focuseBorderColor="black"
            />
            <TxtField
              label="Email"
              id="email"
              name="email"
              value={userEmail}
              style={{ width: "100%", marginTop: "3vh" }}
              fontColor="black"
              focuseColor="black"
              focuseBorderColor="black"
            />
            <TxtField
              label={
                formData?.payment_method === "Bank"
                  ? "Bank Account No"
                  : "Account"
              }
              id="account"
              name="account"
              placeHolder={
                formData?.payment_method === "Bank"
                  ? "Enter your bank account number"
                  : "Enter your account number"
              }
              value={Object.keys(formData).length ? formData?.account : ""}
              fieldOnChange={handleFormDataInput}
              style={{ width: "100%", marginTop: "3vh" }}
              fontColor="black"
              focuseColor="black"
              focuseBorderColor="black"
            />
            <TxtField
              label="Address"
              id="address"
              name="address"
              placeHolder="Enter your address"
              value={Object.keys(formData).length ? formData?.address : ""}
              fieldOnChange={handleFormDataInput}
              isMultiline
              textRows={5}
              style={{ width: "100%", marginTop: "2vh" }}
              fontColor="black"
              focuseColor="black"
              focuseBorderColor="black"
            />
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{
                backgroundColor: "#97BE5A",
                width: "20%",
                color: "black",
                marginTop: "2.5vh",
              }}
            >
              Confirm
            </Button>
          </Box>
          <Footer />
        </Box>
      </Box>
    </Background>
  );
};

export default Payment;
