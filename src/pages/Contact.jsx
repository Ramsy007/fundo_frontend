import React from "react";
import BabaImage from "../assets/contact/baba.png";
import Navbar from "../components/Navbar";
import Logo from "../assets/Logo.png";

export default function Contact() {
  return (
    <div className="bg-black pl-10 pr-10 pb-10 max-[1320px]:pl-5 max-[1320px]:pr-5 max-[425px]:pl-2 max-[425px]:pr-2">
      <div className="bg-white pb-15 rounded-b-[50px]">
        <div className="flex justify-between items-center gap-4 mr-10 pt-5 pl-5">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
          <Navbar />
        </div>

        <div className="max-w-[1400px] mx-auto  p-6 sm:p-16">
          {/* Contact Baba Section */}
          <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-20 mb-16 sm:mb-32">
            <div className="w-[250px] sm:w-[400px]">
              <img
                src={BabaImage}
                alt="Baba Namaste"
                className="w-full h-auto"
              />
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-teal-900 tracking-[0.1em] mb-6 sm:mb-10">
                CONTACT BABA
              </h2>
              <p className="text-xl sm:text-2xl md:text-4xl text-gray-800 mb-4 sm:mb-6 leading-relaxed">
                Got questions, cash confusion,
                <br />
                or just wanna say hi?
              </p>
              <p className="text-xl sm:text-2xl md:text-4xl text-gray-800 leading-relaxed">
                Baba's ears (and inbox) are always open.
              </p>
            </div>
          </div>

          {/* Have a Doubt Section */}
          <div className="mb-16 sm:mb-32">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-teal-900 tracking-[0.1em] mb-6 sm:mb-12">
              HAVE A DOUBT?
            </h2>
            <p className="text-xl sm:text-2xl md:text-4xl text-gray-800 mb-8 sm:mb-16 leading-relaxed">
              Drop it like it's hot — we'll sort it faster than your UPI ping.
            </p>

            <div className="space-y-8 sm:space-y-16">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
                  Email Support
                </h3>
                <p className="text-lg sm:text-xl md:text-3xl text-gray-800 mb-2 sm:mb-3">
                  support@fundobaba.in
                </p>
                <p className="text-lg sm:text-xl md:text-3xl text-gray-800 leading-relaxed">
                  We reply faster than your crush leaves you on "Seen."
                </p>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
                  
                </h3>
                <p className="text-lg sm:text-xl md:text-3xl text-gray-800 leading-relaxed">
                  
                  <br />
                  <span className="font-bold"></span>
                </p>
                <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 leading-relaxed">
              
                </p>
              </div>
            </div>

            {/* Have a Doubt Section */}
          
            {/* Registered Office Section */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-teal-900 tracking-[0.1em] mb-6 sm:mb-12">
                REGISTERED OFFICE
              </h2>
              <div className="text-xl sm:text-2xl lg:text-3xl text-gray-800 leading-relaxed">
                <p className="mb-2">U.Y. Fincorp Limited</p>
                <p className="mb-6">Fintech Cloud</p>

                {/* Partners Section */}
                <div className="mt-6">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 relative inline-block">
                    <span className="relative z-10">Our Partners</span>
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-blue-500 scale-x-100 transition-transform duration-500"></span>
                  </h3>
                  <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-8 md:gap-16 lg:gap-24">
                    <div className="group relative flex flex-col items-center p-4 md:p-6 rounded-2xl transition-all duration-300 hover:bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg hover:scale-105">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        <img
                          src="/fintechCloud_logo.png"
                          alt="Fintech Cloud Logo"
                          className="h-12 md:h-16 w-auto mb-2 relative z-10 transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium group-hover:text-teal-600 transition-colors duration-300">
                        Technology Partner
                      </p>
                    </div>

                    <div className="group relative flex flex-col items-center p-4 md:p-6 rounded-2xl transition-all duration-300 hover:bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg hover:scale-105">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        <img
                          src="/uy-logo.png"
                          alt="U.Y. Fincorp Logo"
                          className="h-16 w-auto mb-2 relative z-10 transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium group-hover:text-teal-600 transition-colors duration-300">
                        NBFC Partner
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
