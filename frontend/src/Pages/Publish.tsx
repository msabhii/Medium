import axios from "axios";
import { Appbar } from "../Components";
import { BACKEND_URL } from "./../config";
import { TextEditor } from "../Components/TextEditor";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const nevigate = useNavigate();
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="max-w-screen-lg w-full py-5 px-6">
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            id="helper-text"
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Title"
          ></input>
          <TextEditor
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <button
            onClick={async () => {
              try {
                const res = await axios.post(
                  `${BACKEND_URL}/api/v1/blog`,
                  {
                    title,
                    content: description,
                  },
                  {
                    headers: {
                      Authorization: localStorage.getItem("token"),
                    },
                  }
                );
                nevigate(`/blog/${res.data.id}`);
              } catch (error) {
                console.log("Error in Publishing blog", error);
              }
            }}
            type="submit"
            className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
          >
            Publish Post
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};
