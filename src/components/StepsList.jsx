import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    src: "/Step1.png",
    alt: "Eligibility Check",// Tu yahan apna address likh lena
    active: true,
  },
  {
    src: "/Step2.png",
    alt: "Fill Application",
    active: false,
  },
  {
    src: "/Step3.png",
    alt: "Upload Documents",
    active: false,
  },
  {
    src: "/Step4.png",
    alt: "Verification Process",
    active: false,
  },
  {
    src: "/Step5.png",
    alt: "Final Approval",
    active: false,
  },
];

export default function StepsList() {
  return (
    <div className="hidden md:flex flex-col items-start ml-8 space-y-6 absolute right-1/2 translate-x-[500px] top-1/2 -translate-y-1/2 z-30">
      {steps.map((step, idx) => (
        <motion.div
          key={idx}
          className={`flex flex-col items-center gap-1 ${step.active ? "font-bold" : ""} w-full`}
          initial={{ opacity: 0, y: 30, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 24, delay: 0.2 + idx * 0.13 }}
          whileHover={{ scale: 1.08 }}
        >
          <motion.div
            className="w-[54px] h-[54px] flex items-center justify-center bg-gray-100 rounded-full overflow-hidden border border-gray-300 transition-shadow"
            whileHover={{
              boxShadow: "0 0 16px 4px #00eaff, 0 0 32px 8px #00eaff55"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {step.src && (
              <img
                src={step.src}
                alt={step.alt}
                className="w-full h-full object-contain"
              />
            )}
          </motion.div>
          <div className="text-[10px] text-gray-500 text-center w-full min-h-[16px]">
            {step.address}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
