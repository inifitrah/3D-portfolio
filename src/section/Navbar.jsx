import React from "react";
import { navLinks } from "../constants";

const NavItems = () => {
  return (
    <ul className="flex nav-ul ">
      {navLinks.map((link) => (
        <li key={link.id} className="nav-li">
          <a className="nav-li_a" href={link.href}>
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black/90 fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-4">
        <a href="/" className="text-white text-xl font-bold">
          FIT
        </a>

        <button className="sm:hidden flex">
          <svg
            onClick={toggleMenu}
            className="h-6 w-6 text-white lg:hidden"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        <nav className="sm:flex hidden">
          <NavItems />
        </nav>
      </div>

      <div className={`nav-sidebar  ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};
