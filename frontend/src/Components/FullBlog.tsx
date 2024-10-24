// import { Blog } from "../hooks";
import { Appbar } from "./Appbar";

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
      <Appbar />
      <div className="grid grid-cols-12">
        <div className="col-span-8">
          <div className="text-3xl font-extrabold">{title}</div>
          <div className="">{content}</div>
        </div>
        <div className="col-span-4">{authorName || "Anonymous"}</div>
      </div>
    </div>
  );
};
``;
