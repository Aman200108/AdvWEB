import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./pages/Home/Home.css";
import Menubar from "./components/Menubar/Menubar";
import "../src/components/Menubar/Menu.css";

import FavPerson from "./pages/FavPerson/FavPerson";
import FavCities from "./pages/FavCities/FavCities";
import FavTourists from "./pages/FavTourists/FavTourists";
import Contact from "./pages/Contact/Contact";
import "./pages/Home/Pictures/Pic1/Pic1.css";
import "./pages/Home/Pictures/Pic2/Pic2.css";
import "./pages/Home/Features/Features.css";
import "./pages/Home/Footer/Footer.css";
import "./pages/FavPerson/Page/Page.css";


import "./pages/Contact/Adress/Adress.css";
import "./pages/Contact/Form/Form.css";
import "./pages/Contact/Contact.css";
import "./pages/FavPerson/FavPerson.css";
import "./pages/FavCities/FavCities.css";
import "./pages/FavTourists/FavTourists.css";
import Footer from "./pages/Home/Footer/Footer";
function App() {
  return (
    <BrowserRouter>
      <div className="navbar">
        <Menubar />
      </div>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/favperson" element={<FavPerson />} />
        <Route path="/favcities" element={<FavCities/>} />
        <Route path="/favtourists" element={<FavTourists/>} />
        <Route path="/contact" element={<Contact/>} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
