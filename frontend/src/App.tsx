import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Blog, Blogs, Publish, Signin, Signup } from "./Pages";
import { RecoilRoot } from "recoil";
import { Home } from "./Pages/Home";

function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/publish" element={<Publish />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}
export default App;
