import styles from "./HomeFooter.module.css";

function HomeFooter() {
  return (
    <div className={styles.container}>
      <div className={styles.testimonialWrapper}>
        <div className={styles.testimonialCard}>
          <p className={styles.quote}>
            I needed just ₹5000 to fix my scooter. Baba didn’t ask 100 questions
            — money came before I finished my chai!
          </p>
          <p className={styles.author}>Aakash M., Delhi</p>
        </div>
        <img
          src={"./src/assets/Pages/Home/baba1.png"}
          alt="Baba Face"
          className={styles.babaFace}
        />
      </div>
      <img
        src={"./src/assets/logo.png"}
        alt="Fundo Baba Logo"
        className={styles.logo}
      />
    </div>
  );
}

export default HomeFooter;
