import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import StepsList from "../components/StepsList";
import Navbarsteps2 from "../components/home/Navbarsteps2";
import FooterStep from "../components/FooterStep";
import { userAPI } from "../services/api";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { changeTracker } from "../redux/slices/lTracherSlice";
import PageLoader from "../components/Loader";
// import { LEAD_STAGE, leadStageToRouteMap } from "../utils/constants";
// import useLeadStage from "../hooks/useLeadStage";
// import PageLoader from "../components/Loader";

// const curr_page_lead_stage = LEAD_STAGE.VERIFY_AADHAAR_KYC;

export default function Esign() {
  const [loanDetails, setLoanDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPreviewLoading, setIsPreviewLoading] = useState(false);
  const [previewError, setPreviewError] = useState('');
  const dispatch = useDispatch();
  // const { leadStage } = useLeadStage();

  useEffect(() => {
    dispatch(changeTracker({ step: 4 }));
  }, [dispatch]);

  useEffect(() => {
    const fetchLoanDetails = async () => {
      try {
        const response = await userAPI.getESignData();
        setLoanDetails(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching loan details:", err);
        setLoading(false);
      }
    };

    fetchLoanDetails();
  }, []);

  // if (!leadStage) {
  //   return <PageLoader />;
  // }

  // if (leadStage && leadStage !== curr_page_lead_stage) {
  //   navigate(leadStageToRouteMap[leadStage]);
  // }

  const handlePreviewClick = async () => {
    setIsPreviewLoading(true);
    setPreviewError('');

    try {
      const response = await userAPI.previewSanction();
      console.log('Preview Sanction Response:', response);
      
      if (response.data && response.data.signUrl) {
        window.location.href = response.data.signUrl;
      } else {
        throw new Error('No SignUrl found in response');
      }
    } catch (error) {
      console.error('Preview Sanction Error:', error);
      setPreviewError(error.response?.data?.message || 'Failed to preview sanction letter. Please try again.');
    } finally {
      setIsPreviewLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-white">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#243112]"></div>
          <p className="mt-4 text-[#243112] text-sm">Loading your loan details...</p>
        </div>
      </div>
    );
  }

  if (!loanDetails) {
    return <PageLoader />;
  }

  

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white pl-0 pr-0 md:pl-6 md:pr-6 rounded-b-lg relative">
      <div className="bg-[#243112] mb-2 md:mb-4 rounded-b-3xl">
        <div className="relative z-10 flex flex-col min-h-[calc(100vh-100px)]">
          
          {/* Navbar */}
          <div className="flex justify-center pt-2 md:pt-4">
            <div className="w-full md:w-[700px]">
              <Navbarsteps2 />
            </div>
          </div>

          {/* Logo */}
          <div className="flex justify-center mt-2 md:mt-4">
            <img src={logo} alt="Fundo Baba Logo" className="w-24 md:w-32" />
          </div>

          {/* Main Section */}
          <div className="flex flex-1 items-center justify-center relative flex-col px-6 sm:px-8 md:px-0">
            {/* Form Box */}
            <div className="relative bg-white/62 backdrop-blur-sm rounded-3xl shadow-xl px-4 sm:px-5 md:px-6 py-4 sm:py-5 md:py-5 w-full max-w-[400px] sm:max-w-[500px] flex flex-col items-center text-[#222] mx-4 sm:mx-6 md:mx-0">
              
              {/* Title */}
              <div className="text-center mb-4 sm:mb-5 md:mb-6">
                <h2 className="text-base sm:text-lg md:text-lg font-medium mb-0.5">
                  Baba's scroll of truth is ready for your <span className="text-[#243112]">E-Sign!</span>
                </h2>
                <p className="text-xs sm:text-sm md:text-sm text-[#444]">
                  Please review and sign the loan agreement below
                </p>
              </div>

              {/* Loan Details */}
              <div className="w-full mb-3 sm:mb-4 md:mb-5">
                <h3 className="text-black text-sm sm:text-base md:text-base font-medium mb-2 sm:mb-3">Loan Details</h3>
                <div className="grid grid-cols-4 gap-x-1 sm:gap-x-2 gap-y-2 sm:gap-y-3">
                  <div className="col-span-1">
                    <span className="text-black text-[9px] sm:text-xs md:text-sm text-[#444]">Loan Amount</span>
                  </div>
                  <div className="text-right col-span-1">
                    <span className="text-black text-[9px] sm:text-xs md:text-sm font-medium">₹{Number(loanDetails.loan_amount).toLocaleString()}</span>
                  </div>
                  <div className="col-span-1 pl-1 sm:pl-2 md:pl-4">
                    <span className="text-black text-[9px] sm:text-xs md:text-sm text-[#444]">Interest Rate</span>
                  </div>
                  <div className="text-right col-span-1">
                    <span className="text-black text-[9px] sm:text-xs md:text-sm font-medium">0.9% /day</span>
                  </div>

                  <div className="col-span-1">
                    <span className="text-black text-[9px] sm:text-xs md:text-sm">Tenure</span>
                  </div>
                  <div className="text-right col-span-1">
                    <span className="text-black text-[9px] sm:text-xs md:text-sm font-medium">{loanDetails.tenure} days</span>
                  </div>
                  <div className="col-span-1 pl-1 sm:pl-2 md:pl-4">
                    <span className="text-black text-[9px] sm:text-xs md:text-sm whitespace-nowrap">Processing Fee</span>
                  </div>
                  <div className="text-right col-span-1">
                    <span className="text-black text-[9px] sm:text-xs md:text-sm font-medium">₹{Number(loanDetails.processing_fee).toLocaleString()}</span>
                  </div>

                  <div className="col-span-1">
                    <span className="text-black text-[9px] sm:text-xs md:text-sm whitespace-nowrap">Repayment</span>
                  </div>
                  <div className="text-right col-span-1">
                    <span className="text-black text-[9px] sm:text-xs md:text-sm font-medium">₹{Number(loanDetails.repayment_amount).toLocaleString()}</span>
                  </div>
                  <div className="col-span-1 pl-1 sm:pl-2 md:pl-4">
                    <span className="text-black text-[9px] sm:text-xs md:text-sm whitespace-nowrap">Disbursal</span>
                  </div>
                  <div className="text-right col-span-1">
                    <span className="text-black text-[9px] sm:text-xs md:text-sm font-medium">{new Date(loanDetails.disbursal_date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>

              {/* Important Notes */}
              <div className="bg-[#24311252] bg-opacity-30 py-1 sm:py-1.5 px-2 rounded-xl w-full mb-3 sm:mb-4">
                <h3 className="text-[10px] sm:text-xs font-medium mb-0.5">Important Notes</h3>
                <div className="text-[9px] sm:text-[11px] text-black leading-tight">
                  <p className="mb-0.5">• The loan amount will be disbursed to your bank account ending with {loanDetails.masked_bank_no}</p>
                  <p>• Late payment charges will be applicable for delayed payments</p>
                </div>
              </div>

              {/* Preview Sanction Letter Button */}
              <motion.button
                onClick={handlePreviewClick}
                disabled={isPreviewLoading}
                className="group w-full bg-gradient-to-r from-[#243112] via-[#2c3d15] to-[#243112] text-white py-2 sm:py-3 md:py-4 rounded-xl flex items-center justify-between px-2 sm:px-3 md:px-5 relative overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(36,49,18,0.4)] hover:scale-[1.02]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Shimmering Light Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: -200 }}
                  animate={{ x: 400 }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "linear"
                  }}
                />

                <div className="flex items-center justify-between w-full">
                  <div>
                    <h3 className="text-sm sm:text-base font-medium transform group-hover:translate-y-[-2px] transition-transform duration-300">
                      Preview Sanction Letter
                    </h3>
                    <p className="text-[10px] sm:text-xs text-gray-200/90 transform group-hover:translate-y-[-2px] transition-transform duration-300">
                      Click to view your sanction letter
                    </p>
                  </div>
                  <div className="bg-white/20 p-2 sm:p-3 rounded-lg w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
              </motion.button>

              {/* Loading State */}
              {isPreviewLoading && (
                <motion.div 
                  className="flex items-center justify-center text-[#243112] mt-2 sm:mt-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <motion.svg 
                    className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </motion.svg>
                  <span className="text-[10px] sm:text-xs">Loading preview...</span>
                </motion.div>
              )}

              {/* Error Message */}
              {previewError && (
                <motion.div 
                  className="text-red-500 text-[10px] sm:text-xs text-center mt-2 sm:mt-3"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  {previewError}
                </motion.div>
              )}

              {/* Baba Image */}
              <div className="absolute -top-20 -left-10 sm:-top-20 sm:-left-8 md:-top-20 md:-left-44 z-40">
                <img 
                  src="/Babaesign.png" 
                  alt="Baba" 
                  className="w-[130px] h-[100px] sm:w-[140px] sm:h-[140px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] object-contain drop-shadow-2xl" 
                />
              </div>
            </div>

            {/* Steps List */}
            <div className="mt-4">
              <StepsList />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterStep />
    </div>
  );
}
