import React, { useState, useRef } from "react";
import logo from "../assets/logo.png";
import StepsList from "../components/StepsList";
import Navbarsteps from "../components/home/Navbarsteps";
import FooterStep from "../components/FooterStep";
import { FaCloudUploadAlt, FaEye, FaEyeSlash, FaFileAlt, FaLock } from "react-icons/fa";

export default function UploadBankStatement() {
  const [file, setFile] = useState(null);
  const [uploadMsg, setUploadMsg] = useState("");
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isPasswordProtected, setIsPasswordProtected] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const [showCongratsModal, setShowCongratsModal] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setUploadMsg("");
      setUploadError(null);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedFile) {
      setUploadError("Please select a file to upload.");
      setUploadMsg("");
      return;
    }
    if (isPasswordProtected && !password) {
      setUploadError("Please enter the password for your statement.");
      setUploadMsg("");
      return;
    }
    setUploadMsg("Bank statement uploaded successfully!");
    setUploadError(null);
    setShowCongratsModal(true);
  };

  const handleCloseModal = () => {
    setShowCongratsModal(false);
    // You can add navigation logic here if needed
  };

  return (
    <>
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
            <div className="flex justify-center mt-2 md:mt-4">
              <img src={logo} alt="Fundo Baba Logo" className="w-24 md:w-32" />
            </div>

            {/* Main Section */}
            <div className="flex flex-1 items-center justify-center relative flex-col">
              {/* Card Wrapper for double border */}
              <div className="bg-[#1ca0e3] p-1 rounded-3xl shadow-xl">
                <div className="bg-white p-1 rounded-2xl">
                  {/* Main Card */}
                  <div
                    className="relative bg-[#d5e6ef] rounded-xl px-3 py-3 sm:px-5 sm:py-5 md:px-8 md:py-8 w-full max-w-[350px] sm:max-w-[400px] md:max-w-lg flex flex-col items-center mx-2 sm:mx-4 md:mx-0"
                    style={{ minHeight: "240px" }}
                  >
                    {/* BabaStep Image */}
                    <div
                      className="absolute -top-14 -left-8 md:-top-12 md:-left-20 z-40"
                    >
                      <img 
                        src="/Babastep.png" 
                        alt="Baba" 
                        className="w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] md:w-[140px] md:h-[140px] lg:w-[180px] lg:h-[180px] object-contain drop-shadow-2xl" 
                      />
                    </div>

                    {/* Card Content */}
                    <div className="w-full">
                      <div className="bg-[#c2d7e7] rounded-lg px-3 py-3 mb-3">
                        <p className="text-[13px] sm:text-base text-[#2b3a4b] font-medium mb-1">
                          Baba checked the stars — <span className="font-bold">₹28,000</span> is shining for you!
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
                          {uploadMsg && (
                            <p className="text-xs font-medium text-green-600 text-center bg-green-50 p-2 rounded-lg mb-1">{uploadMsg}</p>
                          )}
                          {/* Upload Button */}
                          <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 bg-[#1a5be6] hover:bg-[#0d3a8c] text-white font-bold py-2 rounded-full text-sm sm:text-base shadow transition"
                          >
                            <FaLock className="w-4 h-4 mr-1" />
                            Upload Bank Statement
                          </button>
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
              <div className="w-16 h-16 bg-[#ffd700] rounded-full flex items-center justify-center mb-3">
                <svg className="w-10 h-10 text-[#04344a]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">BOOM!</h2>
              <p className="text-xl font-semibold text-white">₹75,000</p>
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