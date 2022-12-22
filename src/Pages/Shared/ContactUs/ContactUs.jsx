import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import emailjs from '@emailjs/browser';
import { FaHome, FaPhoneSquare, FaRegEnvelope } from "react-icons/fa";

const ContactUs = () => {
  const navigate = useNavigate();


    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_Template_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
            toast.success('Email send successfully');
            console.log(result.text);
            navigate('/')
      }, (error) => {
          console.log(error.text);
      });
    }

  return (
    <div className="">
    <h1 className="text-4xl text-center font-bold my-10 text-purple-500">Contact Us</h1>
    <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse gap-20 lg:justify-around">
            <div className="text-center lg:text-left">
                <div className="flex hover:translate-x-2 items-center">
                    <FaHome className="text-4xl text-purple-400 mb-2 border border-purple-400 rounded-md p-1 hover:border-blue-600"></FaHome>
                    <p className="py-6 hover:text-purple-500 ml-5">Natore, Bangladesh</p>
                </div>
                <div className="flex hover:translate-x-2 items-center">
                    <FaPhoneSquare className="text-4xl text-purple-400 mb-2 border border-purple-400 rounded-md p-1 hover:border-blue-600"></FaPhoneSquare>
                    <p className="py-6 hover:text-purple-500 ml-5">+8801798661806</p>
                </div>
                <div className="flex hover:translate-x-2 items-center">
                    <FaRegEnvelope className="text-4xl text-purple-400 mb-2 border border-purple-400 rounded-md p-1 hover:border-blue-600"></FaRegEnvelope>
                    <p className="py-6 hover:text-purple-500 ml-5">rakibul9bd@gmail.com</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-full max-w-xxl shadow-2xl bg-base-100">
            <form ref={form} onSubmit={sendEmail} className="card-body">
                <div className="form-control">
                    <label className="label">
                    <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" required placeholder="name" className="input input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                    <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" required placeholder="Your email" className="input input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Message</span>
                    </label>
                    <textarea name="message" required className="h-32 textarea textarea-bordered " placeholder="Write a message!!!"></textarea>
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
            </div>
        </div>
    </div>
    </div>
  );
}

export default ContactUs;

// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// export const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };
