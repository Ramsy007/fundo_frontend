import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    src: "/Step1.png",
    alt: "Eligibility Check",// Tu yahan apna address likh lena
    active: true,
    label: "Eligibility Check",
  },
  {
    src: "/Step2.png",
    alt: "Fill Application",
    active: false,
    label: "Fill Application",
  },
  {
    src: "/Step3.png",
    alt: "Upload Documents",
    active: false,
    label: "Upload Documents",
  },
  {
    src: "/Step4.png",
    alt: "Verification Process",
    active: false,
    label: "Verification Process",
  },
  {
    src: "/Step5.png",
    alt: "Final Approval",
    active: false,
    label: "Final Approval",
  },
];

export default function StepsList() {
  return (
    <motion.div 
      className="flex flex-row md:flex-col md:items-start space-x-4 md:space-x-0 md:space-y-6 md:ml-8 md:absolute md:right-1/2 md:translate-x-[450px] md:top-1/2 md:-translate-y-1/2 z-30"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 1.2
      }}
    >
      {steps.map((step, idx) => (
        <motion.div
          key={idx}
          className={`${step.active ? "font-bold" : ""} flex items-center gap-3`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 1.3 + (idx * 0.2)
          }}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
        >
          <motion.div 
            className="w-[40px] h-[40px] md:w-[54px] md:h-[54px] flex items-center justify-center bg-blur rounded-full overflow-hidden"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 0 15px rgba(255, 193, 7, 0.5)"
            }}
          >
            {step.src && (
              <img
                src={step.src}
                alt={step.alt}
                className="w-full h-full object-contain"
              />
            )}
          </motion.div>
          <motion.div 
            className="text-[10px] text-yellow-500 min-h-[16px] hidden md:block font-medium tracking-wide"
            whileHover={{ 
              color: "#fbbf24",
              scale: 1.05
            }}
          >
            {step.label}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}
