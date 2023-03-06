import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";
import Logo from "../../../Components/Logo/Logo";

const Footer = () => {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
        <div className="flex justify-center gap-5">
            <Logo />
            <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <Link to={"/about"} className="mr-4 hover:underline md:mr-6 ">About</Link>
                </li>
                <li>
                    <Link to={"/blogs"} className="mr-4 hover:underline md:mr-6">Blogs</Link>
                </li>
                <li>
                    <Link to={"/Protfolio"} className="mr-4 hover:underline md:mr-6 ">Protfolio</Link>
                </li>
                <li>
                    <Link to={"/contractUs"} className="hover:underline">Contact</Link>
                </li>
            </ul>
        </div>
        <div className="flex justify-center mt-2 gap-4">
            <Link href="https://github.com/1Md-Rakibul-Islam" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-4xl text-purple-400 mb-2 p-1 hover:border-blue-600"></FaGithub>
            </Link>

            <Link href="https://www.linkedin.com/in/1md-rakibul-islam" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-4xl text-purple-400 mb-2 p-1 hover:border-blue-600"></FaLinkedin>
            </Link>

            <Link href="https://facebook.com/profaile.rakibul.islam" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-4xl text-purple-400 mb-2 p-1 hover:border-blue-600"></FaFacebook>
            </Link>

            <Link href="https://twitter.com/MrRakib17184590Link">
              <FaTwitter className="text-4xl text-purple-400 mb-2 p-1 hover:border-blue-600" rel="noopener noreferrer"></FaTwitter>
            </Link>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© <Link className="hover:underline">Rakibul Islam™</Link>. All Rights Reserved.
        </span>
    </footer>
  );
};

export default Footer;
