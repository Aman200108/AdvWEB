import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./pages/Home/Home.css";
import Menubar from "./components/Menubar/Menubar";
import "../src/components/Menubar/Menu.css";
import "./pages/Home/HeaderContent/Header.css";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import "./pages/Home/Pictures/Pic1/Pic1.css";
import "./pages/Home/Pictures/Pic2/Pic2.css";
import "./pages/Home/Features/Features.css";
import "./pages/Home/Footer/Footer.css";
import "./pages/About/Page/Page.css";
import "./pages/About/Count/Count.css";
import "./pages/About/Banner/Banner.css";
import "./pages/Contact/Adress/Adress.css";
import "./pages/Contact/Form/Form.css";
import "./pages/Contact/Contact.css";
import "./pages/About/About.css";
import Footer from "./pages/Home/Footer/Footer";
function App() {
  return (
    <BrowserRouter>
      <div className="navbar">
        <Menubar />
      </div>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
