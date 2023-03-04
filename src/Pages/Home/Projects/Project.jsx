import React from 'react';
import {Link} from 'react-router-dom';
import { FaEye, FaGithub } from 'react-icons/fa';

const Project = ({project}) => {
    const {_id, image, title, subject, description, technologies, gitHubClient, gitHubServer, liveLink} = project;
    // "image": ["https://ibb.co/44Xrdrf", "https://ibb.co/rbPZCk1", "https://ibb.co/Jtmxk2w", "https://ibb.co/gRJv41M"],

    // console.log(image);

    return (
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <figure className="h-[500px] w-full">
                <img className="h-full w-full object-top transition-transform duration-500  group-hover:scale-125" src={image} alt="" />
            </figure>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/80 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <div className='flex flex-col justify-center items-center'>
            <h1 className=" text-2xl font-bold text-white mb-5 uppercase">{title}</h1>
            <div className='mb-16 w-20 h-1 bg-purple-700' />
            <p><span className='font-bold '>Technologies:</span> {technologies}</p>
            <div className="card-actions justify-between items-center">
                <div className='flex gap-4'>
                    <FaGithub className='text-2xl'></FaGithub>
                    {
                        gitHubClient && 
                        <a href={gitHubClient} target='blank'><span className='underline'>Client</span></a>
                    }
                    {
                        gitHubServer &&
                        <a href={gitHubServer} target='blank'><span className='underline'>Server</span></a>
                    }
                </div>
                <Link to={`/project/details/${_id}`}>
                    <button className="btn btn-primary btn-outline">Details</button>
                </Link>
            </div>
            </div>

            </div>
      </div>
    );
};

export default Project;


{/* <div className="card hover:-translate-y-3 hover:border-purple-600 rounded-md bg-base-100 shadow-2xl">
<figure className='w-auto max-h-60 overflow-y-scroll'>
    <img className='' src={image[0]} alt="project" />
</figure>
<div className="card-body">
    <h2 className="card-title">{title} <a href={liveLink} target='blank'><FaEye className='text-2xl text-purple-600'></FaEye></a></h2>

</div>
</div> */}