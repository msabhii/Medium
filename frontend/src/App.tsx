import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Blog, Blogs, Signin, Signup } from "./Pages";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={"Home Page"} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}
export default App;
