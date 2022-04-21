import React from "react";
import { useParams } from "react-router-dom";
import courses from "./feCourse";
const Course:React.FC = () =>{
  const {id} = useParams()
  const course = courses.find(c=>c.id==id)
  return <div>
    <h4>{course?.name}</h4>
    <p>{course?.desc}</p>
  </div>
} 

export default Course