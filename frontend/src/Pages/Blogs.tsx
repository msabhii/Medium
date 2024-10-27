import { Appbar, BlogCard, BlogSkeleton } from "../Components";
import { useBlogs } from "../hooks";

//!-----------------------------------imports------------------------------------------------

export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return (
      <div>
        <Appbar />
        <div className="flex justify-center">
          <div className="">
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <Appbar />
      <div className="flex justify-center ">
        <div className="max-w-xl">
          {blogs.map((blog, i) => (
            <BlogCard
              key={i}
              id={blog.id}
              authorName={blog.author.name || "Anonymous user"}
              title={blog.title}
              content={blog.content}
              publishedDate={"31 March 2024"}
            />
          ))}
        </div>
      </div>
    </>
  );
};
