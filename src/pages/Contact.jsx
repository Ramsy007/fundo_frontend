import React from 'react';
import BabaImage from '../assets/contact/baba.png';
import Navbar from '../components/Navbar';

export default function Contact() {
  return (
    <>
    <div className="mt-5 flex justify-end mr-4 sm:mr-10">
        <Navbar />
      </div>
    
    
    <div className="min-h-screen bg-black py-6 sm:py-10 px-4 sm:px-10">
      <div className="max-w-[1400px] mx-auto bg-white rounded-[20px] sm:rounded-[50px] overflow-hidden shadow-2xl p-6 sm:p-16">
        {/* Contact Baba Section */}
        <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-20 mb-16 sm:mb-32">
          <div className="w-[250px] sm:w-[400px]">
            <img src={BabaImage} alt="Baba Namaste" className="w-full h-auto" />
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-teal-900 tracking-[0.1em] mb-6 sm:mb-10">
              CONTACT BABA
            </h2>
            <p className="text-xl sm:text-2xl md:text-4xl text-gray-800 mb-4 sm:mb-6 leading-relaxed">
              Got questions, cash confusion,
              <br />
              or <span className="font-bold">just wanna say hi?</span>
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
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">Email Support</h3>
              <p className="text-lg sm:text-xl md:text-3xl text-gray-800 mb-2 sm:mb-3">support@fundobaba.in</p>
              <p className="text-lg sm:text-xl md:text-3xl text-gray-800 leading-relaxed">
                We reply faster than your crush leaves you on "Seen."
              </p>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">App Help</h3>
              <p className="text-lg sm:text-xl md:text-3xl text-gray-800 leading-relaxed">
                Open the app → Go to "Help & Support" → Chat with Baba's minions.
                <br />
                (Yes, real humans. Baba doesn't do bots.)
              </p>
            </div>
          </div>
        </div>

        {/* Registered Office Section */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-teal-900 tracking-[0.1em] mb-6 sm:mb-12">
            REGISTERED OFFICE
          </h2>
          <div className="text-lg sm:text-xl md:text-3xl text-gray-800 leading-relaxed">
            <p className="mb-4 sm:mb-6">Fintech Cloud Pvt Ltd</p>
            {/* <p className="text-gray-600 italic">(IN CIN No. / RBI Reg. can be added here)</p> */}
          </div>
        </div>
      </div>
    </div>
    </>
  );
} 