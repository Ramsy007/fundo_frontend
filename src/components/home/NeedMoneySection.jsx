import styles from "./NeedMoneySection.module.css";
function NeedMoneySection() {
  return (
    <div className={styles.hero_text}>
      <h1 className={styles.heading_primary}>NEED MONEY?</h1>
      <p className={styles.subtext}>
        BABA'S GOT YOUR BACK
        <br /> — FASTER THAN YOUR BEST <br /> FRIEND’S UPI!
      </p>
    </div>
  );
}

export default NeedMoneySection;
