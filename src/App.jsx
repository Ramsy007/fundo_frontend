import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Playground from "./components/Playground";
import HowItWorks from "./pages/HowItWorks";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playground" element={<HowItWorks />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/support" element={<Contact />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
