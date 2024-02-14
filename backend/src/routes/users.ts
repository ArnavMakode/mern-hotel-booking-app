import express, { Request, Response } from "express";
import User from "../models/user";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/register", async (req: Request, res: Response) => {
  try {
    let user = await User.findOne({
      email: req.body.email,
    });

    if (user)
      res.status(400).json({ message: "User with email already exists" });
    user = new User(req.body);
    await user.save();

    const token = jwt.sign(
      { userID: user.id },
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

    res.sendStatus(200);
  } catch (error) {
    console.log(`routs/users error: ${error}`);
    res.status(500).json({ message: "something went wrong" });
  }
});

export default router;