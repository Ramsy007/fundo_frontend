import React from 'react';

export default function FooterStep() {
  return (
    <footer className="bg-black text-white py-4 md:py-8 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between rounded-t-3xl">
      <div className="text-xs opacity-70">
        Terms & Condition &nbsp; | &nbsp; Privacy Policy
      </div>
      <div className="font-bold text-sm md:text-base mt-2 md:mt-0">Contacts</div>
    </footer>
  );
} 