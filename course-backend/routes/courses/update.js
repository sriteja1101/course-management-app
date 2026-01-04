import express from "express";
import auth from "../../middleware/authMiddleware.js";
import { updateCourse } from "../../models/course.js";

const router = express.Router();

router.put("/:id", auth, async (req, res) => {
  const { course_name, description, instructor } = req.body;
  await updateCourse(req.params.id, [
    course_name,
    description,
    instructor
  ]);
  res.json({ message: "Course updated" });
});

export default router;
