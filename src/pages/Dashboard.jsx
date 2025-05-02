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
// import { useSelector, useDispatch } from "react-redux";
import Navbarsteps from "../components/home/Navbarsteps";
import FooterStep from "../components/FooterStep";
import { userAPI } from "../services/api";
import { useAuth } from "../context/AuthContext";
import Feedback from "../components/Feedback";
import { formatDate } from "../utils/formatDate";
// import { changeTracker } from "../redux/slices/lTracherSlice";

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
    tip: "Maintaining a good credit score through timely EMI payments can help you get instant loan approvals when needed.",
  },
  {
    tip: "Plan your EMIs around your salary date to ensure smooth repayments and avoid any late payment charges.",
  },
  {
    tip: "Refer your friends to earn rewards and build a strong relationship with us for better loan benefits.",
  },
  {
    tip: "Keep your KYC documents updated to ensure quick processing of future loan requests.",
  },
  {
    tip: "Download our mobile app to track your loan status and make instant repayments anytime, anywhere.",
  },
  {
    tip: "Repay your current loan successfully to become eligible for higher loan amounts and special offers.",
  },
];

function Dashboard() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [currentTip, setCurrentTip] = useState(0);
  const [dashboardData, setDashboardData] = useState({
    userName: "User",
    amountDisbursed: 0,
    disbursalDate: new Date().toISOString().split("T")[0],
    repaymentDate: new Date().toISOString().split("T")[0],
    repaymentAmount: 0,
    loyaltyPoints: 250,
    nextEarning: 50,
    creditScore: 734,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [showFeedback, setShowFeedback] = useState(false);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(changeTracker({ step: 6 }));
  // }, [dispatch]);

  useEffect(() => {
    // Generate random tip initially
    setCurrentTip(Math.floor(Math.random() * financialTips.length));

    // Change tip every 24 hours
    const interval = setInterval(() => {
      setCurrentTip(Math.floor(Math.random() * financialTips.length));
    }, 24 * 60 * 60 * 1000);

    const feedbackTimer = setTimeout(() => {
      setShowFeedback(true);
    }, 3000);

    // Fetch loan status data
    const fetchLoanStatus = async () => {
      try {
        setIsLoading(true);
        const response = await userAPI.getLoanStatus();
        if (response) {
          const loanData = response.data;
          setDashboardData((prevData) => ({
            ...prevData,
            userName: loanData?.full_name,
            amountDisbursed: loanData?.amount_disbursed,
            repaymentDate: loanData?.repayment_date,
            repaymentAmount: loanData?.repayment_amount,
            loyaltyPoints: loanData?.loyalty_point,
            nextEarning: loanData?.next_earning,
            creditScore: loanData?.credit_score,
          }));
        }
      } catch (error) {
        console.error("Error fetching loan status:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchLoanStatus();

    return () => {
      clearInterval(interval);
      clearInterval(feedbackTimer);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await userAPI.logout();
      logout();
      window.location.href = "/";
    } catch (error) {
      console.error("Error during logout:", error);
      logout();
      window.location.href = "/";
    }
  };

  const handleRedeem = async () => {
    try {
      const response = await userAPI.getRedeemAccessKey();
      const accessKey = response.accessKey;
      const redeemUrl = `https://blinkr.paybypoint.com/auth/sso-login?access_key=${accessKey}`;
      window.open(redeemUrl, '_blank');
    } catch (error) {
      console.error("Error during redeem:", error);
    }
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
                      onClick={() => window.open("https://billzy.in/home", "_blank")}
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
                <button 
                  className="bg-[#404064] text-white px-4 py-2 rounded-lg mt-4 font-medium hover:bg-[#353556] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={handleRedeem}
                  disabled={!dashboardData.loyaltyPoints}
                >
                  Instant Gifts & Rewards
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
                <p className="text-sm text-gray-600 mt-1">
                  Per successful referral
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <FooterStep />

      <AnimatePresence>
        {showFeedback && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => setShowFeedback(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-4xl px-4"
            >
              <Feedback onClose={() => setShowFeedback(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Dashboard; 