import React from "react";

import MoneyTransferPromo from "../components/howItWorks/MoneyTransferPromo";
import DetailsFormPromo from "../components/howItWorks/DetailsFormPromo";
import EligibilityPromo from "../components/howItWorks/EligibilityPromo";
import LoanDetailsPromo from "../components/howItWorks/LoanDetailsPromo";
import FinancialAppPromo from "../components/howItWorks/FinancialAppPromo";
import Footer from "../components/common/Footer";
export const HowItWorks = () => {
  return (
    <>
      <div className="bg-black pl-10 pr-10 pb-10 max-[1320px]:pl-5 max-[1320px]:pr-5 max-[425px]:pl-2 max-[425px]:pr-2">
        <div className="bg-white rounded-b-[50px]">
          <FinancialAppPromo />
          <DetailsFormPromo />
          <MoneyTransferPromo />
          <EligibilityPromo />
          <LoanDetailsPromo />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
