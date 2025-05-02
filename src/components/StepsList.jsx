import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const steps = [
  {
    src: "/Step1.png",
    alt: "Eligibility Check",
    label: "Eligibility Check",
  },
  {
    src: "/Step2.png",
    alt: "Fill Application",
    label: "Fill Application",
  },
  {
    src: "/Step3.png",
    alt: "Upload Documents",
    label: "Upload Documents",
  },
  {
    src: "/Step4.png",
    alt: "Verification Process",
    label: "Verification Process",
  },
  {
    src: "/Step5.png",
    alt: "Final Approval",
    label: "Final Approval",
  },
];

export default function StepsList() {
  const currentStep = useSelector((state) => state.lTracker.step);
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-row md:flex-col md:items-start space-x-2 md:space-x-0 space-y-2 md:space-y-6 md:ml-8 md:absolute md:right-2/5 md:translate-x-[450px] md:top-1/2 md:-translate-y-1/2 z-30">
      {steps.map((step, idx) => {
        const isActive = idx + 1 === currentStep;
        const isCompleted = idx + 1 < currentStep;
        
        return (
          <div
            key={idx}
            className="flex items-center gap-2 md:gap-3 group w-full"
          >
            <div className="relative w-[40px] md:w-[54px] flex justify-center">
              {/* Active step effects */}
              {isActive && (
                <>
                  {/* Professional outer ring - darker yellow */}
                  <div className="absolute -inset-1 md:-inset-2 rounded-full border-2 border-yellow-500/70 animate-progress"></div>
                  
                  {/* Subtle inner glow - darker */}
                  <div className="absolute inset-0 rounded-full bg-yellow-500/20 blur-sm"></div>
                  
                  {/* Progress circle - darker */}
                  <svg className="absolute -inset-1 md:-inset-2 w-[calc(100%+8px)] md:w-[calc(100%+16px)] h-[calc(100%+8px)] md:h-[calc(100%+16px)] -rotate-90">
                    <circle
                      className="animate-progress-ring"
                      cx="50%"
                      cy="50%"
                      r="45%"
                      fill="none"
                      stroke="rgb(234 179 8 / 0.6)"
                      strokeWidth="2"
                      strokeDasharray="283"
                      strokeLinecap="round"
                    />
                  </svg>
                </>
              )}

              {/* Icon Container */}
              <div className="relative w-[40px] h-[40px] md:w-[54px] md:h-[54px] flex items-center justify-center">
                <img
                  src={step.src}
                  alt={step.alt}
                  className={`
                    w-[30px] h-[30px] md:w-[40px] md:h-[40px] object-contain
                    transition-all duration-500
                    ${isActive ? 'drop-shadow-[0_0_8px_rgba(234,179,8,0.5)] scale-110' : ''}
                    ${isCompleted ? 'opacity-100' : 'opacity-70'}
                  `}
                />
              </div>
            </div>

            {/* Step Label */}
            <div className={`
              text-[10px] md:text-[12px] min-h-[16px] hidden md:block
              font-semibold tracking-wide transition-all duration-500
              ${isActive ? 'text-white translate-x-1 font-bold' : 'text-white group-hover:translate-x-1'}
              ${isCompleted ? 'opacity-100' : 'opacity-70'}
            `}>
              {step.label}
            </div>
          </div>
        );
      })}

      <style jsx>{`
        @keyframes progress {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes progress-ring {
          0% { stroke-dashoffset: 283; }
          100% { stroke-dashoffset: 0; }
        }

        .animate-progress {
          animation: progress 3s linear infinite;
        }

        .animate-progress-ring {
          animation: progress-ring 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}