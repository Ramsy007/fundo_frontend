import styles from "./TrustBaba.module.css";

function TrustBaba() {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>WHY TRUST BABA?</h2>
      <p className={styles.subheading}>
        Baba’s not just fun. He’s fundamentally dependable.
      </p>

      <div className={styles.stats}>
        <div className={styles.statItem}>
          <h3>₹160M+</h3>
          <p>
            disbursed
            <br />
            (yes, with an M!)
          </p>
        </div>
        <div className={styles.statItem}>
          <h3>7M+</h3>
          <p>happy users</p>
        </div>
        <div className={styles.statItem}>
          <h3>40+</h3>
          <p>even baba’s beard has credibility</p>
        </div>
      </div>
    </section>
  );
}

export default TrustBaba;
