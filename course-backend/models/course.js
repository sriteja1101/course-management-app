import db from "../database/db.js";

export const createCourse = (data) =>
  new Promise((resolve, reject) => {
    db.run(
      "INSERT INTO courses (course_name, description, instructor) VALUES (?, ?, ?)",
      data,
      function (err) {
        err ? reject(err) : resolve(this.lastID);
      }
    );
  });

export const getAllCourses = () =>
  new Promise((resolve, reject) => {
    db.all("SELECT * FROM courses", [], (err, rows) =>
      err ? reject(err) : resolve(rows)
    );
  });

export const updateCourse = (id, data) =>
  new Promise((resolve, reject) => {
    db.run(
      "UPDATE courses SET course_name=?, description=?, instructor=? WHERE id=?",
      [...data, id],
      function (err) {
        err ? reject(err) : resolve(this.changes);
      }
    );
  });

export const deleteCourse = (id) =>
  new Promise((resolve, reject) => {
    db.run(
      "DELETE FROM courses WHERE id=?",
      [id],
      function (err) {
        err ? reject(err) : resolve(this.changes);
      }
    );
  });
