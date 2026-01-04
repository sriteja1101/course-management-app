import axios from "../api/axios";

export default function CourseList({ courses, refresh }) {
  const remove = async (id) => {
    await axios.delete(`/courses/${id}`);
    refresh();
  };

  return (
    <ul>
      {courses.map(c => (
        <li key={c.id}>
          <b>{c.course_name}</b> - {c.instructor}
          <button onClick={() => remove(c.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
