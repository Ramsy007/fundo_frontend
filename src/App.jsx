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
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import ThankYouCard from "./pages/ThankYouCard";
import ProtectedRoute from "./components/ProtectedRoute";

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
              <Route path="/support" element={<Contact />} />
              <Route path="/terms-and-conditions" element={<Terms />} />
              <Route path="/privacy-policy" element={<Privacy />} />

              {/* Public Apply Routes */}
              <Route path="/apply/pan-mobile" element={<PanMobile />} />
              <Route path="/apply/otp-mobile" element={<OTPMobile />} />

              {/* Protected Apply Routes */}
              <Route
                path="/apply/email"
                element={
                  <ProtectedRoute>
                    <Email />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apply/employment-status"
                element={
                  <ProtectedRoute>
                    <Employment />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apply/otp-email"
                element={
                  <ProtectedRoute>
                    <OTPEmail />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apply/upload-bank-statement"
                element={
                  <ProtectedRoute>
                    <UploadBankStatement />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apply/loan-amount"
                element={
                  <ProtectedRoute>
                    <LoanAmount />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apply/adhar-card"
                element={
                  <ProtectedRoute>
                    <Aadhar />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apply/otp-aadhar"
                element={
                  <ProtectedRoute>
                    <OTPAadhar />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apply/e-sign"
                element={
                  <ProtectedRoute>
                    <Esign />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apply/disbursal"
                element={
                  <ProtectedRoute>
                    <Disbursal />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apply/congratulations-card"
                element={
                  <ProtectedRoute>
                    <Congratulations />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apply/thank-you"
                element={
                  <ProtectedRoute>
                    <ThankYouCard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apply/references"
                element={
                  <ProtectedRoute>
                    <References />
                  </ProtectedRoute>
                }
              />

              {/* Protected Dashboard Route */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
