import AuthorModel from "../../models/authorModel.js";

export const getAllAuthors = async (_, res) => {
    const authors = await AuthorModel.find();
    if (!authors.length) {
      return res.status(404).json({ message: "Authors not found." });
    }
    res.status(200).json(authors);
};