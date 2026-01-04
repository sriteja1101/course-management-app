import express from "express";
import auth from "../../middleware/authMiddleware.js";
import { getAllCourses } from "../../models/course.js";

const router = express.Router();

router.get("/", auth, async (req, res) => {
  const courses = await getAllCourses();
  res.json(courses);
});

export default router;
