import { useState } from "react";
import { useEffect } from "react";

const Blogs = () => {

  const [blogs, setBlogs] = useState ([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);
  return <div>Blogs</div>;
};

export default Blogs;
