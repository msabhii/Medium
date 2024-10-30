import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="bg-customBeige overflow-hidden h-screen">
      <div className="">
        <div className="grid grid-cols-12 py-5 px-10">
          <div className="font-bold text-4xl col-span-4 font-playfair ml-60">
            Medium
          </div>
          <div className="col-span-8 ">
            <div className="flex justify-end gap-5 items-center">
              <div className="cursor-pointer">Our story</div>
              <div className="cursor-pointer">Membership</div>
              <div className="cursor-pointer">Write</div>
              <div>
                <Link to={"/signup"}>Signup</Link>
              </div>
              <div className="bg-slate-900 hover:bg-black text-white px-4 rounded-2xl py-1">
                <Link to={"/signin"}>Get started</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-black"></div>
        {/* Appbar */}
        <div className="mt-40 ml-16 ">
          <div className="flex justify-center items-center ">
            <div className="w-full px-64 ">
              <div className="text-8xl font-playfair text-slate-800 font-semibold">
                Human
              </div>
              <div className="text-8xl font-playfair text-slate-800 font-semibold">
                stories & ideas
              </div>
              <div className=" text-xl text-slate-500 mt-5">
                A place to read, write and deepen your understanding
              </div>
              <div className="bg-slate-800 mt-5 font-medium text-lg hover:bg-black text-white px-8 rounded-2xl py-1 w-max">
                <Link to={"/signin"}>Start Reading</Link>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="w-112 h-112">
                <img className="" src="../../Public/bgimage.webp"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-black align-bottom mt-48"></div>
        {/* Footer */}
        <div>
          <div className="flex justify-center items-center gap-5 mt-2 text-sm text-slate-500">
            <div>
              <Link to={"/help"}>Help</Link>
            </div>
            <div>
              <Link to={"/help"}>Status</Link>
            </div>
            <div>
              <Link to={"/help"}>About</Link>
            </div>
            <div>
              <Link to={"/help"}>Careers</Link>
            </div>
            <div>
              <Link to={"/help"}>Press</Link>
            </div>
            <div>
              <Link to={"/help"}>Blog</Link>
            </div>
            <div>
              <Link to={"/help"}>Privacy</Link>
            </div>
            <div>
              <Link to={"/help"}>Terms</Link>
            </div>
            <div>
              <Link to={"/help"}>Text to speech</Link>
            </div>
            <div>
              <Link to={"/help"}>Teams</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
