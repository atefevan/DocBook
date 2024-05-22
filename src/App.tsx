import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import ButtonAppBar from "./components/Appbar";

const App = () => {
  return (
    <BrowserRouter>
      <ButtonAppBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="doctor" element={<Doctors />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
