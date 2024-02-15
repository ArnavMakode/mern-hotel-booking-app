import express, { Request, Response } from "express";
import User from "../models/user";
import jwt from "jsonwebtoken";
import {check, validationResult} from "express-validator"
import { error } from "console";

const router = express.Router();

router.post("/register", [
    check("email", "Email is required").isEmail(),
    check("password", "Password with 6 or more characters is required").isLength({min: 6}),
    check("firstName", "firstName is required").isString(),
    check("lastName", "lastName is required").isString(),
], async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({message: errors.array()});
    }
  try {
    let user = await User.findOne({
      email: req.body.email,
    });

    if (user)
      res.status(400).json({ message: "User with email already exists" });
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

    res.sendStatus(200);
  } catch (error) {
    console.log(`routs/users error: ${error}`);
    res.status(500).json({ message: "something went wrong" });
  }
});

export default router;