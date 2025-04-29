import React from "react";

import MoneyTransferPromo from "../components/howItWorks/MoneyTransferPromo";
import DetailsFormPromo from "../components/howItWorks/DetailsFormPromo";
import EligibilityPromo from "../components/howItWorks/EligibilityPromo";
import LoanDetailsPromo from "../components/howItWorks/LoanDetailsPromo";
import FinancialAppPromo from "../components/howItWorks/FinancialAppPromo";

export const HowItWorks = () => {
  return (
    <>
      <FinancialAppPromo />
      <DetailsFormPromo />
      <MoneyTransferPromo />
      <EligibilityPromo />
      <LoanDetailsPromo />
    </>
  );
};

export default HowItWorks;
