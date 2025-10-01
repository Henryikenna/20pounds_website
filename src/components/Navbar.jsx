import { Link, useNavigate } from "react-router-dom";
// import Logo from "../assets/svg/logo.svg";
import Logo from "../assets/images/logo.png";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

export default function Navbar() {
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (path) => {
    navigate(path);
    closeMobileMenu();
  };

  return (
    <header className="sticky max-w-6xl md:mx-auto mx-5 px-3 lg:px-6 top-5 lg:top-10 z-40 backdrop-blur border border-tpGrey/20 bg-[#1D1D1D87] rounded-[10px]">
      <div className="flex h-20 md:h-24 items-center justify-between gap-5 lg:gap-0">
        <Link to="/">
          {/* <img src={Logo} alt="" className="w-full md:w-40" /> */}
          <img src={Logo} alt="" className="w-40" />
        </Link>

        <section className="flex justify-center gap-16">
          <nav className="hidden md:flex items-center gap-8 text-base text-tpGrey">
            <a href="/#about" className="hover:text-cream/80">
              About Us
            </a>
            <a href="/#faq" className="hover:text-cream/80">
              FAQ
            </a>
            {/* <a href="#contact" className="hover:text-cream/80"> */}
            {/* <button
              onClick={navigate("/contact-us")}
              className="hover:text-cream/80 cursor-pointer"
            >
              Contact Us
            </button> */}
            <Link to="/contact-us" className="hover:text-cream/80">
              Contact Us
            </Link>
          </nav>
          <button className="btn !hidden md:!block">Get Started</button>
        </section>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-cream hover:text-gold transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <IoClose className="text-3xl" />
          ) : (
            <IoMenu className="text-3xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-5 bg-[#1D1D1D] border border-tpGrey/20 rounded-lg backdrop-blur-lg shadow-lg overflow-hidden">
          <nav className="flex flex-col py-4">
            <a
              href="/#about"
              className="px-6 py-3 text-tpGrey hover:text-cream hover:bg-tpGrey/10 transition-colors"
              onClick={closeMobileMenu}
            >
              About Us
            </a>
            <a
              href="/#faq"
              className="px-6 py-3 text-tpGrey hover:text-cream hover:bg-tpGrey/10 transition-colors"
              onClick={closeMobileMenu}
            >
              FAQ
            </a>
            <button
              onClick={() => handleNavigation("/contact-us")}
              className="px-6 py-3 text-left text-tpGrey hover:text-cream hover:bg-tpGrey/10 transition-colors"
            >
              Contact Us
            </button>
            <div className="px-6 py-3">
              <button
                className="btn w-full justify-center"
                onClick={closeMobileMenu}
              >
                Get Started
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
