import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home", exact: true },
    { to: "/howitworks", label: "How It Works" },
    { to: "/aboutus", label: "About Baba" },
    { to: "/support", label: "Support" },
  ];

  useEffect(() => {
    if (sidebarOpen) {
      navLinks.forEach((_, idx) => {
        setTimeout(() => {
          const el = document.querySelector(`.sidebar-link${idx}`);
          if (el) {
            el.style.opacity = 1;
            el.style.transform = "translateX(0)";
          }
        }, idx * 100 + 200);
      });
    } else {
      navLinks.forEach((_, idx) => {
        const el = document.querySelector(`.sidebar-link${idx}`);
        if (el) {
          el.style.opacity = 0;
          el.style.transform = "translateX(40px)";
        }
      });
    }
  }, [sidebarOpen]);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex space-x-16 font-poppins text-lg font-medium">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.exact}
            className={({ isActive }) =>
              `text-black font-semibold text-[15px] leading-[39px] font-poppins tracking-[5.2px] ${
                isActive
                  ? "border-b-2 border-[#0A3D4D] font-bold"
                  : "hover:text-[#0A3D4D] transition-colors duration-200"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      {/* Hamburger Icon for Mobile */}
      <button
        className="md:hidden flex items-center px-2 py-1 mr-[-30px] text-3xl text-black focus:outline-none"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open menu"
      >
        <svg
          width="32"
          height="32"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Sidebar - Removed background */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-64 z-50 backdrop-blur-sm transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "translate-x-[100%]"}`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-2xl text-white focus:outline-none"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>
        <nav className="flex flex-col items-start space-y-8 mt-10 text-lg font-medium">
          {navLinks.map((link, idx) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.exact}
              className={({ isActive }) =>
                `text-center py-2 ml-15 text-white font-semibold text-[18px] tracking-[5.2px] transition-all duration-500 ease-out transform translate-x-[-40px] opacity-0 sidebar-link${idx} hover:text-white/80 ` +
                (isActive ? " font-bold" : "")
              }
              style={{
                transitionDelay: `${idx * 100 + 200}ms`,
                transitionProperty: "opacity, transform",
              }}
              onClick={() => setSidebarOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
}

export default Navbar;
