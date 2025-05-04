import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userAPI } from "../services/api";
import { useDispatch, useSelector } from "react-redux";
// import { updateEligibleLoanAmount } from "../redux/slices/loanSlice";
import { updateEligibleLoanAmount } from "../redux/slices/userDataSlice";
import logo from "../assets/logo.png";
import StepsList from "../components/StepsList";
import Navbarsteps from "../components/home/Navbarsteps";
import FooterStep from "../components/FooterStep";
import { FaCloudUploadAlt, FaEye, FaEyeSlash, FaFileAlt, FaLock } from "react-icons/fa";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import PageLoader from "../components/Loader";

export default function UploadBankStatement() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [showCongratsModal, setShowCongratsModal] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const [maxLoanAmount, setMaxLoanAmount] = useState(0);
  const [isPasswordProtected, setIsPasswordProtected] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // const eligibleLoanAmount = useSelector((state) => state.loan.eligibleLoanAmount);
  const eligibleLoanAmount = 7000;
  // Log Redux state changes
  // useEffect(() => {
  //   console.log("Current eligible loan amount:", eligibleLoanAmount);
  // }, [eligibleLoanAmount]);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setIsUploading(false);
      setUploadError(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      setUploadError("Please select a file to upload.");
      return;
    }
    if (isPasswordProtected && !password) {
      setUploadError("Please enter the password for your statement.");
      return;
    }

    setIsUploading(true);
    try {
      const response = await userAPI.uploadBankStatement(selectedFile, isPasswordProtected ? password : null);
      console.log("Bank Statement Upload Success:", response);

      if (response.maxLoanAmount) {
        const newMaxAmount = parseInt(response.maxLoanAmount);
        setMaxLoanAmount(newMaxAmount);
        dispatch(updateEligibleLoanAmount(newMaxAmount));
        console.log("Updated max loan amount:", newMaxAmount);
      }

      setShowCongratsModal(true);
    } catch (error) {
      console.log("error-------->", error);
      const errorMessage = error.message;

      if (errorMessage.includes("Bank statement is already completed")) {
        navigate("/apply/loan-amount");
        return;
      }
      setUploadError(errorMessage);
    } finally {
      setIsUploading(false);
    }
  };

  const handleCloseModal = () => {
    setShowCongratsModal(false);
    navigate("/apply/loan-amount");
  };

  return (
    <>
      {/* <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      /> */}
      <div className="min-h-screen flex flex-col justify-between bg-white pl-0 pr-0 md:pl-6 md:pr-6 rounded-b-lg relative">
        <div className="bg-[#04344a] mb-2 md:mb-4 rounded-b-3xl">
          {/* Main Content */}
          <div className="relative z-10 flex flex-col min-h-[calc(100vh-100px)]">
            {/* Navbar */}
            <div className="flex justify-center pt-2 md:pt-4">
              <div className="w-full md:w-[700px]">
                <Navbarsteps />
              </div>
            </div>

            {/* Fundo Baba Logo */}
            <div className="flex justify-center mt-2 md:mt-4 mb-6 md:mb-10 lg:mb-10">
              <img src={logo} alt="Fundo Baba Logo" className="w-24 md:w-32" />
            </div>

            {/* Main Section */}
            <div className="flex flex-1 items-center justify-center relative flex-col mb-6 md:mb-10 lg:mb-10">
              {/* Card Wrapper for double border */}
              <div className="bg-[#1ca0e3] p-1 rounded-3xl shadow-xl">
                <div className="bg-white p-1 rounded-2xl">
                  {/* Main Card */}
                  <div
                    className="relative bg-[#d5e6ef] rounded-xl px-3 py-3 sm:px-5 sm:py-5 md:px-8 md:py-8 w-full max-w-[350px] sm:max-w-[400px] md:max-w-lg flex flex-col items-center mx-2 sm:mx-4 md:mx-0"
                    style={{ minHeight: "240px" }}
                  >
                    {/* BabaStep Image */}
                    <div className="absolute -top-17 -left-4 md:-top-18 md:-left-32 z-40">
                      <img
                        src="/Babaotp.png"
                        alt="Baba"
                        className="w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] md:w-[140px] md:h-[140px] lg:w-[180px] lg:h-[180px] object-contain drop-shadow-2xl"
                      />
                    </div>

                    {/* Card Content */}
                    <div className="w-full">
                      <div className="bg-[#c2d7e7] rounded-lg px-3 py-3 mb-3">
                        <p className="text-[13px] sm:text-base text-[#2b3a4b] font-medium mb-1">
                          Baba checked the stars — <span className="font-bold">₹{eligibleLoanAmount?.toLocaleString() || "0"}</span> is shining for you!
                        </p>
                        <p className="text-[12px] sm:text-sm text-[#2b3a4b]">But first, a small ritual—your bank statement!</p>
                      </div>
                      <div className="bg-[#e3eefe] rounded-lg px-3 py-3">
                        <p className="text-[13px] sm:text-base text-[#2b3a4b] font-semibold mb-1">
                          Tap, upload, and let Baba handle the rest
                        </p>
                        <p className="text-[12px] sm:text-sm text-[#6b7a8b] mb-3">Upload your bank statement to proceed</p>
                        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                          {/* Upload Area */}
                          <input
                            type="file"
                            ref={fileInputRef}
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={handleFileChange}
                            className="hidden"
                          />
                          <div
                            onClick={handleUploadClick}
                            className="group flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-[#1a5be6] rounded-lg bg-white hover:bg-[#e3eefe] cursor-pointer transition-all duration-300 relative overflow-hidden mb-2"
                          >
                            <div className="relative z-10 flex flex-col items-center">
                              <div className="w-10 h-10 rounded-full bg-[#e3eefe] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                                <FaCloudUploadAlt className="w-6 h-6 text-[#1a5be6]" />
                              </div>
                              <span className="text-xs text-[#1a5be6] font-semibold">Click to upload</span>
                            </div>
                          </div>
                          {/* Show file info */}
                          {selectedFile && (
                            <div className="bg-white p-2 rounded-lg shadow-sm border border-[#e3eefe] flex items-center justify-between mb-2">
                              <div className="flex items-center">
                                <FaFileAlt className="w-4 h-4 text-[#1a5be6] mr-2" />
                                <p className="text-xs text-gray-700 truncate max-w-[120px]">
                                  {selectedFile.name.length > 20 ? selectedFile.name.substring(0, 20) + '...' : selectedFile.name}
                                </p>
                              </div>
                              <span className="text-xs text-[#1a5be6] font-medium">
                                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                              </span>
                            </div>
                          )}
                          {/* Password protection */}
                          {selectedFile && (
                            <label className="flex items-center space-x-2 cursor-pointer bg-white p-2 rounded-lg shadow-sm mb-2">
                              <input
                                type="checkbox"
                                checked={isPasswordProtected}
                                onChange={(e) => setIsPasswordProtected(e.target.checked)}
                                className="form-checkbox h-4 w-4 text-[#1a5be6] rounded border-gray-300 focus:ring-[#1a5be6]"
                              />
                              <span className="text-xs text-gray-800">Password-protected statement</span>
                            </label>
                          )}
                          {selectedFile && isPasswordProtected && (
                            <div className="relative bg-white p-2 rounded-lg shadow-sm mb-2">
                              <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter password"
                                className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a5be6] focus:border-transparent pr-10 text-xs text-gray-700 placeholder-gray-400"
                              />
                              <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#1a5be6] focus:outline-none"
                              >
                                {showPassword ? <FaEyeSlash className="w-4 h-4" /> : <FaEye className="w-4 h-4" />}
                              </button>
                            </div>
                          )}
                          {/* Error and Success Messages */}
                          {uploadError && (
                            <p className="text-xs font-medium text-red-600 text-center bg-red-50 p-2 rounded-lg mb-1">{uploadError}</p>
                          )}
                          {/* Upload Button */}
                          {selectedFile && (
                            <button
                              type="submit"
                              disabled={isUploading}
                              className="w-full flex items-center justify-center gap-2 bg-[#1a5be6] hover:bg-[#0d3a8c] text-white font-bold py-2 rounded-full text-sm sm:text-base shadow transition disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              {isUploading ? (
                                <span className="animate-spin">⌛</span>
                              ) : (
                                <>
                                  <FaLock className="w-4 h-4" />
                                  Upload Bank Statement
                                </>
                              )}
                            </button>
                          )}
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Steps List - Mobile */}
              <div className="md:hidden w-full mt-2">
                <div className="flex justify-center">
                  <StepsList />
                </div>
              </div>

              {/* Steps List - Desktop */}
              <div className="hidden md:block">
                <div className="w-auto">
                  <StepsList />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <FooterStep />
      </div>

      {/* Congratulations Modal */}
      {showCongratsModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-full max-w-[300px] mx-4 overflow-hidden">
            <div className="bg-[#04344a] p-6 flex flex-col items-center">
              {/* Money Bag Icon */}
              <div className="w-48 h-48 mb-3 -ml-8">
                <img
                  src="/boom-upload-bank-statement.png"
                  alt="Boom"
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">BOOM!</h2>
              <p className="text-xl font-semibold text-white">₹{maxLoanAmount.toLocaleString()}</p>
              <p className="text-sm text-white/80">unlocked for you!</p>
            </div>
            <div className="p-4">
              <button
                onClick={handleCloseModal}
                className="w-full bg-[#04344a] hover:bg-[#032736] text-white font-semibold py-2 rounded-full transition-colors"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 