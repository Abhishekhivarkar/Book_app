import userModel from "../model/User.model.js";
import bcryptjs from "bcryptjs";

export const getUser = async (req, res) => {
  try {
    const { email, password, cpassword } = await req.body;
    if (!email || !password || !cpassword) {
      return res.status(400).json({ message: "all fields are required" });
    }

    if (password !== cpassword) {
      return res.status(400).json({ message: "password do not match" });
    }
    const user = await userModel.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "user already exists" });
    }
    const hashpassword = await bcryptjs.hash(password, 10);
    const createUser = new userModel({
      email,
      password: hashpassword,
    });
    await createUser.save();
    res.status(200).json({ message: "user created successfully", user:{
      email:createUser.email,
      password:createUser.password,
      cpassword:createUser.cpassword
    } });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.log("Error : ", error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = await req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "enter email and password" });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "email not found please register!" });
    }

    const match = await bcryptjs.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: "incorrect password" });
    } else {
      res.status(200).json({
        message: "login successful",
        user: {
          _id: user._id,
          email: user.email,
          password: user.password,
        },
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.log("Error : ", error);
  }
};
