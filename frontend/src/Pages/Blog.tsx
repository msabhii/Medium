import { useParams } from "react-router-dom";
import { Appbar, BlogSkeleton, FullBlog } from "../Components";
import { useBlog } from "../hooks";

//? use recoil
export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || "" });
  console.log("Blog fetched:", blog);
  if (loading) {
    return (
      <div>
        <Appbar />
        <div className="flex justify-center">
          <div className="">
            <BlogSkeleton />
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return <div>No blog found</div>;
  }
  return (
    <div>
      <Appbar />
      <div className="">
        <FullBlog
          authorName={blog.author.name}
          title={blog.title}
          content={blog.content}
        />
      </div>
    </div>
  );
};
