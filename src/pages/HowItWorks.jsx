import React from 'react'
import FinancialAppPromo from './FinancialAppPromo'
import MoneyTransferPromo from './MoneyTransferPromo'
import DetailsFormPromo from './DetailsFormPromo'
import EligibilityPromo from './EligibilityPromo'
import LoanDetailsPromo from './LoanDetailsPromo'

export const HowItWorks = () => {
  return (
    <>
      <FinancialAppPromo />
      <DetailsFormPromo />
      <MoneyTransferPromo />
      <EligibilityPromo />
      <LoanDetailsPromo />
    </>
  )
}

export default HowItWorks