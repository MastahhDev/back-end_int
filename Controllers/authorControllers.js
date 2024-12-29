import Author from "../models/author";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  const author = new Author(req.body);
  try {
    await author.save();
    res.status(201).send(author);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const login = async (req, res) => {
  try {
    const author = await Author.findOne({ email: req.body.email });
    if (
      !author ||
      !(await bcrypt.compare(req.body.password, author.password))
    ) {
      return res
        .status(401)
        .send({ error: "Login failed! Check the data and try again" });
    }
    const token = jwt.sign({ _id: author._id }, "secretkey");
    res.send({ author, token });
  } catch (error) {
    res.status(400).send(error);
  }
};
