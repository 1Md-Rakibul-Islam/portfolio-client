import React from "react";
import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaEye, FaGithub } from 'react-icons/fa';
import toast, { Toaster } from "react-hot-toast";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ProjectDetails = () => {
    // "_id": 1,
    // "image": ["https://i.ibb.co/qrqS34d/sokher-furniture-home.png", "https://i.ibb.co/yWyShCc/sokher-furniture-my-order.png", "https://i.ibb.co/bz574NQ/sokher-furniture-admin-all-sellers.png", "https://i.ibb.co/w0xF010/sokher-furniture-admin-report-items.png"],
    // "title": "Sokher Furnuture",
    // "subject": "Website for buying and selling old furniture",
    // "description": "Dashboard Panel. Individual Buyer, Seller and Admin role. Advertising Product, Assign by category, Payment Gateway",
    // "technologies": "React.js, Tailwind CSS, Daisy UI, MongoDB, Express JS, MongoDB(CRUD), Firebase Auth",
    // "gitHubClient": "https://github.com/1Md-Rakibul-Islam/sokher-furniture-client-side",
    // "gitHubServer": "https://github.com/1Md-Rakibul-Islam/sokher-furniture-server-side",
    // "liveLink": "https://thriving-douhua-c016e0.netlify.app/"

  const { _id, title, publish, subject, image, description, technologies, gitHubClient, gitHubServer, liveLink } = useLoaderData();

  return (
    <div className="mx-auto">
      <h2 className="text-center text-purple-500 my-5 text-4xl">Project Details</h2>
      <div className="hero my-10 bg-base-200 rounded-md">
        <div className="hero-content flex flex-col justify-between items-start lg:flex-row">
          <div className="">
            <div className="card grid md:grid-cols-2 grid-cols-1 lg:card-side shadow-xxl">
              {/* <figure className="w-auto h-72"> */}
                {/* <img className="" src={image[0]} alt="image" /> */}
                <Carousel>
                  <div className="w-auto h-72">
                      <img className="" src={image[0]} />
                  </div>
                  <div className="w-auto h-72">
                      <img className="" src={image[1]} />
                  </div>
                  <div className="w-auto h-72">
                      <img className="" src={image[2]} />
                  </div>
                </Carousel>
              {/* </figure> */}
              <div className="card-body relative">
                <h2 className="text-3xl text-primary">{title}</h2>
                <span className="badge badge-warning font-bold ">{subject}</span>
                <span className="font-bold mt-2">Publish: {publish}</span>
                <br />
                {description}
                <div className='flex text-1xl gap-5 my-5'>
                    <FaGithub className=' text-3xl text-purple-400 mb-2 border border-purple-400 rounded-full p-1 hover:border-blue-600'></FaGithub>
                    {
                        gitHubClient && 
                        <a href={gitHubClient} target='blank'><span className='underline text-purple-600'>Client</span></a>
                    }
                    {
                        gitHubServer &&
                        <a href={gitHubServer} target='blank'><span className='underline text-purple-600'>Server</span></a>
                    }
                </div>
                <div className="flex md:absolute bottom-0 justify-between items-end">
                  <p>Technologies: {technologies}</p>
                  <a className="btn btn-primary btn-outline btn-md text-black" href={liveLink} target='blank'><FaEye className='text-2xl text-primary mr-2'></FaEye>Live</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
