import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png";
import StepsList from "../components/StepsList";
import Navbarsteps2 from "../components/home/Navbarsteps2";
import FooterStep from "../components/FooterStep";
import { motion } from "framer-motion";
import { userAPI } from '../services/api';
import { FaRupeeSign } from 'react-icons/fa';
// import { useDispatch } from 'react-redux';
// import { changeTracker } from '../redux/slices/lTracherSlice';

export default function Disbursal() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [disbursalAmount, setDisbursalAmount] = useState(null);
//   const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(changeTracker({ step: 5 }));
    // }, [dispatch]);

  useEffect(() => {
    const checkRedirectUrl = async () => {
      try {
        const response = await userAPI.getRedirectUrl();
        if (response.status === 200) {
          setIsLoading(false);
        }
      } catch (err) {
        setError('Failed to process your request. Please try again.');
        setIsLoading(false);
      }
    };

    checkRedirectUrl();
  }, []);

  const handleProceed = async () => {
    try {
      // const response = await userAPI.disbursed();
      navigate('/apply/congratulations-card');
    } catch (error) {
      setError('Failed to process disbursal. Please try again.');
    }
  };

  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 0,
    }).format(amount);
  };

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
            {/* Loading Box */}
            <div className="relative bg-white/62 backdrop-blur-sm rounded-3xl shadow-xl px-4 sm:px-5 md:px-6 py-8 sm:py-10 md:py-12 w-full max-w-[400px] sm:max-w-[500px] flex flex-col items-center text-[#222] mx-4 sm:mx-6 md:mx-0">
              {/* Baba Image */}
              <div className="absolute -top-24 -left-10 sm:-top-24 sm:-left-8 md:-top-24 md:-left-44 z-40">
                <img 
                  src="/Babadisbursal.png" 
                  alt="Baba" 
                  className="w-[150px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px] object-contain drop-shadow-2xl" 
                />
              </div>

              {isLoading ? (
                <>
                  {/* Loading Animation */}
                  <motion.div 
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-6 sm:mb-8"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-full h-full border-4 border-[#243112]/20 border-t-[#243112] rounded-full"></div>
                  </motion.div>

                  {/* Loading Text */}
                  <div className="text-center">
                    <h2 className="text-base sm:text-lg md:text-xl font-medium mb-2 sm:mb-3 text-[#243112]">
                      Baba is reading your financial fate...
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Sit tight while your destiny is loading!
                    </p>
                  </div>
                </>
              ) : error ? (
                <div className="text-center">
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-red-100 flex items-center justify-center">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Something Went Wrong</h2>
                  <p className="text-gray-600 text-sm mb-4">{error}</p>
                  <button
                    onClick={() => window.location.reload()}
                    className="w-full bg-[#243112] hover:bg-[#2c3d15] text-white text-sm sm:text-base font-semibold py-2.5 rounded-lg transition-colors cursor-pointer"
                  >
                    Try Again
                  </button>
                </div>
              ) : (
                <>
                  <motion.div
                    className="bg-[#24311210] rounded-xl p-6 mb-6 w-full"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex flex-col items-center">
                      <motion.div
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#24311220] flex items-center justify-center mb-4 shadow-lg"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <FaRupeeSign className="w-10 h-10 sm:w-12 sm:h-12 text-[#243112]" />
                      </motion.div>
                      <motion.h2
                        className="text-2xl sm:text-3xl font-bold text-[#243112] mb-2"
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        ₹{disbursalAmount ? formatAmount(disbursalAmount) : '---'}
                      </motion.h2>
                      <motion.p
                        className="text-[#243112] text-sm font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        Your Loan Amount
                      </motion.p>
                    </div>
                  </motion.div>
                  <motion.button
                    onClick={handleProceed}
                    className="w-full bg-[#243112] hover:bg-[#2c3d15] text-white text-sm sm:text-base font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Proceed Disbursal
                  </motion.button>
                </>
              )}
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