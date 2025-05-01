import React from "react";

export default function TermsAndConditionsModal({ showConsent, handleConsentAgree, handleConsentDecline }) {
  if (!showConsent) return null;
  return (
    <div className="absolute inset-0 backdrop-blur-sm flex items-center justify-center z-30">
      <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 max-w-[280px] sm:max-w-[320px] md:max-w-md w-full mx-2 sm:mx-4 shadow-2xl text-center">
        <h2 className="text-sm sm:text-base md:text-lg font-bold mb-2 sm:mb-3 md:mb-4 text-[#222]">Terms and Conditions</h2>
        <p className="text-[8px] sm:text-[10px] md:text-[12px] text-gray-700 mb-3 sm:mb-4 md:mb-6 leading-relaxed">
          I have read and agreed to the Terms of Use and hereby appoint Fintech Cloud Loan
          and its Lending NBFC to receive my credit information from credit bureaus, KYC from
          Government Regulated Database. By submitting my details, I override my NDNC registration
          to authorize Fintech Cloud Loan and its Lending NBFC/representatives to contact me
          through Call, SMS, Email, Whatsapp or any other mode. You may collect my address from
          various data sources for user verification and security purposes. I also authorize you
          to send me promotional offers of financial products or services from time to time.
        </p>
        <div className="flex justify-center gap-3 sm:gap-4 md:gap-6">
          <button
            className="text-[10px] sm:text-xs md:text-sm text-[#222] font-semibold"
            onClick={handleConsentDecline}
          >
            Decline
          </button>
          <button
            className="bg-[#971201] text-white text-[10px] sm:text-xs md:text-sm font-bold px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 rounded"
            onClick={handleConsentAgree}
          >
            Agree
          </button>
        </div>
      </div>
    </div>
  );
} 