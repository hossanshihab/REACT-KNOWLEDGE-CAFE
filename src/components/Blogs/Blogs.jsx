import { useState } from "react";
import { useEffect } from "react";
import Blog from './../Blog/Blog';

const Blogs = ({handleaddToBookamarks}) => {

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

        {
            blogs.map(blog => <Blog 
                key={blog.id} 
                handleaddToBookamarks={handleaddToBookamarks}
                blog={blog}></Blog>)
        }
  </div>;
};

export default Blogs;
