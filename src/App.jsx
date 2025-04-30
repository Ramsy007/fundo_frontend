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
import UploadBankStatement from "./pages/UploadBankStatement";
import Eligibleupto from "./pages/Eligibleupto";
import Aadhar from "./pages/Aadhar";
import OTPAadhar from "./pages/OTPAadhar";
import Esign from "./pages/Esign";
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
        <Route path="/upload-bank-statement" element={<UploadBankStatement />} />
        <Route path="/eligibleupto" element={<Eligibleupto />} />
        <Route path="/aadhar" element={<Aadhar />} />
        <Route path="/otp-aadhar" element={<OTPAadhar />} />
        <Route path="/esign" element={<Esign />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
