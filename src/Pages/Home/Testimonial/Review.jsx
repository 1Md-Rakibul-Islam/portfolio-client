import React from 'react';

const Review = ({review}) => {
    const {name, email, positon, photo, comment} = review;

    return (
        <section className="max-w-2xl mx-auto my-6 border border-blue-700  rounded-xl">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-90">
                <p className="relative sm:h-56 px-6 py-1 text-lg italic text-center text-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-sky-400">
                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                    </svg>
                    {comment}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-sky-400">
                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                    </svg>
                </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg md:border-b md:border-gray-200/30 md:bg-white/20 navmorphism md:backdrop-blur-xl text-gray-900">
                <div >
                    <img src={photo} alt="" className="w-28 h-28 rounded-full bg-gray-500" />
                </div>
                <div className='mt-5'>
                    <p className="text-xl text-white font-semibold leading-tight">{name}</p>
                    <p className="text-sm text-slate-200 capitalize">{positon}</p>
                </div>
            </div>
        </section>
    
    );
};

export default Review;