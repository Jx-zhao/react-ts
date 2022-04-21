import React from "react";
import courses from "./feCourse"
import { Link } from "react-router-dom";

const CourseList:React.FC = ()=>{
  return <div>
    <ul>
      {courses.map(course=>{
        return <li key={course.id}>
          <Link to={`/courses/${course.id}`}>{course.name}</Link>
        </li>
      })}
    </ul>
  </div>
} 

export default CourseList

