import { signUpInput } from "@mscode07/mscodeblog";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import { ButtonComponent } from "./ButtonComponent";
import { LableInput } from "./LableInput";

export const AuthComponent = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInput, setPostInput] = useState<signUpInput>({
    name: "",
    username: "",
    password: "",
  });

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        postInput
      );

      const jwt = response.data.jwt;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (e) {
      alert("Error while signing up");
    }
  }

  return (
    <>
      <div className="h-screen flex items-center justify-center bg-slate-300">
        <div className="text-center font-bold text-4xl bg-slate-200 py-24 px-10 rounded-lg shadow-lg">
          {type === "signin" ? "Login to Account" : "Create an Account"}

          <div className="flex font-extralight text-slate-400 text-xl justify-center mt-2 px-16">
            {type === "signin"
              ? "Don't have an account?"
              : "Already have an account?"}
            <Link
              className="cursor-pointer underline pl-2"
              to={type === "signin" ? "/signup" : "/signin"}
            >
              {type === "signin" ? "Sign Up" : "Sign In"}
            </Link>
          </div>
          {type === "signup" ? (
            <LableInput
              lable="Name"
              placeholder="Enter Your Name"
              onChange={(e) => {
                setPostInput({ ...postInput, name: e.target.value });
              }}
            />
          ) : (
            ""
          )}
          <LableInput
            lable="Username"
            placeholder="Enter Your Username"
            onChange={(e) => {
              setPostInput((c) => ({
                ...c,
                username: e.target.value,
              }));
            }}
          />
          <LableInput
            lable="Password"
            placeholder="Enter Your Password"
            type={"password"}
            onChange={(e) => {
              setPostInput((c) => ({
                ...c,
                password: e.target.value,
              }));
            }}
          />
          <ButtonComponent type={type} onClick={sendRequest} />
        </div>
      </div>
    </>
  );
};
