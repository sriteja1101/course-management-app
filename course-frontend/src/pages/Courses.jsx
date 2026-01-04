import { useEffect, useState } from "react";
import axios from "../api/axios";
import CourseForm from "../components/CourseForm";
import CourseList from "../components/CourseList";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  const loadCourses = async () => {
    const res = await axios.get("/courses");
    setCourses(res.data);
  };

  useEffect(() => {
    loadCourses();
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <CourseForm refresh={loadCourses} />
      <CourseList courses={courses} refresh={loadCourses} />
    </>
  );
}
