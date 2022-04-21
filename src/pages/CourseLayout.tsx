//课程页面的布局 负责layout
import React from "react";
import { Outlet } from "react-router-dom";
const Course:React.FC=()=>{
  return <div>
    <h2>课程页面</h2>
    {/*子路由渲染 */}
    <Outlet />
  </div>
}
export default Course