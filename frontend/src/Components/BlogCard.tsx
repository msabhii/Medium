import { Avatar } from "./Avatar";
import { BlogTopic } from "./BlogTopic";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { CiCircleMinus } from "react-icons/ci";
import { IoIosMore } from "react-icons/io";
import { Link } from "react-router-dom";
//!-----------------------------------imports------------------------------------------------
interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: number;
  // authorAvatar:?
}
export const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <div className="border-b border-slate-200 pb-4 mt-5 w-screen max-w-screen-md">
      <div className="flex items-center m-2 gap-2 ">
        <div className="text-xs cursor-pointer">
          <Avatar name={authorName} size={4} />
        </div>
        <div className="cursor-pointer">{authorName}</div>.
        <div className="text-gray-400">{publishedDate}</div>
      </div>
      <div className="m-3">
        <Link to={`/blog/${id}`}>
          <div className="font-extrabold text-3xl cursor-pointer">{title}</div>
        </Link>
        <div className="font-semibold text-slate-500 mt-4">
          {content.slice(0, 100) + " ..."}
        </div>
        <div className="flex mt-4 items-center gap-4">
          <BlogTopic topic={"Business"} />

          <div className="text-slate-400">{`${Math.ceil(
            content.length / 100
          )}minutes (s) read`}</div>
          <div className="flex gap-3 ml-48 cursor-pointer">
            <MdOutlineBookmarkAdd />
            <CiCircleMinus />
            <IoIosMore />
          </div>
        </div>
      </div>
    </div>
  );
};
