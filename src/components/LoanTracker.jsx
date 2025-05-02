import React from "react";

const steps = [
  {
    src: "/Step1.png",
    alt: "Eligibility Check",
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

export default function LoanTracker() {
  return (
    <div className="flex flex-row md:flex-col md:items-start space-x-4 md:space-x-0 space-y-2 md:space-y-6 md:ml-8 md:absolute md:right-2/5 md:translate-x-[450px] md:top-1/2 md:-translate-y-1/2 z-30">
      {steps.map((step, idx) => (
        <div
          key={idx}
          className="flex items-center gap-3 group w-full"
        >
          <div className="relative w-[54px] flex justify-center">
            {/* Active step effects */}
            {step.active && (
              <>
                {/* Professional outer ring - darker yellow */}
                <div className="absolute -inset-2 rounded-full border-2 border-yellow-500/70 animate-progress"></div>
                
                {/* Subtle inner glow - darker */}
                <div className="absolute inset-0 rounded-full bg-yellow-500/20 blur-sm"></div>
                
                {/* Progress circle - darker */}
                <svg className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] -rotate-90">
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
            <div className="relative w-[54px] h-[54px] flex items-center justify-center">
              <img
                src={step.src}
                alt={step.alt}
                className={`
                  w-[40px] h-[40px] object-contain
                  transition-all duration-500
                  ${step.active ? 'drop-shadow-[0_0_8px_rgba(234,179,8,0.5)] scale-110' : ''}
                `}
              />
            </div>
          </div>

          {/* Step Label */}
          <div className={`
            text-[12px] text-yellow-500 min-h-[16px] hidden md:block
            font-semibold tracking-wide transition-all duration-500
            ${step.active ? 'text-yellow-400 translate-x-1 font-bold' : 'group-hover:translate-x-1'}
          `}>
            {step.label}
          </div>
        </div>
      ))}

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