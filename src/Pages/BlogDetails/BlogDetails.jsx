import React from "react";
import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
  const {name, publish, image, details} = useLoaderData();
  return (
		<div className="min-h-screen mb-40 lg:mx-80 md:mx-64 mx-5 rounded-xl">
            <h3 className="text-4xl text-white mt-36 mb-20 text-center font-semibold group-hover:underline group-focus:underline">{name}</h3>
            <figure>
                <img role="presentation" className="object-cover w-full rounded-tl-xl rounded-tr-xl h-96 bg-gray-500" src={image} />
            </figure>
            <div className="p-6 space-y-2">
                    <span className="text-xs text-gray-400">{publish}</span>
                    <p className="hover:cursor-pointer text-white">{details }</p>
            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                <span>2.1K views</span>
                <span>Details</span>
            </div>
            </div>
		</div>
  );
};

export default BlogDetails;
