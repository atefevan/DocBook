import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctor";
import ButtonAppBar from "./components/Appbar";
import Login from "./pages/Login";
import { SnackbarProvider } from "notistack";

const App = () => {
  return (
    <SnackbarProvider style={{ fontFamily: "Arial" }}>
      <BrowserRouter>
        <ButtonAppBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="doctor" element={<Doctors />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </SnackbarProvider>
  );
};

export default App;
