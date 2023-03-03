import React from 'react';
import Typewriter from 'typewriter-effect';
import portfolioImg from '../../../assets/portfolio-img-hd.png';
import {FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaGithub} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <header className='flex justify-between items-center md:flex-row flex-col-reverse'>
            <div className="hero-content w-full flex flex-row-reverse justify-evenly">
                <div className=''>
                    <h2 className='text-lg'>HEY THERE !</h2>
                    <p className='text-5xl  my-7'>I AM
                        <span className='text-purple-600'>
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString('RAKIBUL ISLAM')
                                    .callFunction(() => {
                                        console.log('String typed out!');
                                    })
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .callFunction(() => {
                                        console.log('All strings were deleted');
                                    })
                                    .start()
                                }}
                            ></Typewriter>
                        </span>
                    </p>
                    <p className='mb-10'>Web Application Developer(MERN)</p>
                    <Link to='/portfolio'><button className='btn btn-secondary mr-5'>PORTFOLIO</button></Link>
                    <a href="https://drive.google.com/u/0/uc?id=1KBeOC-FdwRjgRpMK_MLS7cPeGZkY4Dys&export=download" download className='btn btn-outline btn-primary' >
                        DOWNLOAD RESUMI
                    </a>
                </div>
                <div className=''>
                    <a href="https://github.com/1Md-Rakibul-Islam" target="_blank" rel="noopener noreferrer">
                        <FaGithub className='text-4xl text-purple-400 mb-2 border border-purple-400 rounded-md p-1 hover:border-blue-600'></FaGithub>
                    </a>

                    <a href="https://www.linkedin.com/in/1md-rakibul-islam" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className='text-4xl text-purple-400 mb-2 border border-purple-400 rounded-md p-1 hover:border-blue-600'>
                        </FaLinkedin>
                    </a>

                    <a href="https://facebook.com/profaile.rakibul.islam" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className='text-4xl text-purple-400 mb-2 border border-purple-400 rounded-md p-1 hover:border-blue-600'></FaFacebook>
                    </a>

                    <a href="https://twitter.com/MrRakib17184590">
                        <FaTwitter className='text-4xl text-purple-400 mb-2 border border-purple-400 rounded-md p-1 hover:border-blue-600'></FaTwitter>
                    </a>
                </div>
            </div>
            <div className="hero-img w-full overflow-hidden bg-gradient-to-r from-indigo-800 via-purple-500 to-pink-500 flex justify-center rounded-l-full ml-8 md:mx-0">
                <img className='w-full md:w-2/3' src={portfolioImg} alt="" />
            </div>
        </header>
    );
};

export default Banner;