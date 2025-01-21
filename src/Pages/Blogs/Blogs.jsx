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
      const { data } = await axios.get(
        "https://portfolio-rakibul-islam.vercel.app/blogs"
      );
      //   const { data } = await axios.get("https://portfolio-1md-rakibul-islam.vercel.app/blogs"); //not creted the collection
      return data;
    },
  });

  if (isLoading) {
    return <CardLoading />;
  }

  return (
    <section className="section-py min-h-screen">
      <div className="container">
        <h1 className="text-center text-4xl">
          {blogs?.length > 0 ? "" : "Comming Soon..."}
        </h1>
        <h2 className="text-4xl text-center mb-10 mx-auto text-purple-600">
          My Blogs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs?.map((blog) => (
            <Blog key={blog._id} blog={blog}></Blog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
