import styles from "./LoanProcess.module.css";
function LoanProcess() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        3-STEP LOAN <br /> PROCESS
      </h2>
      <div className={styles.steps}>
        <div className={styles.step}>
          <h3>Money in Your Account</h3>
          <p>Before your chai gets cold — Baba credits your cash.</p>
        </div>
        <div className={styles.step}>
          <h3>Sign Up & Fill Details</h3>
          <p>
            Aadhaar, PAN, bank info — done in a jiffy. Baba doesn't ask for your
            blood group.
          </p>
        </div>
        <div className={styles.step}>
          <h3>Get Approved Instantly</h3>
          <p>
            Real-time checks. No long forms. No <em>"sir kal aana."</em>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoanProcess;
