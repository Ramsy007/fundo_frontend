import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="py-4 px-8">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-teal-500">
            Fundo baba
          </div>
          <div className="flex gap-8">
            <Link to="/" className="font-medium">Home</Link>
            <Link to="/how-it-works" className="font-medium">How It Works</Link>
            <Link to="/about-baba" className="font-medium">About Baba</Link>
            <Link to="/support" className="font-medium">Support</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 mt-8 flex justify-end">
        <div 
          className="w-[85%] relative"
          style={{
            background: '#971201',
            border: '1px solid #707070',
            borderRadius: '72px',
            height: '700px'
          }}
        >
          {/* Logo */}
          <div className="absolute top-8 right-12">
            <img src="/logo.png" alt="Fundo Baba Logo" className="w-40" />
          </div>

          <div className="flex h-full">
            {/* Left Side with Characters */}
            <div className="w-3/5 relative h-full flex items-end">
              <img 
                src="/Fundobaba.png" 
                alt="Fundo Baba Characters" 
                className="w-[120%] h-auto object-contain absolute bottom-0 left-0 transform scale-110 origin-bottom-left" 
              /> 
            </div>

            {/* Right Side with Text */}
            <div className="w-2/5 flex flex-col justify-center pr-16">
              <h1 className="text-white text-[64px] font-bold leading-tight">
                NEED CASH?
                <br />
                <span className="whitespace-nowrap">BABA'S GOT YOUR</span>
                <br />
                <span className="whitespace-nowrap">BACK. EVERY TIME.</span>
              </h1>
              <div className="mt-8">
                <button className="bg-white text-red-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all">
                  Get Instant Money →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
