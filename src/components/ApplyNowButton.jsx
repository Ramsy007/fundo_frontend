import { useNavigate } from "react-router-dom";

const ApplyNowButton = ({ onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate("/apply/pan-mobile");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="group relative cursor-pointer bg-white text-[#971201] py-3 md:py-4 px-6 md:px-10 rounded-[50px] text-base md:text-xl font-semibold mt-6 overflow-hidden transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-[#971201]/20 transform-gpu perspective-1000 hover:translate-z-8 hover:rotate-x-2 hover:rotate-y-2"
    >
      {/* 3D Base Layer */}
      <div className="absolute inset-0 bg-[#ffebe7] rounded-[50px] transform-gpu translate-z-[-4px] group-hover:translate-z-[-8px] transition-transform duration-500" />

      {/* Yellow Border Effect */}
      <div className="absolute inset-0 rounded-[50px] transform-gpu translate-z-[-2px] group-hover:translate-z-[-4px] transition-transform duration-500" />

      {/* Main Content Container */}
      <div className="relative z-10">
        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#971201]/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-[#971201]/10 blur-xl group-hover:blur-2xl transition-all duration-500" />

        {/* Content with 3D Effect */}
        <span className="relative z-10 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
          <span className="group-hover:translate-y-[-2px] transition-transform duration-500">
            Apply Now
          </span>
          <svg
            className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-all duration-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </span>
      </div>
    </button>
  );
};

export default ApplyNowButton; 