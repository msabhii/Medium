import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { FullBlog } from "../Components/FullBlog";

//? use recoil
export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || "" });
   console.log("Blog fetched:", blog);
  if (loading) {
    return <div>Loading....</div>;
  }

  if (!blog) {
    return <div>No blog found</div>; // You can show an error or a fallback message
  }
  return (
    <div>
      <FullBlog
        authorName={blog.author.name}
        title={blog.title}
        content={blog.content}
      />
    </div>
  );
};
