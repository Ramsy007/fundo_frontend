import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Contact from "./pages/Contact";
import Playground from "./components/Playground";
import PanMobile from "./pages/PanMobile";
import OTPMobile from "./pages/OTPMobile";
import Email from "./pages/Email";
import Employment from "./pages/Employment";
import OTPEmail from "./pages/OTPEmail";
import UploadBankStatement from "./pages/UploadBankStatement";
import LoanAmount from "./pages/LoanAmount";
import Aadhar from "./pages/Aadhar";
import OTPAadhar from "./pages/OTPAadhar";
import Esign from "./pages/Esign";
import Dashboard from "./pages/Dashboard";
import Congratulations from "./pages/Congratulations";
import Disbursal from "./pages/Disbursal";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import References from "./pages/References";

let persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/howitworks" element={<HowItWorks />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/apply/pan-mobile" element={<PanMobile />} />
          <Route path="/support" element={<Contact />} />
          <Route path="/apply/otp-mobile" element={<OTPMobile />} />
          <Route path="/apply/email" element={<Email />} />
          <Route path="/apply/employment-status" element={<Employment />} />
          <Route path="/apply/otp-email" element={<OTPEmail />} />
          <Route path="/apply/upload-bank-statement" element={<UploadBankStatement />} />
          <Route path="/apply/loan-amount" element={<LoanAmount />} />
          <Route path="/apply/adhar-card" element={<Aadhar />} />
          <Route path="/apply/otp-aadhar" element={<OTPAadhar />} />
          <Route path="/apply/e-sign" element={<Esign />} />
          <Route path="/apply/disbursal" element={<Disbursal />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/apply/congratulations-card" element={<Congratulations />} />
          <Route path="/apply/references" element={<References />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    </PersistGate>
    </Provider>
  );
}

export default App;
