import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import gsap from "gsap";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      gsap.to(sidebarRef.current, {
        x: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(sidebarRef.current, {
        x: "100%",
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  }, [menuOpen]);

  const handleNavigate = (path) => {
    setMenuOpen(false);

    // Delay navigation slightly to allow menu close animation to complete
    setTimeout(() => {
      navigate(path);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }, 100);
  };

  const activeStyle = (e) => (e.isActive ? "text-zinc-700" : "text-black");

  return (
    <div>
      <nav className="flex justify-between items-center uppercase p-[2rem] max-md:px-[1rem]">
        <Link to="/" className="hero-heading font-[500] cursor-pointer">sumit kumar</Link>
        <ul className="nav-links flex gap-15 text-[0.7rem] font-base">
          <li className="hidden sm:block">
            <NavLink className={activeStyle} to="/">home</NavLink>
          </li>
          <li className="hidden sm:block">
            <NavLink className={activeStyle} to="/about">about</NavLink>
          </li>
          <li className="block sm:hidden">
            <i
              className={`ri-${menuOpen ? "close-line" : "menu-2-line"} cursor-pointer text-xl`}
              onClick={toggleMenu}
            ></i>
          </li>
          <li className="magnetic hidden sm:block">
            <i className="ri-add-line cursor-pointer"></i>
          </li>
        </ul>
      </nav>

      {/* Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className="fixed top-0 right-0 h-screen w-[60%] bg-white z-[100] shadow-lg translate-x-full p-8 flex flex-col gap-8 uppercase font-semibold text-base sm:hidden"
      >
        <button
          onClick={() => handleNavigate("/")}
          className="text-left border-b border-zinc-300 pb-2"
        >
          Home
        </button>
        <button
          onClick={() => handleNavigate("/about")}
          className="text-left border-b border-zinc-300 pb-2"
        >
          About
        </button>
      </div>
    </div>
  );
};

export default Nav;
