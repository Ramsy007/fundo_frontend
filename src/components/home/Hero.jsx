import { Link } from "react-router-dom";
import styles from "./Hero.module.css";
import ApplyNowButton from "../ApplyNowButton";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__container}>
        <div className={styles.img_logo_container}>
          <img src="/logo.png" alt="logo of baba" />
        </div>
        <div className={styles.hero__text}>
          <div className={styles.hero_desc}>
            <span>NEED CASH?</span> <br />
            <div className="mb-5 max-[425px]:mb-1"></div>
            <span>BABA'S GOT YOUR</span> <br />
            <div className="mb-5 max-[425px]:mb-1"></div>
            <span>BACK. EVERY TIME.</span>
          </div>
          <ApplyNowButton />
        </div>
      </div>
    </div>
  );
}

export default Hero;
