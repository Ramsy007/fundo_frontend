import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__container}>
        <div className={styles.img_logo_container}>
          <img src="/logo.png" alt="logo of baba" />
        </div>
        <div className={styles.hero__text}>
          <div className={styles.hero_desc}>
            NEED CASH? <br /> BABA’S GOT YOUR <br />
            BACK. EVERY TIME.
          </div>
          <Link to={"/step1"}>
            {" "}
            <div className={styles.hero_btn}>Get Instant Money</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
