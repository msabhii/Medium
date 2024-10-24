import { BACKEND_URL } from "./../config";
import axios from "axios";
import { useEffect, useState } from "react";

export interface Blog {
  title: string;
  content: string;
  id: number;
  author: { name: string };
}

export const useBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog>();
  useEffect(() => {
    try {
      axios
        .get(`${BACKEND_URL}/api/v1/blog/${id}`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          setBlog(response.data.id);
          setLoading(false);
        });
    } catch (error) {
      console.log("Error while fetching blog with ID", error);
    }
  }, [id]);
  return {
    loading,
    blog,
  };
};

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    try {
      axios
        .get(`${BACKEND_URL}/api/v1/blog/bulk`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          setBlogs(response.data.blogs);
          setLoading(false);
        });
    } catch (error) {
      console.log("Error while fetching the blogs", error);
    }
  }, []);

  return {
    loading,
    blogs,
  };
};
