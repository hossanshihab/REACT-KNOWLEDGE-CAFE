import { useState } from "react";
import { useEffect } from "react";

const Blogs = () => {

  const [blogs, setBlogs] = useState ([]);

  //Fetch Blogs Json all data
  useEffect(() => {
    fetch("blogs.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);
  return <div className="md:w-2/3">
        <h1 className="text-3xl">Blogs: 
        {blogs.length}</h1>
  </div>;
};

export default Blogs;
