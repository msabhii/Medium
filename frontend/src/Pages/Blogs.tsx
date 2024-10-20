import { Appbar, BlogCard } from "../Components";
import { useBlogs } from "../hooks";

//!-----------------------------------imports------------------------------------------------

export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return <div>Loading.....</div>;
  }
  return (
    <>
      <Appbar />
      <div className="flex justify-center ">
        <div className="max-w-xl">
          {blogs.map((blog) => (
            <BlogCard
              authorName={blog.author.name || "Anonymous user"}
              title={blog.title}
              content={blog.content}
              publishedDate={"31 March 2024"}
            />
          ))}
          {/* <BlogCard
            authorName={"mscode"}
            title={
              "How an Ugly Single-Page Website Makes $5,000 a Month with Affiliate Marketing."
            }
            content={
              "No need to create a fancy and modern website with hundreds of pages to make money online. -Manking money online is the dream for man who has very low income and want to be a big and rich man."
            }
            publishedDate={"31 March 2024"}
          /> */}
        </div>
      </div>
    </>
  );
};
