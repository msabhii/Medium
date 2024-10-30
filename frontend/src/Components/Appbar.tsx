import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";
//!-----------------------------------imports------------------------------------------------

export const Appbar = () => {
  return (
    <div>
      <div className="border-b flex justify-between px-10 py-3">
        <Link to={"/"}>
          <div className="font-bold text-xl font-playfair">Medium</div>
        </Link>

        <div className=" flex justify-end gap-4 items-center">
          <Link to={"/publish"}>
            <button
              type="button"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Publish
            </button>
          </Link>
          <div className="cursor-pointer mb-3">
            <Avatar name={"mscode"} size={8} />
          </div>
        </div>
      </div>
    </div>
  );
};
