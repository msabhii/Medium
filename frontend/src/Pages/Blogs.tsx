import { BlogCard } from "../Components";
export const Blogs = () => {
  return (
    <div className="flex justify-center ">
      <div className="max-w-xl">
        <BlogCard
          authorName={"mscode"}
          title={
            "How an Ugly Single-Page Website Makes $5,000 a Month with Affiliate Marketing."
          }
          content={
            "No need to create a fancy and modern website with hundreds of pages to make money online. -Manking money online is the dream for man who has very low income and want to be a big and rich man."
          }
          publishedDate={"31 March 2024"}
        />
        <BlogCard
          authorName={"mscode"}
          title={
            "How an Ugly Single-Page Website Makes $5,000 a Month with Affiliate Marketing."
          }
          content={
            "No need to create a fancy and modern website with hundreds of pages to make money online. -Manking money online is the dream for man who has very low income and want to be a big and rich man."
          }
          publishedDate={"31 March 2024"}
        />
        <BlogCard
          authorName={"mscode"}
          title={
            "How an Ugly Single-Page Website Makes $5,000 a Month with Affiliate Marketing."
          }
          content={
            "No need to create a fancy and modern website with hundreds of pages to make money online. -Manking money online is the dream for man who has very low income and want to be a big and rich man."
          }
          publishedDate={"31 March 2024"}
        />
      </div>
    </div>
  );
};
