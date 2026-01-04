import express from "express";
import auth from "../../middleware/authMiddleware.js";
import { deleteCourse } from "../../models/course.js";

const router = express.Router();

router.delete("/:id", auth, async (req, res) => {
  await deleteCourse(req.params.id);
  res.json({ message: "Course deleted" });
});

export default router;
