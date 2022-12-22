import React, { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://portfolio-1md-rakibul-islam.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <section className="my-10">
      <h2 className="text-4xl text-center my-10 text-purple-500">Blogs</h2>
      <h1 className="text-center text-4xl">{blogs.length > 0 ? "" : "Comming Soon..."}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs?.map((blog) => (
          <Blog key={blog._id} blog={blog}></Blog>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
