import { useEffect, useState } from "react";
import { getBlogs } from "../utils";
import BlogCard from "../components/BlogCard";
import { deleteBlog } from "../utils";
import Emty from "../components/Emty";

const BookMarks = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    // const getSotoreBlog = getBlogs();
    setBlogs(getBlogs());
  }, []);
  const handleDelete=(id)=>{
    deleteBlog(id);
    // const getSotoreBlog = getBlogs();
    setBlogs(getBlogs());
  };
 if( blogs.length<1){
   return <Emty></Emty>
 }
  return (
    <div  className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3  text-white justify-center px-4 sm:px-8 lg:px-16 py-4">
      {blogs.map((blog) => (
        <BlogCard handleDelete={handleDelete} deleteAble={true} blog={blog} key={blog.id}></BlogCard>
      ))}
    </div>
  );
};

export default BookMarks;
