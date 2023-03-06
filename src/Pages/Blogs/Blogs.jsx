import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CardLoading from "../../Components/Loadings/CardLoading/CardLoading";
import Blog from "./Blog";

const Blogs = () => {

  const {
    data: blogs,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:5000/blogs");
    //   const { data } = await axios.get("https://portfolio-1md-rakibul-islam.vercel.app/blogs"); //not creted the collection
      return data;
    },
  });

  if (isLoading) {
    return <CardLoading/>
  }

  return (
    <section className="min-h-screen my-10 md:mx-20 mx-5">
      <h1 className="text-center mt-40 text-4xl">{blogs?.length > 0 ? "" : "Comming Soon..."}</h1>
			<h2 className="text-3xl mb-16 text-center font-bold">Wellcome to my blogs page</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs?.map((blog) => (
          <Blog key={blog._id} blog={blog}></Blog>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
