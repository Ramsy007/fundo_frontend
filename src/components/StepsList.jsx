import React from "react";

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
    <div className="flex flex-row md:flex-col md:items-start space-x-4 md:space-x-0 md:space-y-6 md:ml-8 md:absolute md:right-1/2 md:translate-x-[450px] md:top-1/2 md:-translate-y-1/2 z-30">
      {steps.map((step, idx) => (
        <div
          key={idx}
          className={`${step.active ? "font-bold" : ""} flex items-center gap-3`}
        >
          <div className="w-[40px] h-[40px] md:w-[54px] md:h-[54px] flex items-center justify-center bg-blur rounded-full overflow-hidden">
            {step.src && (
              <img
                src={step.src}
                alt={step.alt}
                className="w-full h-full object-contain"
              />
            )}
          </div>
          <div className="text-[10px] text-yellow-500 min-h-[16px] hidden md:block font-medium tracking-wide">
            {step.label}
          </div>
        </div>
      ))}
    </div>
  );
}
