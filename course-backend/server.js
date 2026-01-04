import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import register from "./routes/auth/register.js";
import login from "./routes/auth/login.js";
import createCourse from "./routes/courses/create.js";
import readCourse from "./routes/courses/read.js";
import updateCourse from "./routes/courses/update.js";
import deleteCourse from "./routes/courses/delete.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth/register", register);
app.use("/api/auth/login", login);
app.use("/api/courses", createCourse);
app.use("/api/courses", readCourse);
app.use("/api/courses", updateCourse);
app.use("/api/courses", deleteCourse);

app.listen(process.env.PORT, () =>
  console.log(`Server running on ${process.env.PORT}`)
);
