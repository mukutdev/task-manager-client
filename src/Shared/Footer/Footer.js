import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
    const year = new Date().getFullYear();

  return (
    <footer className="bg-white">
      <div className="container mx-auto text-slate-700 py-4">
        <div className="container flex justify-between items-center">
          <p className="text-sm font-medium">Copyright &copy; Mukut {year}</p>
          <div className="flex justify-between w-24">
            <a href="https://www.facebook.com/mukutchakrabortii/" className="text-xl hover:text-gray-400">
              <BsFacebook />
            </a>
            <a href="https://www.instagram.com/mukut_dipu/" className="text-xl hover:text-gray-400">
              <BsInstagram />
            </a>
            <a href="https://www.linkedin.com/in/mukut-chakraborty/" className="text-xl hover:text-gray-400">
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
