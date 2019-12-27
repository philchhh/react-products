import connectDb from "../../utils/connectDb";
import User from "../../models/User";
import Cart from "../../models/Cart";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import isEmail from "validator/lib/isEmail";
import isLength from "validator/lib/isLength";

connectDb();

export default async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Validate name / email / password
    if (!isLength(name, { min: 3, max: 10 })) {
      return res.status(422).send(`Name must be betweeen 3-10 characters long`);
    } else if (!isLength(password, { min: 6 })) {
      return res.status(422).send(`Password must be at least 6 characters`);
    } else if (!isEmail(email)) {
      return res.status(422).send(`Email is invalid`);
    }

    // Check if user already exists
    const user = await User.findOne({ email });

    if (user) {
      return res.status(422).send(`User alredy exists with email ${email}`);
    }

    // Create user password
    const hash = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await new User({
      name,
      email,
      password: hash
    }).save();

    // Create cart for new user
    await new Cart({ user: newUser._id }).save();

    // Create token for the new user
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "7d"
    });

    // Send back token
    res.status(201).json(token);
  } catch (error) {
    res.status(500).send(`Error signing up. Please try again later.`);
  }
};
