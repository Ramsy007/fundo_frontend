import styles from "./EmiCalci.module.css";

function EmiCalci() {
  return (
    <div className={styles.emiCalculator}>
      <div className={styles.calculatorBox}>
        <h1 className={styles.headingPrimary}>EMI CALCULATOR:</h1>
        <h2 className={styles.headingSecondary}>BABA’S SMART LOAN BUDDY</h2>
        <p className={styles.description}>
          <strong>Dream Big. Baba Will Do the Math.</strong> Use our EMI
          calculator to plan your repayment like a pro — sliders, dials, and all
          that jazz.
        </p>

        <div className={styles.inputContainer}>
          <input type="text" placeholder="Enter your loan amount" />
          <input type="text" placeholder="Choose your tenure" />
          <input type="text" placeholder="See your monthly EMI instantly" />
        </div>

        <p className={styles.subtext}>No surprises. Just clarity.</p>

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
