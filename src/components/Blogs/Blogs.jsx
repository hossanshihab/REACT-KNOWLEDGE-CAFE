import { useState } from "react";
import { useEffect } from "react";
import Blog from './../Blog/Blog';

const Blogs = ({handleaddToBookamarks, handleMarkReaded}) => {

  const [blogs, setBlogs] = useState ([]);

  //Fetch Blogs Json all data
  useEffect(() => {
    fetch("blogs.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);
  return <div className="md:w-2/3">
        <h1 className="text-3xl p-5">Blogs: 
        {blogs.length}</h1>

        {
            blogs.map(blog => <Blog 
                key={blog.id} 
                handleaddToBookamarks={handleaddToBookamarks}
                handleMarkReaded={handleMarkReaded}
                blog={blog}></Blog>)
        }
  </div>;
};

export default Blogs;
