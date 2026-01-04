import { body } from "express-validator";

export const courseValidation = [
  body("course_name").notEmpty(),
  body("description").notEmpty(),
  body("instructor").notEmpty()
];
