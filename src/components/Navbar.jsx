import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex space-x-16   font-poppins text-lg font-medium">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          ` text-black font-semibold text-[15px] leading-[39px] font-poppins tracking-[5.2px] ${
            isActive
              ? "border-b-2 border-[#0A3D4D] font-bold"
              : "hover:text-[#0A3D4D] transition-colors duration-200"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/playground"
        className={({ isActive }) =>
          `pb-1 text-black font-semibold text-[15px] leading-[39px] font-poppins tracking-[5.2px] ${
            isActive
              ? "border-b-2 border-[#0A3D4D] font-bold"
              : "hover:text-[#0A3D4D] transition-colors duration-200"
          }`
        }
      >
        How It Works
      </NavLink>
      <NavLink
        to="/aboutus"
        className={({ isActive }) =>
          `pb-1 text-black font-semibold text-[15px] leading-[39px] font-poppins tracking-[5.2px] ${
            isActive
              ? "border-b-2 border-[#0A3D4D] font-bold"
              : "hover:text-[#0A3D4D] transition-colors duration-200"
          }`
        }
      >
        About Baba
      </NavLink>
      <NavLink
        to="/support"
        className={({ isActive }) =>
          `pb-1 text-black font-semibold text-[15px] leading-[39px] font-poppins tracking-[5.2px] ${
            isActive
              ? "border-b-2 border-[#0A3D4D] font-bold"
              : "hover:text-[#0A3D4D] transition-colors duration-200"
          }`
        }
      >
        Support
      </NavLink>
    </nav>
  );
}

export default Navbar;
