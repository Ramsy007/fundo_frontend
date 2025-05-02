import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const ExcitedFaceIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-7 sm:h-7 text-yellow-500 filter drop-shadow">
    <circle cx="12" cy="12" r="10" fill="currentColor"/>
    <circle cx="8.5" cy="9" r="2" fill="black"/>
    <circle cx="15.5" cy="9" r="2" fill="black"/>
    <path d="M7 14.5C7 14.5 9 17 12 17C15 17 17 14.5 17 14.5" stroke="black" strokeWidth="2" fill="none"/>
  </svg>
);

const HappyFaceIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-7 sm:h-7 text-yellow-500 filter drop-shadow">
    <circle cx="12" cy="12" r="10" fill="currentColor"/>
    <circle cx="9" cy="9" r="1.5" fill="black"/>
    <circle cx="15" cy="9" r="1.5" fill="black"/>
    <path d="M7 13.5C7 13.5 9 15.5 12 15.5C15 15.5 17 13.5 17 13.5" stroke="black" strokeWidth="2" fill="none"/>
  </svg>
);

const NeutralFaceIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-7 sm:h-7 text-yellow-500 filter drop-shadow">
    <circle cx="12" cy="12" r="10" fill="currentColor"/>
    <circle cx="9" cy="9" r="1.5" fill="black"/>
    <circle cx="15" cy="9" r="1.5" fill="black"/>
    <line x1="8" y1="14" x2="16" y2="14" stroke="black" strokeWidth="2"/>
  </svg>
);

const SadFaceIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-7 sm:h-7 text-yellow-500 filter drop-shadow">
    <circle cx="12" cy="12" r="10" fill="currentColor"/>
    <circle cx="9" cy="9" r="1.5" fill="black"/>
    <circle cx="15" cy="9" r="1.5" fill="black"/>
    <path d="M7 16C7 16 9 14 12 14C15 14 17 16 17 16" stroke="black" strokeWidth="2" fill="none"/>
  </svg>
);

const Feedback = ({ onClose }) => {
  const [ratings, setRatings] = useState({});
  const [textFeedback, setTextFeedback] = useState('');
  const [category, setCategory] = useState('');
  const [personalInfo, setPersonalInfo] = useState({
    policyNo: '',
    name: '',
    email: '',
    contactNo: '',
    consent: false
  });
  const maxCharacters = 999;

  const categories = [
    "User Interface",
    "Loan Journey",
    "Loan Processing Time",
    "Support",
    "Other"
  ];

  const questions = [
    "I liked the overall User Interface of the website",
    "I Could easily Navigate the complete Loan Journey",
    "It was easy to apply and get Loan instantly on BlinkrLoan.com",
    "I Liked the customer centric approach like Loyaltypoints and Insurance on Loan",
    "I would like to recommend BlinkrLoan to my friends and family",
  ];

  const ratingOptions = [
    { label: "Strongly agree", icon: <ExcitedFaceIcon /> },
    { label: "Agree", icon: <HappyFaceIcon /> },
    { label: "Neither Agree nor Disagree", icon: <NeutralFaceIcon /> },
    { label: "Disagree", icon: <SadFaceIcon /> }
  ];

  const handleRatingChange = (question, rating) => {
    setRatings(prev => ({
      ...prev,
      [question]: rating
    }));
  };

  const handleTextFeedbackChange = (e) => {
    const text = e.target.value;
    if (text.length <= maxCharacters) {
      setTextFeedback(text);
    }
  };

  const handlePersonalInfoChange = (field, value) => {
    setPersonalInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 font-sans relative">
      <button
        onClick={onClose}
        className="absolute top-1 right-1 p-1.5 rounded-full hover:bg-gray-100 transition-colors duration-200 z-10"
      >
        <FaTimes className="w-4 h-4 sm:w-5 sm:h-5 text-[#404064]" />
      </button>
      
      <div className="bg-[#404064] py-2 sm:py-3 px-3 sm:px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:10px_10px]"></div>
        <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-[#404064] rounded-full mix-blend-multiply filter blur-xl opacity-30 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-0 left-0 w-20 h-20 sm:w-24 sm:h-24 bg-[#404064] rounded-full mix-blend-multiply filter blur-xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
        <h2 className="text-lg sm:text-xl font-bold text-white text-center relative tracking-tight">
          We Value Your Feedback
        </h2>
      </div>

      <div className="p-2 sm:p-3 space-y-1.5 sm:space-y-2 bg-gradient-to-b from-gray-50/80 to-white backdrop-blur-sm">
        {/* Rating Section */}
        <div className="w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md transform hover:-translate-y-1">
          <div className="grid grid-cols-6 divide-x divide-gray-200">
            <div className="col-span-2 text-left font-bold text-[#404064] text-[10px] sm:text-xl p-1.5 sm:p-2 bg-gradient-to-r from-gray-50 to-white border-b border-gray-200">
              Features
            </div>
            {ratingOptions.map((option, index) => (
              <div key={index} className="col-span-1 flex flex-col items-center justify-between p-0.5 sm:p-1 bg-gradient-to-r from-gray-50 to-white border-b border-gray-200">
                <div className="transition-all duration-300 hover:scale-110 transform hover:-rotate-6 hover:drop-shadow-xl">
                  {option.icon}
                </div>
                <span className="text-[8px] sm:text-[10px] font-medium text-[#404064] text-center mt-0.5">
                  {option.label}
                </span>
              </div>
            ))}
          </div>

          {questions.map((question, qIndex) => (
            <div 
              key={qIndex} 
              className="grid grid-cols-6 divide-x divide-gray-200 border-t border-gray-200 hover:bg-gray-50/50 transition-all duration-300"
            >
              <div className="col-span-2 text-left text-[#404064] p-1.5 sm:p-2 flex items-center min-h-[32px] sm:min-h-[40px] text-[10px] sm:text-xs font-medium leading-relaxed">
                {question}
              </div>
              {ratingOptions.map((_, rIndex) => (
                <div key={rIndex} className="col-span-1 flex justify-center items-center p-0.5 sm:p-1">
                  <input
                    type="radio"
                    name={`question-${qIndex}`}
                    checked={ratings[question] === rIndex}
                    onChange={() => handleRatingChange(question, rIndex)}
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#404064] border-gray-300 focus:ring-2 focus:ring-[#404064] focus:ring-offset-2 cursor-pointer transition-all duration-200 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Text Feedback Section */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md transform hover:-translate-y-1">
          <div className="bg-[#404064] p-1.5 sm:p-2 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:10px_10px]"></div>
            <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-[#404064] rounded-full mix-blend-multiply filter blur-xl opacity-30 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-0 left-0 w-16 h-16 sm:w-20 sm:h-20 bg-[#404064] rounded-full mix-blend-multiply filter blur-xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
            <h3 className="text-sm sm:text-base font-bold text-white relative tracking-tight">Share Your Thoughts</h3>
          </div>
          
          <div className="p-1.5 sm:p-2 space-y-1.5 sm:space-y-2">
            <div>
              <label htmlFor="category" className="block text-[8px] sm:text-[10px] font-semibold text-[#404064] mb-0.5">
                Category:
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full md:w-36 sm:md:w-40 px-1.5 sm:px-2 py-0.5 sm:py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#404064] focus:border-[#404064] transition-all duration-200 bg-white hover:bg-gray-50 cursor-pointer text-[10px] sm:text-xs font-medium"
              >
                {categories.map((cat, index) => (
                  <option key={index} value={cat} className="font-medium">
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <textarea
                value={textFeedback}
                onChange={handleTextFeedbackChange}
                rows={2}
                className="w-full px-1.5 sm:px-2 py-0.5 sm:py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#404064] focus:border-[#404064] transition-all duration-200 resize-none hover:bg-gray-50 text-[10px] sm:text-xs font-normal text-[#404064]"
                placeholder="Write your feedback here..."
              />
              <div className="flex justify-between items-center mt-0.5">
                <span className="text-[8px] sm:text-[10px] text-[#404064] italic font-medium">Be honest with your feedback</span>
                <span className="text-[8px] sm:text-[10px] text-[#404064] bg-gradient-to-r from-gray-100 to-white px-1.5 sm:px-2 py-0.5 rounded-full shadow-sm font-medium">
                  {maxCharacters - textFeedback.length} characters remaining
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-1.5 sm:gap-2 pt-1.5 sm:pt-2">
          <button
            onClick={onClose}
            className="group px-2 sm:px-3 py-0.5 sm:py-1 text-[#404064] bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#404064] focus:ring-offset-2 transition-all duration-200 text-[10px] sm:text-xs font-medium hover:shadow-sm"
          >
            <span className="inline-flex items-center transition-transform duration-200 group-hover:-translate-x-1">
              Skip
            </span>
          </button>
          <button
            onClick={() => {
              console.log('Submit', { personalInfo, ratings, category, textFeedback });
              onClose();
            }}
            className="group px-2 sm:px-3 py-0.5 sm:py-1 text-white bg-[#404064] rounded-lg hover:bg-[#2d2d4d] focus:outline-none focus:ring-2 focus:ring-[#404064] focus:ring-offset-2 transition-all duration-200 text-[10px] sm:text-xs font-medium shadow-sm hover:shadow-md"
          >
            <span className="inline-flex items-center transition-transform duration-200 group-hover:translate-x-1">
              Submit Feedback
              <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 ml-0.5 sm:ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback; 