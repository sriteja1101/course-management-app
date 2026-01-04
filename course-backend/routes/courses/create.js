import express from "express";
import auth from "../../middleware/authMiddleware.js";
import { createCourse } from "../../models/course.js";
import { courseValidation } from "../../validators/courseValidator.js";
import { validationResult } from "express-validator";

const router = express.Router();

router.post("/", auth, courseValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json(errors.array());

  const { course_name, description, instructor } = req.body;
  await createCourse([course_name, description, instructor]);
  res.status(201).json({ message: "Course created" });
});

export default router;
