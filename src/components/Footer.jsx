import { useState } from "react";
import Logo from "../assets/svg/logo.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSquareInstagram,
  FaSquareYoutube,
  FaTwitter,
  FaX,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="bg-tpBlack border-t border-tpGrey">
      <div className="container-tight py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12 items-start">
          <div className="w-full md:w-1/2">
            <img src={Logo} alt="" className="w-40 mb-1" />
            <p className="text-cream text-lg leading-relaxed mb-8 max-w-md">
              Building Africa's Next Generation of Entrepreneurs
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-tpGrey/20 hover:bg-gold/20 flex items-center justify-center text-gold hover:text-gold transition-all duration-200"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-lg" />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-tpGrey/20 hover:bg-gold/20 flex items-center justify-center text-gold hover:text-gold transition-all duration-200"
                aria-label="Twitter"
              >
                <FaXTwitter className="text-lg" />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-tpGrey/20 hover:bg-gold/20 flex items-center justify-center text-gold hover:text-gold transition-all duration-200"
                aria-label="Instagram"
              >
                <FaInstagram className="text-lg" />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-tpGrey/20 hover:bg-gold/20 flex items-center justify-center text-gold hover:text-gold transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-lg" />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-tpGrey/20 hover:bg-gold/20 flex items-center justify-center text-gold hover:text-gold transition-all duration-200"
                aria-label="YouTube"
              >
                <FaYoutube className="text-lg" />
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-semibold text-cream mb-4">
              Subscribe to our newsletter
            </h3>
            <p className="text-cream mb-6 leading-relaxed">
              Get faster updates and quick important media news easily right on
              your phone
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-cream text-tpBlack placeholder:text-tpBlack/50 border-0 focus:outline-none focus:ring-2 focus:ring-gold/50"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-gold text-tpBlack font-semibold rounded-lg hover:bg-gold/90 transition-colors duration-200 cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <hr className="text-tpGrey max-w-6xl mx-auto" />

      <div className="">
        <div className="container-tight py-6">
          <p className="text-center text-tpGrey text-sm">
            Copyright © 2025 20Pounds | All Rights Reserved
          </p>
        </div>
      </div>

      <div className="h-5 md:h-9 bg-gold"></div>
    </footer>
  );
}
