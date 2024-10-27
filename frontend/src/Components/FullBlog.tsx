// import { Blog } from "../hooks";

import { Avatar } from "./Avatar";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  //publishedDate: string;
  //id: number;
  // authorAvatar:?
}
export const FullBlog = ({
  //id,
  authorName,
  title,
  content,
}: // publishedDate,
BlogCardProps) => {
  return (
    <div>
      <div className="grid grid-cols-12 px-6 mt-10 shadow-lg">
        <div className="col-span-8 px-5 py-6">
          <div className="text-3xl font-extrabold">{title}</div>
          <div className="text-slate-400 mt-4">Posted on 2nd Dec</div>
          <div className="text-slate-600 mt-2">{content}</div>
        </div>
        <div className="gap-4 col-span-4 px-5 py-8">
          <div className="text-slate-500">Author</div>
          <div className="flex mt-4 gap-4 items-center">
            <div className="text-center">
              <Avatar name={authorName || "Anonymous"} />
            </div>

            <div>
              <div className="text-xl text-slate-600">
                {authorName || "Anonymous"}
              </div>
              <div className="text-xs text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
``;
