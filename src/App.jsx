import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Contact from "./pages/Contact";
import Playground from "./components/Playground";
import Step1 from "./pages/Step1";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/step1" element={<Step1 />} />
        <Route path="/support" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
