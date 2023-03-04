import React from 'react';
import Typewriter from 'typewriter-effect';
import portfolioImg from '../../../assets/profile.png';
import {FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaGithub} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <header className='flex justify-between items-center md:flex-row md:gap-0 gap-y-10 flex-col-reverse md:pt-12'>
            <div className="w-full flex flex-row-reverse justify-evenly gap-10 mx-auto">
                <div className='w-[480px]'>
                    <h2 className='text-2xl'>Hello THERE !</h2>
                    <h2 className=' text-4xl md:text-5xl  my-5' >I am</h2>
                    <div className='text-purple-600'>
                        <TypeAnimation
                            sequence={[
                                'RAKIBUL ISLAM', // Types 'One'
                                1000, // Waits 1s
                                'a Full-Stack Web Developer', // Deletes 'One' and types 'Two'
                                2000,
                                () => {
                                // console.log('Done typing!'); // Place optional callbacks anywhere in the array
                                }
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '1.8rem'}}
                            />
                    </div>
                    <div className='mt-16'>
                        {/* <p className='mb-10'>Web Application Developer(MERN)</p> */}
                        {/* <Link to='/portfolio'><button className='btn btn-secondary mr-5'>PORTFOLIO</button></Link> */}
                        <a href="https://drive.google.com/u/0/uc?id=1KBeOC-FdwRjgRpMK_MLS7cPeGZkY4Dys&export=download" download className='px-8 py-3 bg-gradient-to-r from-indigo-800 via-purple-500 to-pink-500 font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800' >
                            <span className='dark:text-white '>DOWNLOAD RESUMI</span>
                        </a>
                    </div>
                </div>
                <div className=''>
                    <Link to="https://github.com/1Md-Rakibul-Islam" target="_blank" rel="noopener noreferrer">
                        <FaGithub className='text-4xl text-purple-400 mb-2 border border-purple-400 rounded-md p-1 hover:border-blue-600'></FaGithub>
                    </Link>

                    <Link to="https://www.linkedin.com/in/1md-rakibul-islam" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className='text-4xl text-purple-400 mb-2 border border-purple-400 rounded-md p-1 hover:border-blue-600'>
                        </FaLinkedin>
                    </Link>

                    <Link to="https://facebook.com/profaile.rakibul.islam" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className='text-4xl text-purple-400 mb-2 border border-purple-400 rounded-md p-1 hover:border-blue-600'></FaFacebook>
                    </Link>

                    <Link to="https://twitter.com/MrRakib17184590">
                        <FaTwitter className='text-4xl text-purple-400 mb-2 border border-purple-400 rounded-md p-1 hover:border-blue-600'></FaTwitter>
                    </Link>
                </div>
            </div>
            <div className="w-[260px] h-[260px] md:w-full md:h-full overflow-hidden bg-gradient-to-r from-indigo-800 via-purple-500 to-pink-500 flex justify-center rounded-full md:rounded-l-full md:rounded-r-none ml-8 -mt-10 md:mx-0">
                <img className='w-[260px] md:md:w-2/3 md:rounded-none rounded-full' src={portfolioImg} alt="" />
                {/* <img className='w-[300px] md:w-2/3' src={portfolioImg} alt="" /> */}
            </div>
        </header>
    );
};

export default Banner;