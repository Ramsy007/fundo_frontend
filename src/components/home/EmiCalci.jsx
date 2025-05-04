import { useState, useEffect } from "react";
import styles from "./EmiCalci.module.css";

function EmiCalci() {
  const [loanAmount, setLoanAmount] = useState("");
  const [tenure, setTenure] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [emi, setEmi] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateEMI = () => {
    if (!loanAmount || !tenure || !interestRate) {
      setEmi(0);
      return;
    }

    setIsCalculating(true);
    const principal = parseFloat(loanAmount);
    const timeInMonths = parseFloat(tenure);
    const ratePerMonth = parseFloat(interestRate) / 12 / 100;

    const emiAmount =
      (principal * ratePerMonth * Math.pow(1 + ratePerMonth, timeInMonths)) /
      (Math.pow(1 + ratePerMonth, timeInMonths) - 1);

    setTimeout(() => {
      setEmi(Math.round(emiAmount));
      setIsCalculating(false);
    }, 500);
  };

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, tenure, interestRate]);

  const handleLoanAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setLoanAmount(value);
  };

  const handleTenureChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setTenure(value);
  };

  const handleInterestRateChange = (e) => {
    const value = e.target.value.replace(/[^0-9.]/g, "");
    if (value === "" || (parseFloat(value) >= 0 && parseFloat(value) <= 100)) {
      setInterestRate(value);
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className={styles.emiCalculator}>
      <div className={styles.calculatorBox}>
        <h1 className={styles.headingPrimary}>EMI CALCULATOR:</h1>
        <h2 className={styles.headingSecondary}>BABA'S SMART LOAN BUDDY</h2>
        <p className={styles.description}>
          <strong>Dream Big. Baba Will Do the Math.</strong> Use our EMI
          calculator to plan your repayment like a pro — sliders, dials, and all
          that jazz.
        </p>

        <div className={styles.inputContainer}>
          <div className={styles.floatingLabelGroup}>
            <input
              type="text"
              value={loanAmount}
              onChange={handleLoanAmountChange}
              required
              className={styles.floatingInput}
            />
            <label className={loanAmount ? styles.filled : ""}>
              Enter your loan amount
            </label>
          </div>
          <div className={styles.floatingLabelGroup}>
            <input
              type="text"
              value={tenure}
              onChange={handleTenureChange}
              required
              className={styles.floatingInput}
            />
            <label className={tenure ? styles.filled : ""}>
              Choose your tenure (in months)
            </label>
          </div>
          <div className={styles.floatingLabelGroup}>
            <input
              type="text"
              value={interestRate}
              onChange={handleInterestRateChange}
              required
              className={styles.floatingInput}
            />
            <label className={interestRate ? styles.filled : ""}>
              Enter interest rate (in %)
            </label>
          </div>
          <div className={styles.emiDisplayBox}>
            {isCalculating
              ? "Calculating..."
              : emi
              ? formatCurrency(emi)
              : "See your monthly EMI instantly"}
          </div>
        </div>

        <p className={styles.subtext}>
          {emi
            ? `Monthly EMI: ${formatCurrency(
                emi
              )} | Interest Rate: ${interestRate}% p.a.`
            : "No surprises. Just clarity."}
        </p>
        {emi > 0 && tenure > 0 && interestRate > 0 && (
          <p className={styles.subtext}>
            Total Payable Amount:{" "}
            <strong>{formatCurrency(emi * parseFloat(tenure))}</strong>
          </p>
        )}

        <div className={styles.applyNowContainer}>
          <span>Apply Now</span>
          <div className={styles.circleButton}>
            <span>➔</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmiCalci;
