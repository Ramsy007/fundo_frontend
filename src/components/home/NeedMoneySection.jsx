import styles from "./NeedMoneySection.module.css";
import { motion } from "framer-motion";

function NeedMoneySection() {
  return (
    <motion.div
      className={styles.hero_text}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h1 className={styles.heading_primary}>NEED MONEY?</h1>
      <p className={styles.subtext}>
        BABA'S GOT YOUR BACK
        <br /> — FASTER THAN YOUR BEST <br /> FRIEND'S UPI!
      </p>
    </motion.div>
  );
}

export default NeedMoneySection;
