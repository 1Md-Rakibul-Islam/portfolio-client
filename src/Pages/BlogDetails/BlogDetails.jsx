import React from "react";
import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
  const {name, publish, image, details} = useLoaderData();
  return (
		<div className="mb-40 mt-36 lg:mx-64 md:mx-48 mx-5 rounded-xl">
      <figure className="">
          <img role="presentation" className="object-cover w-full rounded-tl-xl rounded-tr-xl h-96 bg-gray-500" src={image} />
      </figure>
      <h3 className="text-4xl text-white mt-8 font-semibold group-hover:underline group-focus:underline">{name}</h3>
      <div className="py-6 space-y-2">
        <div className="flex justify-between items-center text-xl text-gray-400 mb-12">
          <span>{publish}</span>
          <span>2.1K views</span>
        </div>
        <p className="hover:cursor-pointer text-white">{details }</p>
      </div>
		</div>
  );
};

export default BlogDetails;
