import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/doctor/Doctor";
import ButtonAppBar from "./components/Appbar";
import Login from "./pages/Login";
import { SnackbarProvider } from "notistack";
import Hospital from "./pages/hospital/Hospital";
import HospitalDetails from "./pages/hospital/HospitalDetails";
import { SkeletonTheme } from "react-loading-skeleton";
import DoctorDetails from "./pages/doctor/DoctorDetails";
import AmbulanceDetails from "./pages/Ambulance/AmbulanceDetails";
import Ambulance from "./pages/Ambulance/Ambulance";

const App = () => {
  return (
    <SnackbarProvider style={{ fontFamily: "Arial" }}>
      <SkeletonTheme>
        <BrowserRouter>
          <ButtonAppBar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="doctor" element={<Doctors />} />
            <Route path="doctor/:doctorId" element={<DoctorDetails />} />
            <Route path="login" element={<Login />} />
            <Route path="hospital" element={<Hospital />} />
            <Route path="ambulance" element={<Ambulance />} />
            <Route path="hospital/:hospitalId" element={<HospitalDetails />} />
            <Route
              path="ambulance/:ambulanceId"
              element={<AmbulanceDetails />}
            />
          </Routes>
        </BrowserRouter>
      </SkeletonTheme>
    </SnackbarProvider>
  );
};

export default App;
