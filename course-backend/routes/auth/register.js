import express from "express";
import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";
import { createUser, findUserByEmail } from "../../models/user.js";
import { registerValidation } from "../../validators/authValidator.js";

const router = express.Router();

router.post("/", registerValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json(errors.array());

  const { name, email, password } = req.body;
  const exists = await findUserByEmail(email);
  if (exists) return res.status(400).json({ message: "Email exists" });

  const hashed = await bcrypt.hash(password, 10);
  await createUser(name, email, hashed);
  res.status(201).json({ message: "Registered successfully" });
});

export default router;
