import React from 'react';
import BabaImage from '../assets/contact/baba.png';
import Navbar from '../components/Navbar';

export default function Contact() {
  return (
    <>
    <div className="mt-5 flex justify-end mr-10">
        <Navbar />
      </div>
    
    
    <div className="min-h-screen bg-black py-10 px-10">
      <div className="max-w-[1400px] mx-auto bg-white rounded-[50px] overflow-hidden shadow-2xl p-16">
        {/* Contact Baba Section */}
        <div className="flex items-center gap-20 mb-32">
          <div className="w-[400px]">
            <img src={BabaImage} alt="Baba Namaste" className="w-full h-auto" />
          </div>
          <div>
            <h2 className="text-6xl font-bold text-teal-900 tracking-[0.1em] mb-10">
              CONTACT BABA
            </h2>
            <p className="text-4xl text-gray-800 mb-6 leading-relaxed">
              Got questions, cash confusion,
              <br />
              or <span className="font-bold">just wanna say hi?</span>
            </p>
            <p className="text-4xl text-gray-800 leading-relaxed">
              Baba's ears (and inbox) are always open.
            </p>
          </div>
        </div>

        {/* Have a Doubt Section */}
        <div className="mb-32">
          <h2 className="text-6xl font-bold text-teal-900 tracking-[0.1em] mb-12">
            HAVE A DOUBT?
          </h2>
          <p className="text-4xl text-gray-800 mb-16 leading-relaxed">
            Drop it like it's hot — we'll sort it faster than your UPI ping.
          </p>

          <div className="space-y-16">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Email Support</h3>
              <p className="text-3xl text-gray-800 mb-3">support@fundobaba.in</p>
              <p className="text-3xl text-gray-800 leading-relaxed">
                We reply faster than your crush leaves you on "Seen."
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-4">App Help</h3>
              <p className="text-3xl text-gray-800 leading-relaxed">
                Open the app → Go to "Help & Support" → Chat with Baba's minions.
                <br />
                (Yes, real humans. Baba doesn't do bots.)
              </p>
            </div>
          </div>
        </div>

        {/* Registered Office Section */}
        <div>
          <h2 className="text-6xl font-bold text-teal-900 tracking-[0.1em] mb-12">
            REGISTERED OFFICE
          </h2>
          <div className="text-3xl text-gray-800 leading-relaxed">
            <p className="mb-3">Kasar Credit & Capital Pvt Ltd</p>
            <p className="mb-6">Fintech Cloud Pvt Ltd</p>
            <p className="text-gray-600 italic">(IN CIN No. / RBI Reg. can be added here)</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
} 