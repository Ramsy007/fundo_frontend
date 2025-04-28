import React from "react";
import styles from "@/css/Playground.module.css";
import { motion } from "framer-motion";

function Playground() {
  return (
    <section className="w-full bg-white font-[Poppins] flex flex-col items-center p-6 md:p-10">
      {/* Top Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mb-6"
      >
        <h2 className="text-lg md:text-xl tracking-widest font-semibold uppercase mb-4 text-gray-800">
          Quick, Easy & Convenient — Just Like Baba Likes It
        </h2>
      </motion.div>

      {/* Image and Text Side-by-Side */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center md:items-start max-w-6xl w-full gap-8"
      >
        {/* Left Image */}
        <div className="flex-shrink-0">
          <img
            src="/your-image-path.png" // Replace with your imported image path
            alt="Baba and Girl"
            className="w-full max-w-[300px] md:max-w-[350px] object-contain"
          />
        </div>

        {/* Right Text */}
        <div className="flex flex-col text-gray-700 space-y-6">
          <div>
            <h3 className="font-bold text-gray-900 mb-1">No credit history?</h3>
            <p className="text-sm md:text-base">
              No problem. Baba doesn’t judge your past. First-timer? You’re
              welcome here.
            </p>
          </div>

          <div className="border-t border-gray-300"></div>

          <div>
            <p className="text-sm md:text-base">
              <span className="font-bold">Instant approvals</span> Faster than
              your chai brewing! Apply → Approve → Done.
            </p>
          </div>

          <div className="border-t border-gray-300"></div>

          <div>
            <p className="text-sm md:text-base">
              <span className="font-bold">Easy repayments</span> Online,
              offline, anytime. Baba’s flexible like that.
            </p>
          </div>

          <div className="border-t border-gray-300"></div>

          <div>
            <p className="text-sm md:text-base">
              <span className="font-bold">No hidden fees</span> No fine print,
              no gotchas. Baba’s got your back.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Testimonial Box */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-[#07445C] text-white mt-10 p-6 md:p-10 rounded-3xl text-center max-w-4xl w-full"
      >
        <p className="text-sm md:text-lg mb-6">
          I needed just ₹5000 to fix my scooter. Baba didn’t ask 100 questions —
          money came before I finished my chai!
        </p>
        <p className="font-bold tracking-wide text-base md:text-lg">
          Aakash M., Delhi
        </p>

        {/* Baba Logo */}
        <div className="flex justify-center mt-6">
          <img
            src="/your-baba-logo.png" // Replace with Baba logo
            alt="Fundo Baba Logo"
            className="w-16 h-16 md:w-20 md:h-20 object-contain"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Playground;
