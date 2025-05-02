import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

    // const referenceData = await api.addReference(references);

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setIsLoading(true);
      // Add your API call here if needed
      navigate('/dashboard');
    }
  };

  return (
    <>
      <div className="flex flex-col items-center px-6 pt-15 pb-20 md:px-16">
        <div className="bg-white rounded-3xl p-6 sm:p-8 w-[315px] sm:w-[420px] shadow-lg">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Refer & Earn Gifts and Vouchers!</h2>
          <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6"></p>

          {/* Reference 1 */}
          <div className="mb-4 sm:mb-6">
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
          <div className="mb-4 sm:mb-6">
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
            className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm sm:text-base font-semibold py-2 sm:py-3 rounded-xl transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'SUBMIT'}
          </button>
        </div>
      </div>
    </>
  );
}

export default References; 