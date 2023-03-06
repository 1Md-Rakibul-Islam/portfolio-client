import React, { useState } from "react";
import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaCheckCircle, FaEye, FaGithub } from 'react-icons/fa';
import toast, { Toaster } from "react-hot-toast";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ProjectDetails = () => {

  const { _id, title, publish, subject, image, description, technologies, gitHubClient, gitHubServer, liveLink } = useLoaderData();

  var features = description.split('.');

  var [selectImg, setSelectImg] = useState(0);


  return (
    <section className=" text-gray-100">
      <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-gray-50">{title}</h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-400">{subject}</p>
        </div>
        <div className="grid gap-5 justify-evenly items-start md:grid-cols-2 ">
          <div>
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-50">Features</h3>
            <div className="mt-5 space-y-6">
              {
                features?.map( feature => <div className="text-xl">
                 <h5><FaCheckCircle className="text-purple-700 text-2xl inline mr-3" />{feature}.</h5>
                </div>)
              }
            </div>
            <h3 className="text-2xl mt-10 font-bold tracking-tight sm:text-3xl text-gray-50">Techonologys</h3>
            <p className="mt-3 text-lg text-gray-300">{technologies}</p>
            <h3 className="text-2xl mt-10 font-bold tracking-tight sm:text-3xl text-gray-50">Publish</h3>
            <p className="text-gray-300 mt-2">Date: {publish}</p>
            <div className='flex justify-evenly items-center gap-5 md:mb-0 my-5'>
                    <>
                        {
                            gitHubClient && 
                            <a href={gitHubClient} className='flex border border-blue-700 hover:bg-black rounded-lg shadow-2xl translate-y-5 w-20 h-20 p-1 flex-col justify-center items-center' target='blank'>
                                <FaGithub className='text-2xl'></FaGithub>
                                <span className=''>Client</span>    
                            </a>
                        }
                    </>
                    <>
                        {
                            gitHubServer &&
                            <a href={gitHubServer} className='flex border border-blue-700 hover:bg-black rounded-lg shadow-2xl translate-y-5 w-20 h-20 p-1 flex-col justify-center items-center' target='blank'>
                                <FaGithub className='text-2xl'></FaGithub>
                                <span className=''>Server</span>
                            </a>
                        }
                    </>
                    <>
                        {
                            liveLink &&
                            <a href={liveLink} className='flex  border border-blue-700 hover:bg-black rounded-lg shadow-2xl translate-y-5 w-20 h-20 p-1 flex-col justify-center items-center' target='blank'>
                                <FaEye className='text-2xl'></FaEye>
                                <span className=''>Live</span>
                            </a>
                        }
                    </>
            </div>
          </div>
          <div aria-hidden="true" className="h-[580px] overflow-y-scroll">
            <img src={image[0]} alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
          </div>
        </div>
        <div className="flex gap-5 justify-center" role="group">
          {
            image?.map( (img, i) => <button type="button" 
            className="px-4  shadow-2xl rounded-full py-2 text-sm font-medium border-t border-b focus:z-10 focus:ring-2
             bg-gray-700 border-gray-600 text-white hover:text-white hover:bg-gray-600 focus:ring-blue-500 focus:text-white" 
            onClick={ () => setSelectImg(i)}>{i+1}</button>)
          }
        </div>
        <div className="-mt-10">
          <Carousel 
            autoPlay={true}
            infiniteLoop={true}
            dynamicHeight={true}
            interval={2000}
            selectedItem={selectImg}
          >
            {
              image?.map( img => <div className="w-auto h-auto">
                <img className="" src={img} />
            </div>)
            }
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;