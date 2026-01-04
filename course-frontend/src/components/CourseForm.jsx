import { useState } from "react";
import axios from "../api/axios";

export default function CourseForm({ refresh }) {
  const [course, setCourse] = useState({
    course_name: "",
    description: "",
    instructor: ""
  });

  const submit = async (e) => {
    e.preventDefault();
    await axios.post("/courses", course);
    setCourse({ course_name: "", description: "", instructor: "" });
    refresh();
  };

  return (
    <form onSubmit={submit}>
      <input placeholder="Course Name" value={course.course_name}
        onChange={e => setCourse({...course, course_name:e.target.value})} />
      <input placeholder="Description" value={course.description}
        onChange={e => setCourse({...course, description:e.target.value})} />
      <input placeholder="Instructor" value={course.instructor}
        onChange={e => setCourse({...course, instructor:e.target.value})} />
      <button>Add Course</button>
    </form>
  );
}
