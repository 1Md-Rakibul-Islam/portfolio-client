import React from "react";

const Blog = ({ blog }) => {
  const {name, publish, image, details} = blog
  return (
		<div className="bg-black rounded-xl">
      <figure>
        <img role="presentation" className="object-cover w-full rounded-tl-xl rounded-tr-xl h-56 bg-gray-500" src={image} />
      </figure>
			<div className="p-6 space-y-2">
				<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{name}</h3>
				<span className="text-xs text-gray-400">{publish}</span>
				<p className="hover:cursor-pointer">{ details.length > 100 ? details.slice(0, 200) + ".......See More" : details }</p>
        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
            <span>2.1K views</span>
            <span>Details</span>
				</div>
			</div>
		</div>
    // <div className="card w-96 bg-base-100 shadow-xl">
    //   <div className="card-body">
    //     <h2 className="card-title">Shoes!</h2>
    //     <p>If a dog chews shoes whose shoes does he choose?</p>
    //   </div>
    //   <figure>
    //     <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
    //   </figure>
    // </div>
  );
};

export default Blog;
