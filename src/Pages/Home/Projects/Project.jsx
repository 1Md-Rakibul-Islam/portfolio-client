import React from 'react';
import {Link} from 'react-router-dom';
import { FaEye, FaGithub } from 'react-icons/fa';

const Project = ({project}) => {
    const {_id, image, title, subject, description, technologies, gitHubClient, gitHubServer, liveLink} = project;
    // "image": ["https://ibb.co/44Xrdrf", "https://ibb.co/rbPZCk1", "https://ibb.co/Jtmxk2w", "https://ibb.co/gRJv41M"],

    // console.log(image);

    return (
        <div className="card hover:-translate-y-3 hover:border-purple-600 rounded-md bg-base-100 shadow-2xl">
        <figure className='w-auto max-h-60 overflow-y-scroll'>
            <img className='' src={image[0]} alt="project" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{title} <a href={liveLink} target='blank'><FaEye className='text-2xl text-purple-600'></FaEye></a></h2>
            <p><span className='font-bold'>Technologies:</span> {technologies}</p>
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
    );
};

export default Project;