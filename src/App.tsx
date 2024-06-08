import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/doctor/Doctor";
import ButtonAppBar from "./components/Appbar";
import Login from "./pages/Login";
import { SnackbarProvider } from "notistack";
import { CartProvider } from "./context/CartContext";
import Hospital from "./pages/hospital/Hospital";
import HospitalDetails from "./pages/hospital/HospitalDetails";
import { SkeletonTheme } from "react-loading-skeleton";
import DoctorDetails from "./pages/doctor/DoctorDetails";
import AmbulanceDetails from "./pages/Ambulance/AmbulanceDetails";
import Ambulance from "./pages/Ambulance/Ambulance";
import Appoinment from "./pages/Appoinment/Appoinment";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/Cart/Cart";
import Payment from "./pages/Payment/Payment";
import OrderList from "./pages/Payment/OrderList";

const App = () => {
  return (
    <SnackbarProvider style={{ fontFamily: "Arial" }}>
      <CartProvider>
        <SkeletonTheme>
          <BrowserRouter>
            <ButtonAppBar />
            <Routes>
              <Route index element={<Home />} />
              <Route path="doctor" element={<Doctors />} />
              <Route path="appointment" element={<Appoinment />} />
              <Route path="doctor/:doctorId" element={<DoctorDetails />} />
              <Route path="login" element={<Login />} />
              <Route path="hospital" element={<Hospital />} />
              <Route path="ambulance" element={<Ambulance />} />
              <Route path="shop" element={<Shop />} />
              <Route path="cart" element={<Cart />} />
              <Route path="orders" element={<OrderList />} />
              <Route path="payment" element={<Payment />} />
              <Route
                path="hospital/:hospitalId"
                element={<HospitalDetails />}
              />
              <Route
                path="ambulance/:ambulanceId"
                element={<AmbulanceDetails />}
              />
            </Routes>
          </BrowserRouter>
        </SkeletonTheme>
      </CartProvider>
    </SnackbarProvider>
  );
};

export default App;
