import Home from "./Routers/Home"
import Course from "./components/Course"
import { Routes, Route } from "react-router-dom"
import Courses from "./Routers/Courses"
import Authentication from "./Routers/Authentication"
import Sign_in_group from "./Routers/Sign_in_group"
function App() {
  return (
    <>
      <Routes>

        <Route path={"/"} element={<Home />} />
        <Route path={"/course"} element={<Courses />} />
        <Route path={"/login"} element={<Authentication />} />
        <Route path={"/sign_in"} element={<Sign_in_group />} />
      </Routes>
    </>
  );
}

export default App;