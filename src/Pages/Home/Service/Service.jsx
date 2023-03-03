import React from 'react';
import { FaPhone } from 'react-icons/fa';

const Service = ({service}) => {
    const { icon, title, experience} = service;
    return (
        <div className="flex flex-col justify-center items-center text-center rounded-md hover:shadow-2xl dark:bg-gray-900 dark:text-gray-100 p-6">
            <img src={icon} alt="" className="w-[80px]" />
            <div className="">
                <h2 className="text-3xl font-semibold mt-5 mb-10 tracking-wide">{title}</h2>
                <p className="dark:text-gray-400">{experience}</p>
            </div>
        </div>
    );
};

export default Service;