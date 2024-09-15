import { json } from "react-router-dom";
import toast from "react-hot-toast";

// geData
export const getBlogs = () => {
  let blogs = [];
  const storeBlogs = localStorage.getItem("blogs");
  if (storeBlogs) {
    blogs = JSON.parse(storeBlogs);
  }
  return blogs;
};

// saveData
export const saveBlog = (blog) => {
  let blogs = getBlogs();
  const isExist = blogs.find((b) => b.id === blog.id);
  if (isExist) {
    return toast.error("Already Bookmark!");
  }
  blogs.push(blog);
  localStorage.setItem("blogs", JSON.stringify(blogs));
  toast.success("Bookmark SuccesFull!");
};
// deleteData
export const deleteBlog = (id) => {
  let blogs = getBlogs();
  const remaining = blogs.filter((b) => b.id !== id);
  localStorage.setItem("blogs", JSON.stringify(remaining));
  toast.success("Remove from Bookmark!");
};
