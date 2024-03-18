import express, { Request, Response } from "express";
import User from "../models/user";
import jwt from "jsonwebtoken";
import { check, validationResult } from "express-validator";
import verifyToken from "../middlewares/auth";

const router = express.Router();

router.get("/me", verifyToken, async (req: Request, res: Response) => {
  const userId = req.userId;
  try {
    const user = await User.findById(userId).select("-password");
    if (!user) return res.status(400).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.post(
  "/register",
  [
    check("email", "Invalid email").isEmail(),
    check(
      "password",
      "Password with 6 or more characters is required"
    ).isLength({ min: 6 }),
    check("firstName", "firstName is required").isString(),
    check("lastName", "lastName is required").isString(),
  ],
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ message: JSON.stringify(errors.array()) });
      }

      let user = await User.findOne({
        email: req.body.email,
      });

      if (user)
        return res
          .status(400)
          .json({ message: "User with email already exists" });
      user = new User(req.body);
      await user.save();

      const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET_KEY as string,
        {
          expiresIn: "1d",
        }
      );

      res.cookie("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 86400000,
      });

      return res.status(200).json({ message: "User Registered OK" });
    } catch (error) {
      res.status(500).json({ message: "something went wrong" });
    }
  }
);

export default router;
