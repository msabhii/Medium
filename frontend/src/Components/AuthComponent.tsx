import { signUpInput } from "@mscode07/mscodeblog";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LableInput } from "./LableInput";
import { ButtonComponent } from "./ButtonComponent";

export const AuthComponent = ({ type }: { type: "signup" | "signin" }) => {
  const [postInput, setPostInput] = useState<signUpInput>({
    name: "",
    username: "",
    password: "",
  });

  return (
    <>
      <div className="h-screen flex items-center justify-center bg-slate-300">
        <div className="text-center font-bold text-4xl bg-slate-200 py-24 px-10 rounded-lg shadow-lg">
          Create an account
          <div className="flex font-extralight text-slate-400 text-xl justify-center mt-2 px-16">
            {type === "signin"
              ? "Don't have an account?"
              : "Already have an account?"}
            <Link
              className="cursor-pointer underline pl-2"
              to={type === "signin" ? "./signup" : "./signin"}
            >
              {type === "signin" ? "Sign Up" : "Sign In"}
            </Link>
          </div>
          <LableInput
            lable="Name"
            placeholder="Enter Your Name"
            onChange={(e) => {
              setPostInput((c) => ({
                ...c,
                name: e.target.value,
              }));
            }}
          />
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
          <ButtonComponent type={type} />
        </div>
      </div>
    </>
  );
};
