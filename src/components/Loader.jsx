import React from "react";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50">
      <div className="flex space-x-4">
        {/* First Cube */}
        <div className="relative w-12 h-12">
          <div
            className="absolute inset-0 bg-[#243112] rounded-lg animate-spin"
            style={{ animationDelay: "0s" }}
          >
            <div className="absolute inset-1 bg-white rounded-lg" />
          </div>
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gray-200 rounded-full blur-sm opacity-50" />
        </div>

        {/* Second Cube */}
        <div className="relative w-12 h-12">
          <div
            className="absolute inset-0 bg-[#243112] rounded-lg animate-spin"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="absolute inset-1 bg-white rounded-lg" />
          </div>
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gray-200 rounded-full blur-sm opacity-50" />
        </div>

        {/* Third Cube */}
        <div className="relative w-12 h-12">
          <div
            className="absolute inset-0 bg-[#243112] rounded-lg animate-spin"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="absolute inset-1 bg-white rounded-lg" />
          </div>
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gray-200 rounded-full blur-sm opacity-50" />
        </div>
      </div>
    </div>
  );
};

export default PageLoader;