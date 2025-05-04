import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userAPI } from "../services/api";
// import { updateRequestedLoanAmount } from "../redux/slices/userDataSlice";
import { changeTracker } from "../redux/slices/lTracherSlice";
// import { LEAD_STAGE, leadStageToRouteMap } from "../utils/constants";
// import useLeadStage from "../hooks/useLeadStage";
// import PageLoader from "../components/Loader";
import logo from "../assets/logo.png";
import StepsList from "../components/StepsList";
import Navbarsteps2 from "../components/home/Navbarsteps2";
import FooterStep from "../components/FooterStep";

// const curr_page_lead_stage = [
//   LEAD_STAGE.BRE_APPROVED,
//   LEAD_STAGE.MANUALLY_APPROVE,
// ];

export default function LoanAmount() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { leadStage, isLoadingStage, errorStage } = useLeadStage();
  const { eligibleLoanAmount } = useSelector((state) => state.userData);
  console.log("eligibleLoanAmount loan amount", eligibleLoanAmount);
  // const eligibleLoanAmount = "56568";
  const [loanAmountRequested, setLoanAmountRequested] = useState(0);
  const [manualAmount, setManualAmount] = useState("");
  const [showAmountSelector, setShowAmountSelector] = useState(true);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [hoveredAmount, setHoveredAmount] = useState(null);
  const [isOptInsurance, setIsOptInsurance] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    dispatch(changeTracker({ step: 2 }));
  }, [dispatch]);

  const maximumLoanAmount = eligibleLoanAmount || 56568;

  useEffect(() => {
    if (maximumLoanAmount) {
      setManualAmount(maximumLoanAmount.toString());
      setLoanAmountRequested(maximumLoanAmount);
    }
  }, [maximumLoanAmount]);

  const handleRequestLoan = async () => {
    try {
      setIsLoading(true);
      await userAPI.requestLoan({
        loan_amount: loanAmountRequested,
        is_opt_insurence: isOptInsurance
      });
      // dispatch(updateRequestedLoanAmount(loanAmountRequested));
      navigate("/apply/adhar-card");
    } catch (error) {
      console.error("Error requesting loan:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAmountSelect = (amount) => {
    setLoanAmountRequested(amount);
    setManualAmount(amount.toString());
    setAnimationPhase(1);
    setTimeout(() => setAnimationPhase(2), 1000);
  };

  const handleManualAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setManualAmount(value);
    if (value) {
      const amount = parseInt(value);
      if (amount >= 5000 && amount <= maximumLoanAmount) {
        setLoanAmountRequested(amount);
        setAnimationPhase(1);
        setTimeout(() => setAnimationPhase(2), 1000);
      }
    }
  };

  const handleInsuranceChange = (e) => {
    setIsOptInsurance(e.target.checked);
  };

  const generateAmountOptions = () => {
    const options = [];
    const minAmount = 5000;
    const step = 5000;
    for (let amount = minAmount; amount <= maximumLoanAmount; amount += step) {
      options.push(amount);
    }
    return options;
  };

  const getAmountColor = (amount) => {
    const percentage = (amount - 5000) / (maximumLoanAmount - 5000);
    const hue = 270 + percentage * 60;
    return `hsl(${hue}, 70%, 50%)`;
  };

  // if (!leadStage) {
  //   return <PageLoader />;
  // }

  // if (leadStage && !curr_page_lead_stage.includes(leadStage)) {
  //   navigate(leadStageToRouteMap[leadStage]);
  // }

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white pl-0 pr-0 md:pl-6 md:pr-6 rounded-b-lg relative">
      <div className="bg-[#243112] mb-2 md:mb-4 rounded-b-3xl">
        {/* Main Content */}
        <div className="relative z-10 flex flex-col min-h-[calc(100vh-100px)]">
          {/* Navbar */}
          <div className="flex justify-center pt-2 md:pt-4">
            <div className="w-full md:w-[700px]">
              <Navbarsteps2 />
            </div>
          </div>

          {/* Fundo Baba Logo */}
          <div className="flex justify-center mt-2 md:mt-4 mb-2 md:mb-10" >
            <img src={logo} alt="Fundo Baba Logo" className="w-24 md:w-32" />
          </div>

          {/* Main Section */}
          <div className="flex flex-1 items-center justify-center relative flex-col mb-8 md:mb-10 lg:mb-10">
            {/* Form Card - Outer Container */}
            <div
              className="relative bg-gradient-to-b from-[#D9D9D9] to-[#CCCCCC] rounded-4xl shadow-xl px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-6 w-full max-w-[240px] sm:max-w-[280px] md:max-w-[400px] flex flex-col items-center mx-2 sm:mx-4 md:mx-0"
              style={{ minHeight: "200px" }}
            >
              {/* BabaStep Image */}
              <div
                className="absolute -top-10 -left-3 md:-top-10 md:-left-16 z-40"
              >
                <img
                  src="/Babastep.png"
                  alt="Baba"
                  className="w-[60px] h-[60px] sm:w-[65px] sm:h-[65px] md:w-[90px] md:h-[90px] lg:w-[120px] lg:h-[120px] object-contain drop-shadow-2xl"
                />
              </div>

              <div className="text-center mb-3 sm:mb-4">
                <h2 className="text-sm sm:text-base md:text-xl font-bold text-[#222] mb-1">
                  You are eligible for up to
                </h2>
                <p className="text-lg sm:text-xl md:text-3xl font-bold text-[#243112]">₹{maximumLoanAmount.toLocaleString()}</p>
              </div>

              {/* Inner darker section */}
              <form className="w-full bg-gradient-to-b from-[#A3A3A3] to-[#B8B8B8] rounded-4xl p-3">
                <h3 className="text-xs sm:text-sm font-semibold text-[#222] mb-2">
                  Select Your Loan Amount
                </h3>
                <div className="grid grid-cols-5 gap-1.5 sm:gap-2 mb-3">
                  {generateAmountOptions().map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => handleAmountSelect(amount)}
                      className={`group relative p-1.5 sm:p-2 rounded-full text-[10px] sm:text-xs md:text-sm font-medium transition-all duration-200 cursor-pointer 
                        ${loanAmountRequested === amount
                          ? 'bg-[#243112] text-white border-2 border-[#243112] scale-105 shadow-lg'
                          : 'bg-[#C5E5C5] text-[#222] hover:bg-[#b3d6b3] hover:scale-105 border-2 border-transparent'}
                      `}
                      style={{
                        boxShadow: loanAmountRequested === amount ? '0 2px 8px 0 #24311233' : undefined,
                        transform: hoveredAmount === amount ? 'scale(1.08)' : undefined,
                      }}
                      onMouseEnter={() => setHoveredAmount(amount)}
                      onMouseLeave={() => setHoveredAmount(null)}
                    >
                      ₹{amount / 1000}k
                    </button>
                  ))}
                </div>
                {/* Show selected amount card */}
                {loanAmountRequested > 0 && (
                  <div className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-sm border border-[#243112] mb-3 flex flex-col items-center">
                    <span className="text-xs sm:text-sm font-medium text-[#243112] mb-1">Selected Amount</span>
                    <span className="text-lg sm:text-xl font-bold text-[#243112]">₹{loanAmountRequested.toLocaleString()}</span>
                  </div>
                )}
                <div className="mb-3">
                  <input
                    type="number"
                    min="5000"
                    max={maximumLoanAmount}
                    value={manualAmount}
                    onChange={handleManualAmountChange}
                    placeholder="Enter custom amount"
                    className="w-full px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#243112] bg-white text-gray-800 text-xs sm:text-sm"
                  />
                  <p className={`text-[8px] sm:text-[10px] ${manualAmount && (parseInt(manualAmount) < 5000 || parseInt(manualAmount) > maximumLoanAmount) ? 'text-red-500' : 'text-gray-600'} mt-0.5`}>
                    Enter amount between ₹5,000 - ₹{maximumLoanAmount.toLocaleString()}
                  </p>
                  <div className="flex justify-between text-[8px] sm:text-[10px] text-gray-600 mt-0.5">
                    <span>₹5,000</span>
                    <span>₹{maximumLoanAmount.toLocaleString()}</span>
                  </div>
                </div>

                {/* Insurance Checkbox */}
                <div className="mb-3 bg-white rounded-lg p-2 border border-[#243112]">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="insurance-checkbox"
                        type="checkbox"
                        checked={isOptInsurance}
                        onChange={handleInsuranceChange}
                        className="w-4 h-4 text-[#243112] bg-gray-100 border-gray-300 rounded focus:ring-[#243112]"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="insurance-checkbox" className="font-medium text-[#243112] text-xs">
                        Opt for ICICI Lombard General Insurance
                      </label>
                      <p className="text-[8px] text-[#243112]/80 mt-1">
                        Protect your loan with comprehensive insurance coverage
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!loanAmountRequested || isLoading}
                  className="w-full bg-[#243112] text-white font-bold py-1.5 sm:py-2 rounded-full text-xs sm:text-sm shadow hover:bg-[#2f4117] transition disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={(e) => {
                    e.preventDefault();
                    handleRequestLoan();
                  }}
                >
                  {isLoading ? "PROCESSING..." : "PROCEED"}
                </button>
              </form>
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
  );
}