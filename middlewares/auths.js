import jwt from "jsonwebtoken";
import Author from "../models/author";

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "secretkey");
    const author = await Author.findOne({ _id: decoded._id });

    if (!author) {
      throw new Error();
    }

    req.token = token;
    req.user = author;
    next();
    // eslint-disable-next-line no-unused-vars
  } catch (error) {
    res.status(401).send({ error: "Please authenticate." });
  }
};

export default auth;
