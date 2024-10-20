export const Avatar = ({ name, size = 2 }: { name: string; size?: number }) => {
  return (
    <>
      <div
        className={`relative inline-flex items-center justify-center w-4 h-4 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 p-3`}
      >
        <span className=" text-gray-600 dark:text-gray-300 font-extralight">
          {name[0]}
        </span>
      </div>
    </>
  );
};
