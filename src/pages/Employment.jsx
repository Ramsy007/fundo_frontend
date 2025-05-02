import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userAPI } from "../services/api";
import logo from "../assets/logo.png";
import StepsList from "../components/StepsList";
import Navbarsteps from "../components/home/Navbarsteps";
import { motion } from "framer-motion";

export default function EmploymentStatus() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [workStatus, setWorkStatus] = useState("");
  const [formData, setFormData] = useState({
    companyName: "",
    salaryDate: "",
    monthlySalary: ""
  });
  const [errors, setErrors] = useState({
    workStatus: "",
    companyName: "",
    salaryDate: "",
    monthlySalary: ""
  });

  // Handle work status change
  const handleWorkStatusChange = (e) => {
    const value = e.target.value;
    setWorkStatus(value);
    
    // Clear error when user selects an option
    setErrors(prev => ({
      ...prev,
      workStatus: ""
    }));
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    setErrors(prev => ({
      ...prev,
      [name]: ""
    }));
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!workStatus) {
      newErrors.workStatus = "Please select your work status";
    }
    
    if (workStatus === "salaried") {
      if (!formData.companyName) {
        newErrors.companyName = "Company name is required";
      }
      
      if (!formData.salaryDate) {
        newErrors.salaryDate = "Salary date is required";
      }
      
      if (!formData.monthlySalary) {
        newErrors.monthlySalary = "Monthly salary is required";
      } else if (isNaN(formData.monthlySalary) || parseInt(formData.monthlySalary) <= 0) {
        newErrors.monthlySalary = "Please enter a valid salary amount";
      }
    }
    
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Add this to prevent default form submission
    console.log("handleSubmit called");
    
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setIsLoading(true);
      setError("");
      
      try {
        console.log("WorkStatus", workStatus);
        const data = {
          employee_type: workStatus.toUpperCase(),
          company_name: formData.companyName,
          salary_date: formData.salaryDate,
          monthly_salary: formData.monthlySalary
        };
        console.log("data----", data);

        const response = await userAPI.addEmployment(data);
        console.log("response from empl--->", response);
        
        if(response){
          navigate("/apply/email");
        }
      } catch (error) {
        console.error("Error submitting employment status:", error);
        setError("Failed to submit employment status. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white pl-0 pr-0 md:pl-6 md:pr-6 rounded-b-lg relative">
      <div className="bg-[#971201] mb-2 md:mb-4 rounded-b-3xl">
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
            {/* Form Card */}
            <div
              className="relative bg-[#e9b6b6] rounded-2xl shadow-xl px-3 py-2 sm:px-4 sm:py-3 md:px-8 md:py-5 w-full max-w-[280px] sm:max-w-[320px] md:max-w-lg flex flex-col items-center mx-2 sm:mx-4 md:mx-0"
              style={{ minHeight: "240px" }}
            >
              {/* BabaStep Image */}
              <div
                className="absolute -top-13 -left-4 md:-top-12 md:-left-20 z-40"
              >
                <img 
                  src="/Babaemp.png" 
                  alt="Baba" 
                  className="w-[75px] h-[75px] sm:w-[70px] sm:h-[70px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] object-contain drop-shadow-2xl" 
                />
              </div>

              <div className="text-center mb-2 sm:mb-3 md:mb-4">
                <h2 className="text-sm sm:text-base md:text-xl font-bold text-[#222] mb-1">
                  Where does your income magic come from?
                </h2>
                <p className="text-[8px] sm:text-[10px] text-gray-600">
                  Please select your work style so Baba can get your loan blessings ready
                </p>
              </div>

              <form className="w-full flex flex-col gap-1.5 sm:gap-2 md:gap-2.5" onSubmit={handleSubmit}>
                <div>
                  <label className="text-[#222] text-xs sm:text-sm font-semibold mb-1 block">
                    Select your status
                  </label>
                  <select
                    className="w-full px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#971201] bg-[#e9b6b6] text-gray-800 text-xs sm:text-base font-medium"
                    value={workStatus}
                    onChange={handleWorkStatusChange}
                  >
                    <option value="">Select</option>
                    <option value="salaried">Salaried</option>
                    <option value="self-employed">Self-Employed</option>
                  </select>
                  {errors.workStatus && (
                    <p className="text-red-500 text-[8px] sm:text-xs mt-1">{errors.workStatus}</p>
                  )}
                </div>

                {/* Conditional Fields if Salaried */}
                {workStatus === "salaried" && (
                  <div className="flex flex-col gap-1.5 sm:gap-2 w-full">
                    <div>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="Company Name"
                        className="w-full px-3 py-1 sm:px-4 sm:py-1.5 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#971201] bg-[#e9b6b6] text-gray-800 placeholder:text-[#b48b8b] text-xs sm:text-base font-medium"
                      />
                      {errors.companyName && (
                        <p className="text-red-500 text-[8px] sm:text-xs mt-1">{errors.companyName}</p>
                      )}
                    </div>

                    <div>
                      <input
                        type="date"
                        name="salaryDate"
                        value={formData.salaryDate}
                        onChange={handleInputChange}
                        className="w-full px-3 py-1 sm:px-4 sm:py-1.5 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#971201] bg-[#e9b6b6] text-gray-800 text-xs sm:text-base font-medium"
                      />
                      {errors.salaryDate && (
                        <p className="text-red-500 text-[8px] sm:text-xs mt-1">{errors.salaryDate}</p>
                      )}
                    </div>

                    <div>
                      <input
                        type="number"
                        name="monthlySalary"
                        value={formData.monthlySalary}
                        onChange={handleInputChange}
                        placeholder="Monthly Salary"
                        className="w-full px-3 py-1 sm:px-4 sm:py-1.5 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#971201] bg-[#e9b6b6] text-gray-800 placeholder:text-[#b48b8b] text-xs sm:text-base font-medium"
                      />
                      {errors.monthlySalary && (
                        <p className="text-red-500 text-[8px] sm:text-xs mt-1">{errors.monthlySalary}</p>
                      )}
                    </div>
                  </div>
                )}
                
                <button
                  type="submit"
                  className="mt-1 w-[120px] sm:w-[140px] md:w-[160px] mx-auto flex items-center justify-center gap-2 bg-[#971201] text-white font-bold py-1.5 sm:py-2 rounded-full text-sm sm:text-base md:text-lg shadow hover:bg-[#b13a2f] transition"
                >
                  {isLoading ? "Submitting..." : "SUBMIT"}
                  <span className="bg-white text-[#971201] rounded-full p-0.5 sm:p-1 ml-1">
                    <svg width="14" height="14" className="sm:w-[18px] sm:h-[18px]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6 4l8 6-8 6V4z" />
                    </svg>
                  </span>
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
      <footer className="bg-black text-white py-4 md:py-8 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between rounded-t-3xl">
        <div className="text-xs opacity-70">
          Terms & Condition &nbsp; | &nbsp; Privacy Policy
        </div>
        <div className="font-bold text-sm md:text-base mt-2 md:mt-0">Contacts</div>
      </footer>
    </div>
  );
}
