import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "../assets/images/logo.png";
import { RiCloseFill, RiMenu3Fill, RiShoppingCart2Fill } from "react-icons/ri";
import { useCart } from "../context/CartContext"; // Import useCart from CartContext

const Nav = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const { getTotalItems } = useCart(); // Get total items in cart

  return (
    <nav className="z-30">
      {/* Desktop View */}
      <div className="container mx-auto justify-between md:flex hidden items-center py-4">
        {/* Logo */}
        <Link to="/" className="my-2 flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-12 w-12" />
        </Link>

        {/* Desktop Menu */}
        <ul className="flex gap-8 lg:gap-12 items-center capitalize font-medium text-black">
          <li className="hover:scale-105 transition-all">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:scale-105 transition-all">
            <a href="#about">About</a>
          </li>
          <li className="hover:scale-105 transition-all">
            <a href="#testimonials">Testimonials</a>
          </li>
          <li className="hover:scale-105 transition-all">
            <a href="#blog">Blog</a>
          </li>
          <li className="hover:scale-105 transition-all">
            <a href="#contact-us">Contact-us</a>
          </li>
          <li className="hover:scale-105 transition-all">
            <Link to="/product">Products</Link>
          </li>
          <li className="hover:scale-105 transition-all relative">
            <Link to="/cart" className="flex items-center">
              <RiShoppingCart2Fill size={32} />
              {getTotalItems() > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-2 py-1">
                  {getTotalItems()}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile View */}
      <div className="container mx-auto md:hidden flex justify-between items-center relative py-4">
        {/* Logo */}
        <Link to="/" onClick={() => setMenuOpened(false)}>
          <img src={logo} alt="Logo" className="h-10 w-10" />
        </Link>

        {/* Menu Toggle Icon */}
        {!menuOpened ? (
          <RiMenu3Fill
            size={25}
            onClick={() => setMenuOpened(true)}
            className="cursor-pointer text-black"
          />
        ) : (
          <RiCloseFill
            size={25}
            onClick={() => setMenuOpened(false)}
            className="cursor-pointer text-black"
          />
        )}

        {/* Mobile Dropdown Menu */}
        {menuOpened && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-xl z-30 ring-1 ring-slate-900/5">
            {/* Menu Items */}
            <ul className="flex flex-col gap-4 text-center capitalize font-medium text-slate-700 p-6">
              <li className="hover:scale-105 transition-all">
                <Link to="/" onClick={() => setMenuOpened(false)}>
                  Home
                </Link>
              </li>
              <li className="hover:scale-105 transition-all">
                <a href="#about" onClick={() => setMenuOpened(false)}>
                  About
                </a>
              </li>
              <li className="hover:scale-105 transition-all">
                <a href="#testimonials" onClick={() => setMenuOpened(false)}>
                  Testimonials
                </a>
              </li>
              <li className="hover:scale-105 transition-all">
                <a href="#blog" onClick={() => setMenuOpened(false)}>
                  Blog
                </a>
              </li>
              <li className="hover:scale-105 transition-all">
                <a href="#contact-us" onClick={() => setMenuOpened(false)}>
                  Contact-us
                </a>
              </li>
              <li className="hover:scale-105 transition-all">
                <Link to="/product" onClick={() => setMenuOpened(false)}>
                  Products
                </Link>
              </li>
              <li className="hover:scale-105 transition-all relative">
                <Link to="/cart" onClick={() => setMenuOpened(false)}>
                  <RiShoppingCart2Fill size={32} />
                  {getTotalItems() > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-2 py-1">
                      {getTotalItems()}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
