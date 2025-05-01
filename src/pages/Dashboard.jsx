import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaWallet,
  FaCalendarAlt,
  FaHistory,
  FaStar,
  FaGift,
  FaArrowRight,
  FaMoneyBillWave,
  FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbarsteps from "../components/home/Navbarsteps";
import FooterStep from "../components/FooterStep";

const financialTips = [
  {
    tip: "Early repayment of your loan can help improve your credit score and unlock higher loan amounts in the future!",
  },
  {
    tip: "Set a reminder 2 days before your EMI due date to ensure timely payments and maintain a good repayment record.",
  },
  {
    tip: "Regular and timely loan repayments can help you become eligible for lower interest rates on your next loan.",
  },
  {
    tip: "Download our app and track your money like a boss or a baba.",
  },
];

function Dashboard() {
  const navigate = useNavigate();
  const [currentTip, setCurrentTip] = useState(0);
  const [dashboardData] = useState({
    userName: "GIRDHAR MISHRA",
    amountDisbursed: 28000,
    disbursalDate: "2024-03-20",
    repaymentDate: "2024-04-20",
    repaymentAmount: 29500,
    loyaltyPoints: 250,
    nextEarning: 50,
    creditScore: 734,
  });

  useEffect(() => {
    // Generate random tip initially
    setCurrentTip(Math.floor(Math.random() * financialTips.length));

    // Change tip every 24 hours
    const interval = setInterval(() => {
      setCurrentTip(Math.floor(Math.random() * financialTips.length));
    }, 24 * 60 * 60 * 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleLogout = () => {
    navigate("/");
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white pl-0 pr-0 md:pl-6 md:pr-6 rounded-b-lg relative">
      <div className="bg-[#404064] mb-2 md:mb-4 rounded-b-3xl">
        {/* Main Content */}
        <div className="relative z-10 flex flex-col min-h-[calc(100vh-100px)]">
          {/* Navbar */}
          <div className="flex justify-center pt-2 md:pt-4">
            <div className="w-full md:w-[700px]">
              <Navbarsteps />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto px-4"
          >
            {/* Welcome Section */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/62 backdrop-blur-sm rounded-2xl p-6 sm:p-8 mb-6 shadow-lg relative overflow-hidden mt-6"
            >
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center justify-between mb-6">
                  <div>
                    <h1 className="text-sm sm:text-2xl md:text-3xl font-bold text-[#404064] mb-1 sm:mb-2">
                      Welcome back, {dashboardData.userName}!
                    </h1>
                    <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-0">
                      looking decent, but baba always blesses a boost!
                    </p>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 10px 30px rgba(64, 64, 100, 0.2)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#404064] text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2"
                    >
                      <FaWallet className="w-4 h-4" />
                      Repay Now
                    </motion.button>

                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 10px 30px rgba(64, 64, 100, 0.2)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleLogout}
                      className="bg-[#404064] text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2"
                    >
                      <FaSignOutAlt className="w-4 h-4" />
                      Logout
                    </motion.button>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#404064]/17 rounded-xl p-4">
                    <p className="text-sm text-[#404064] font-medium">Credit Score</p>
                    <motion.p
                      className="text-xl font-bold text-[#404064]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.5 }}
                    >
                      {dashboardData.creditScore}
                    </motion.p>
                    <div className="w-full bg-white/20 rounded-full h-1.5 mt-2">
                      <motion.div
                        className="bg-[#404064] h-1.5 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{
                          width: `${(dashboardData.creditScore / 900) * 100}%`,
                        }}
                        transition={{
                          duration: 1.5,
                          ease: "easeOut",
                          delay: 0.2,
                        }}
                      />
                    </div>
                    <div className="flex justify-between mt-1 text-xs text-[#404064]">
                      <span>300</span>
                      <span>900</span>
                    </div>
                  </div>

                  {/* Financial Tip */}
                  <div className="bg-[#404064]/17 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-white/20 p-2 rounded-lg">
                        <svg
                          className="w-5 h-5 text-[#404064]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#404064]">
                          Financial Tip of the Day
                        </p>
                        <p className="text-sm text-[#404064] mt-1">
                          {financialTips[currentTip].tip}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Main Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {/* Amount Disbursed Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="p-6 bg-white/62 backdrop-blur-sm rounded-2xl shadow-lg flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[#404064] text-sm font-medium">Amount Disbursed</h3>
                  <div className="bg-[#404064]/20 p-2 rounded-full">
                    <FaWallet className="w-5 h-5 text-[#404064]" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-[#404064]">
                  ₹{dashboardData.amountDisbursed.toLocaleString()}
                </p>
              </motion.div>

              {/* Disbursal Date Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="p-6 bg-white/62 backdrop-blur-sm rounded-2xl shadow-lg flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[#404064] text-sm font-medium">Disbursal Date</h3>
                  <div className="bg-[#404064]/20 p-2 rounded-full">
                    <FaCalendarAlt className="w-5 h-5 text-[#404064]" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-[#404064]">
                  {formatDate(dashboardData.disbursalDate)}
                </p>
              </motion.div>

              {/* Repayment Date Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="p-6 bg-white/62 backdrop-blur-sm rounded-2xl shadow-lg flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[#404064] text-sm font-medium">Repayment Date</h3>
                  <div className="bg-[#404064]/20 p-2 rounded-full">
                    <FaCalendarAlt className="w-5 h-5 text-[#404064]" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-[#404064]">
                  {formatDate(dashboardData.repaymentDate)}
                </p>
              </motion.div>

              {/* Repayment Amount Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="p-6 bg-white/62 backdrop-blur-sm rounded-2xl shadow-lg flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[#404064] text-sm font-medium">Repayment Amount</h3>
                  <div className="bg-[#404064]/20 p-2 rounded-full">
                    <FaMoneyBillWave className="w-5 h-5 text-[#404064]" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-[#404064]">
                  ₹{dashboardData.repaymentAmount.toLocaleString()}
                </p>
              </motion.div>

              {/* Loyalty Points Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="p-6 bg-white/62 backdrop-blur-sm rounded-2xl shadow-lg flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[#404064] text-sm font-medium">Loyalty Points</h3>
                  <div className="bg-[#404064]/20 p-2 rounded-full">
                    <FaStar className="w-5 h-5 text-[#404064]" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-[#404064]">
                  {dashboardData.loyaltyPoints}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Next earning: {dashboardData.nextEarning} points
                </p>
                <button className="bg-[#404064] text-white px-4 py-2 rounded-lg mt-4 font-medium hover:bg-[#353556] transition-colors">
                  Redeem
                </button>
              </motion.div>

              {/* Refer & Earn Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="p-6 bg-white/62 backdrop-blur-sm rounded-2xl shadow-lg flex flex-col cursor-pointer hover:bg-white/70 transition-colors"
                onClick={() => navigate("/apply/references")}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[#404064] text-sm font-medium">Refer & Earn</h3>
                  <div className="bg-[#404064]/20 p-2 rounded-full">
                    <FaGift className="w-5 h-5 text-[#404064]" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-[#404064]">₹500</p>
                  <FaArrowRight className="w-5 h-5 text-[#404064]" />
                </div>
                <p className="text-sm text-gray-600 mt-1">Per successful referral</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <FooterStep />
    </div>
  );
}

export default Dashboard; 