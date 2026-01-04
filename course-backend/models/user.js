import db from "../database/db.js";

export const findUserByEmail = (email) =>
  new Promise((resolve, reject) => {
    db.get(
      "SELECT * FROM users WHERE email = ?",
      [email],
      (err, row) => (err ? reject(err) : resolve(row))
    );
  });

export const createUser = (name, email, password) =>
  new Promise((resolve, reject) => {
    db.run(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, password],
      function (err) {
        err ? reject(err) : resolve(this.lastID);
      }
    );
  });
