import React from "react";
import {BrowserRouter,Route,Link, Routes}  from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import CourseLayout from "./pages/CourseLayout";
import CourseList from "./pages/CourseList";
import Course from "./pages/Course";
//想入入口的组件
const App = () =>{
  return <BrowserRouter>
    <Link to="/" style={{padding:20}}>Home</Link>
    <Link to="/about" style={{padding :20}} >About</Link>
    <Link to="/courses" style={{padding :20}} >course</Link>
    <Routes>
        <Route path="/" element={ <Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/Courses" element={<CourseLayout/>}>
          <Route index element={<CourseList/>}></Route>
          <Route path=":id" element={<Course />}></Route>
        </Route>
    </Routes>
  </BrowserRouter>
}

export default App