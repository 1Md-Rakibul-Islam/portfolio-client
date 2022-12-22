import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer footer-center rounded-tl-full p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <a className="link link-hover">Blogs</a>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Protfolio</a>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a href="https://github.com/1Md-Rakibul-Islam" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-4xl text-purple-400 mb-2 p-1 hover:border-blue-600"></FaGithub>
          </a>

          <a href="https://www.linkedin.com/in/1md-rakibul-islam" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-4xl text-purple-400 mb-2 p-1 hover:border-blue-600"></FaLinkedin>
          </a>

          <a href="https://facebook.com/profaile.rakibul.islam" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-4xl text-purple-400 mb-2 p-1 hover:border-blue-600"></FaFacebook>
          </a>

          <a href="https://twitter.com/MrRakib17184590">
            <FaTwitter className="text-4xl text-purple-400 mb-2 p-1 hover:border-blue-600"></FaTwitter>
          </a>
        </div>
      </div>
      <div>
      <h2 className="text-center text-4xl text-secondary font-sans">Rakibul Islam</h2>
        <p>Copyright © 2022 - All right reserved by Rakibul Islam</p>
      </div>
    </footer>
  );
};

export default Footer;
