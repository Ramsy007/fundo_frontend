import HomeFooter from "./HomeFooter";
import styles from "./QuickEasy.module.css";

function QuickEasy() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>
          QUICK, EASY & CONVENIENT <br /> — JUST LIKE BABA LIKES IT
        </h1>
        <div className={styles.content}>
          <img
            src={"./baba-cust.png"}
            alt="Baba and Girl"
            className={styles.image}
          />

          <div className={styles.textContent}>
            <div>
              <p className={styles.title}>
                No credit history? <br />
                No problem. Baba doesn’t judge your past. First-timer? You’re
                welcome here.
              </p>
            </div>

            <div className={styles.card}>
              <p className={styles.subtitle}>
                Instant approvals Faster than your chai brewing! <br />
                Apply → Approve → Done.
              </p>
            </div>

            <div className={styles.card}>
              <p className={styles.subtitle}>
                Easy repayments Online, offline, anytime. Baba’s flexible like
                that.
              </p>
            </div>

            <div className={styles.card}>
              <p className={styles.subtitle}>
                No hidden fees No fine print, no gotchas. Baba’s got your back.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuickEasy;
