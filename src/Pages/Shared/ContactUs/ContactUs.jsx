import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import emailjs from '@emailjs/browser';
import { FaHome, FaPhoneSquare, FaRegEnvelope } from "react-icons/fa";

const ContactUs = () => {
  const navigate = useNavigate();

//   console.log(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_Template_ID, import.meta.env.VITE_PUBLIC_KEY);

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_Template_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
            toast.success('Email send successfully');
            // console.log(result.text);
            navigate('/')
      }, (error) => {
          console.log(error.text);
      });
    }

  return (
    <div className="mt-40">
    <h1 className="text-4xl text-center font-bold my-10 text-purple-600">GET IN TOUCH</h1>
    <div className="lg:mx-40 md:mx-20 mx-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            <div className="flex flex-col p-4 gap-3 items-center rounded-lg shadow-black shadow-2xl  border-purple-600">
                <FaHome className="text-4xl text-purple-400  border border-purple-400 rounded-md p-1 hover:border-blue-600"></FaHome>
                <h4>Address</h4>
                <p className=" text-slate-300">Natore, Bangladesh</p>
            </div>
            <div className="flex flex-col p-4 gap-3 items-center rounded-lg shadow-black shadow-2xl  border-purple-600">
                <FaPhoneSquare className="text-4xl text-purple-400 border border-purple-400 rounded-md p-1 hover:border-blue-600"></FaPhoneSquare>
                <h4>Phone</h4>
                <p className=" text-slate-300">+8801798661806</p>
            </div>
            <div className="flex flex-col p-4 gap-3 items-center rounded-lg shadow-black shadow-2xl  border-purple-600">
                <FaRegEnvelope className="text-4xl text-purple-400 border border-purple-400 rounded-md p-1 hover:border-blue-600"></FaRegEnvelope>
                <h4>Eamil</h4>
                <p className=" text-slate-300">rakibul9bd@gmail.com</p>
            </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className=" my-10">
            <div className="flex md:flex-row flex-col items-center md:gap-16 gap-8">
                <div className="w-full md:w-1/2">
                    <input type="name" name="name" required placeholder="What is your name?" className="block w-full p-4 my-7 rounded-full hover:shadow-2xl focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-purple-700 dark:bg-black" />

                    <input type="email" name="email" required placeholder="Enter your email" className="block w-full p-4 my-7 rounded-full hover:shadow-2xl focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-purple-700 dark:bg-black" />

                    <input type="text" name="subject" required placeholder="Subject" className="block w-full p-4 my-7 rounded-full hover:shadow-2xl focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-purple-700 dark:bg-black" />
                </div>
                <div className="w-full md:w-1/2">
                    <textarea name="message" required rows={8} placeholder="Write a message!!!" className="block w-full p-4 rounded-3xl hover:shadow-2xl autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-purple-700 dark:bg-black" ></textarea>
                </div>
            </div>
            <div className="flex justify-center mt-5 md:mt-0 md:justify-end">
                <button type="submit" value="Send" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-lg px-5 py-2.5 mb-2 dark:bg-purple-700 dark:hover:bg-purple-800 dark:focus:ring-purple-900">Send Message</button>
            </div>
        </form>
    </div>
    </div>
  );
}

export default ContactUs;
