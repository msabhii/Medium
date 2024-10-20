import { Avatar } from "./Avatar";
//!-----------------------------------imports------------------------------------------------

export const Appbar = () => {
  return (
    <div>
      <div className="border-b flex justify-between px-10 py-3">
        <div>Medium</div>
        <div className=" flex justify-end gap-4">
          <div className="bg-green-600 text-slate-100 rounded-2xl px-3">
            Publish
          </div>
          <div className="">
            <Avatar name={"mscode"} size={8} />
          </div>
        </div>
      </div>
    </div>
  );
};
