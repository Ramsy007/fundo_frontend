import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Contact from "./pages/Contact";
import Playground from "./components/Playground";
import Step1 from "./pages/Step1";
import OTPMobile from "./pages/OTPMobile";
import Email from "./pages/Email";
import Employment from "./pages/Employment";
import OTPEmail from "./pages/OTPEmail";

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
        <Route path="/otp-mobile" element={<OTPMobile />} />
        <Route path="/email" element={<Email />} />
        <Route path="/employment" element={<Employment />} />
        <Route path="/otp-email" element={<OTPEmail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
