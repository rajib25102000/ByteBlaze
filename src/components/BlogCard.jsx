import { Link } from "react-router-dom";
import pleacholderImg from "../assets/404.jpg";
import { MdDeleteForever } from "react-icons/md";

const BlogCard = ({ blog, deleteAble, handleDelete }) => {
  const { cover_image, id, title, description, published_at } = blog;

  return (
    <div className="flex relative">
      <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline  rounded border-2 border-primary hover:border-secondary hover:scale-105 transition border-opacity-30 bg-gray-900">
        <Link to={`/blog/${id}`}>
          <img
            role="presentation"
            className="object-cover w-full rounded h-44 bg-gray-500"
            src={cover_image || pleacholderImg}
          />
          <div className="p-6 space-y-2">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
              {title}
            </h3>
            <span className="text-xs text-gray-400">
              {new Date(published_at).toLocaleDateString()}
            </span>
            <p>{description}</p>
          </div>
        </Link>
      </div>
      {deleteAble && (
        <div
          onClick={() => handleDelete(id)}
          className="text-zinc-950  absolute rounded-full -right-0 -top-5 p-3 hover:p-4 bg-lime-700 cursor-pointer"
        >
          <MdDeleteForever size={25} className="" />
        </div>
      )}
    </div>
  );
};

export default BlogCard;
