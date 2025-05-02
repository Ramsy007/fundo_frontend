import { useState, useEffect } from 'react';

export default function Button({ isLoading, onClick, buttonText = "Verify", disabled = false }) {
  return (
    <div className="w-full">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`relative w-full px-4 py-3 sm:px-6 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-xl text-white font-semibold transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-purple-200/50 outline-none ${disabled && !isLoading ? 'opacity-75' : 'opacity-100'} ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
      >
        {/* Button content */}
        <div className={`flex items-center justify-center gap-2 transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          <span className="text-sm sm:text-base transition-transform duration-300">{buttonText}</span>
        </div>

        {/* Loader container */}
        <div className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-300 ${isLoading ? 'opacity-100' : 'opacity-0'}`}>
          <div className="relative flex items-center justify-center w-full h-full">
            {/* Initial boom circle */}
            <div className={`absolute w-4 h-4 bg-pink-400 rounded-full ${isLoading ? 'animate-boom' : ''}`} />

            {/* Pink Particles */}
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={`pink-${index}`}
                className={`absolute w-3 h-3 bg-pink-200 rounded-full ${isLoading ? 'animate-particle' : ''}`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  transform: `rotate(${index * 45}deg)`,
                }}
              />
            ))}

            {/* Blue Particles */}
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={`blue-${index}`}
                className={`absolute w-3 h-3 bg-blue-200 rounded-full ${isLoading ? 'animate-particle' : ''}`}
                style={{
                  animationDelay: `${index * 0.1 + 0.05}s`,
                  transform: `rotate(${index * 45 + 22.5}deg)`,
                }}
              />
            ))}

            {/* Pulsing circles */}
            <div className="flex items-center justify-center z-10">
              {[0, 1, 2, 3, 4].map((index) => (
                <div
                  key={index}
                  className={`w-3 h-3 mx-1 bg-pink-400 rounded-full ${isLoading ? 'animate-pulse' : ''}`}
                  style={{
                    animationDelay: `${0.8 + index * 0.2}s`,
                    transform: 'scale(0)',
                  }}
                />
              ))}
            </div>

            {/* Hexagon animation */}
            <div className="absolute w-full h-full border-4 border-pink-400 opacity-0"
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                animation: isLoading ? 'hexPulse 2s infinite ease-out 0.8s' : 'none',
              }}
            />
          </div>
        </div>
      </button>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(0);
            opacity: 0.7;
          }
          50% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes hexPulse {
          0% {
            transform: scale(0.3) rotate(0deg);
            opacity: 0.8;
          }
          50% {
            opacity: 0.2;
          }
          100% {
            transform: scale(1.2) rotate(30deg);
            opacity: 0;
          }
        }
        
        @keyframes boom {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          50% {
            transform: scale(4);
            opacity: 0.7;
          }
          100% {
            transform: scale(8);
            opacity: 0;
          }
        }
        
        @keyframes particle {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateX(calc(cos(var(--angle)) * 50px)) translateY(calc(sin(var(--angle)) * 50px));
            opacity: 0;
          }
        }
        
        .animate-pulse {
          animation: pulse 1.5s infinite ease-in-out;
        }
        
        .animate-boom {
          animation: boom 0.8s ease-out forwards;
        }
        
        .animate-particle {
          animation: particle 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}