import { ChangeEvent } from "react";

interface LablledInputType {
  lable: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}
export const LableInput = ({
  lable,
  placeholder,
  onChange,
  type,
}: LablledInputType) => {
  return (
    <div>
      <div className="mt-4">
        <label className="block text-left mb-2 text-sm font-medium text-gray-400">
          {lable}
        </label>
        <input
          onChange={onChange}
          type={type || "text"}
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
};
