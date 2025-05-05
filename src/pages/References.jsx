import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userAPI } from '../services/api';
import logo from '../assets/logo.png';
import StepsList from '../components/StepsList';
import Navbarsteps from '../components/home/Navbarsteps';
import FooterStep from '../components/FooterStep';

function References() {
  const navigate = useNavigate();
  const [references, setReferences] = useState({
    reference1: {
      name: '',
      number: ''
    },
    reference2: {
      name: '',
      number: ''
    }
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState('');

  const validateMobile = (mobile) => {
    return /^[6-9]\d{9}$/.test(mobile);
  };

  const handleChange = (ref, field, value) => {
    if (field === 'number' && !/^\d{0,10}$/.test(value)) {
      return;
    }
    
    setReferences(prev => ({
      ...prev,
      [ref]: {
        ...prev[ref],
        [field]: value
      }
    }));
    setErrors(prev => ({ ...prev, [ref]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Validate Reference 1
    if (!references.reference1.name.trim()) {
      newErrors.reference1 = 'Please enter Reference 1 name';
    } else if (!references.reference1.number) {
      newErrors.reference1 = 'Please enter Reference 1 mobile number';
    } else if (!validateMobile(references.reference1.number)) {
      newErrors.reference1 = 'Please enter a valid 10-digit mobile number';
    }

    // Validate Reference 2
    if (!references.reference2.name.trim()) {
      newErrors.reference2 = 'Please enter Reference 2 name';
    } else if (!references.reference2.number) {
      newErrors.reference2 = 'Please enter Reference 2 mobile number';
    } else if (!validateMobile(references.reference2.number)) {
      newErrors.reference2 = 'Please enter a valid 10-digit mobile number';
    }

    // Check if both numbers are same
    if (references.reference1.number === references.reference2.number) {
      newErrors.reference2 = 'Reference 2 cannot be same as Reference 1';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      setIsLoading(true);
      setApiError(''); // Clear any previous API errors
      try {
        const requestData = {
          ref_no_1: references.reference1.number,
          ref_no_2: references.reference2.number,
          ref_name_1: references.reference1.name,
          ref_name_2: references.reference2.name
        };
        
        const referenceData = await userAPI.addReference(requestData);
        console.log("referenceData", referenceData);

        if(referenceData.status === 200){
          navigate('/dashboard');
        }
      } catch (error) {
        console.error("Error submitting references:", error);
        if (error.response?.data?.message) {
          setApiError(error.response.data.message);
        } else {
          setApiError('An error occurred while submitting references');
        }
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white pl-0 pr-0 md:pl-6 md:pr-6 rounded-b-lg relative">
      <div className="bg-[#971201] mb-2 md:mb-4 rounded-b-3xl">
        {/* Main Content */}
        <div className="relative z-10 flex flex-col min-h-[calc(100vh-100px)] mb-10 ">
          {/* Navbar */}
          <div className="flex justify-center pt-2 md:pt-4">
            <div className="w-full md:w-[700px]">
              <Navbarsteps />
            </div>
          </div>
          {/* Fundo Baba Logo */}
          <div className="flex justify-center mt-2 md:mt-6 mb-4 md:mb-10">
            <img src={logo} alt="Fundo Baba Logo" className="w-24 md:w-32" />
          </div>
          {/* Main Section */}
          <div className="flex flex-1 items-center justify-center relative flex-col">
            {/* Form Card */}
            <div className="relative bg-[#e9b6b6] rounded-2xl shadow-xl px-4 py-4 sm:px-6 sm:py-6 md:px-10 md:py-8 w-full max-w-[280px] sm:max-w-[320px] md:max-w-lg flex flex-col items-center mx-2 sm:mx-4 md:mx-0">
              {/* BabaStep Image */}
              <div className="absolute -top-13 -left-4 md:-top-12 md:-left-20 z-40">
                <img
                  src="/Babastep.png"
                  alt="Baba"
                  className="w-[75px] h-[75px] sm:w-[70px] sm:h-[70px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] object-contain drop-shadow-2xl"
                />
              </div>
              <div className="text-center mb-2 sm:mb-3 md:mb-4">
                <h2 className="text-sm sm:text-base md:text-xl font-bold text-[#222] mb-1">
                  Refer & Earn Gifts and Vouchers!
                </h2>
                <p className="text-[8px] sm:text-[10px] text-gray-600">Please enter your references below</p>
              </div>

              {/* Reference 1 */}
              <div className="mb-4 sm:mb-6 w-full">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">1</span>
                  </div>
                  <label className="text-sm sm:text-base font-medium text-gray-700">
                    Reference 1
                  </label>
                </div>
                <div className="space-y-2">
                  <input
                    type="text"
                    value={references.reference1.name}
                    onChange={(e) => handleChange('reference1', 'name', e.target.value)}
                    placeholder="Enter Full Name"
                    className={`w-full h-10 sm:h-12 border-2 ${errors.reference1 ? 'border-red-500' : 'border-gray-300'} rounded-xl px-3 sm:px-4 text-base sm:text-lg focus:border-purple-500 focus:outline-none transition-colors`}
                  />
                  <input
                    type="text"
                    value={references.reference1.number}
                    onChange={(e) => handleChange('reference1', 'number', e.target.value)}
                    placeholder="Enter 10-digit mobile number"
                    className={`w-full h-10 sm:h-12 border-2 ${errors.reference1 ? 'border-red-500' : 'border-gray-300'} rounded-xl px-3 sm:px-4 text-base sm:text-lg focus:border-purple-500 focus:outline-none transition-colors`}
                  />
                </div>
                {errors.reference1 && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.reference1}</p>
                )}
              </div>

              {/* Reference 2 */}
              <div className="mb-4 sm:mb-6 w-full">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">2</span>
                  </div>
                  <label className="text-sm sm:text-base font-medium text-gray-700">
                    Reference 2
                  </label>
                </div>
                <div className="space-y-2">
                  <input
                    type="text"
                    value={references.reference2.name}
                    onChange={(e) => handleChange('reference2', 'name', e.target.value)}
                    placeholder="Enter Full Name"
                    className={`w-full h-10 sm:h-12 border-2 ${errors.reference2 ? 'border-red-500' : 'border-gray-300'} rounded-xl px-3 sm:px-4 text-base sm:text-lg focus:border-purple-500 focus:outline-none transition-colors`}
                  />
                  <input
                    type="text"
                    value={references.reference2.number}
                    onChange={(e) => handleChange('reference2', 'number', e.target.value)}
                    placeholder="Enter 10-digit mobile number"
                    className={`w-full h-10 sm:h-12 border-2 ${errors.reference2 ? 'border-red-500' : 'border-gray-300'} rounded-xl px-3 sm:px-4 text-base sm:text-lg focus:border-purple-500 focus:outline-none transition-colors`}
                  />
                </div>
                {errors.reference2 && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.reference2}</p>
                )}
              </div>

              <button 
                className="w-full bg-[#971201] hover:bg-[#b13a2f] text-white text-sm sm:text-base font-semibold py-2 sm:py-3 rounded-xl transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleSubmit}
                disabled={isLoading}
              >
                {isLoading ? 'Processing...' : 'SUBMIT'}
              </button>
              {apiError && (
                <p className="text-red-500 text-sm mt-2 text-center">{apiError}</p>
              )}
            </div>
            {/* Steps List - Mobile */}
            {/* <div className="md:hidden w-full mt-2">
              <div className="flex justify-center">
                <StepsList />
              </div>
            </div> */}
            {/* Steps List - Desktop */}
            {/* <div className="hidden md:block">
              <div className="w-auto">
                <StepsList />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* Footer */}
      <FooterStep />
    </div>
  );
}

export default References; 