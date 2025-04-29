import styles from "./HomeFooter.module.css";
import babaFace from "../../assets/Pages/Home/baba1.png";
import logo from "../../assets/logo.png";

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
        <img src={babaFace} alt="Baba Face" className={styles.babaFace} />
      </div>
      <img src={logo} alt="Fundo Baba Logo" className={styles.logo} />
    </div>
  );
}

export default HomeFooter;
