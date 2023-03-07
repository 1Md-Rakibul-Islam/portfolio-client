import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const { _id, name, publish, image, details} = blog
  return (
		<div className="bg-black rounded-xl">
      <figure>
        <img role="presentation" className="object-cover w-full rounded-tl-xl rounded-tr-xl h-56 bg-gray-500" src={image} />
      </figure>
			<div className="p-6 space-y-2">
				<h3 className="text-2xl text-yellow-50 font-semibold group-hover:underline group-focus:underline">{name}</h3>
				<span className="text-xs text-gray-400">{publish}</span>
        <Link to={`/blogs/details/${_id}`}>
				  <p className="mt-5 hover:cursor-pointer text-white">{ details.length > 100 ? details.slice(0, 200) + ".......See More" : details }</p>
        </Link>
        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
            <span>2.1K views</span>
            <Link to={`/blogs/details/${_id}`}>
              <button>Details</button>
            </Link>
				</div>
			</div>
		</div>
  );
};

export default Blog;
