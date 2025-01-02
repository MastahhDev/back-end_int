import AuthorModel from "../../models/authorModel";

export const updateAuthor = async (req, res) => {
  try {
    const { name, email, birthDate } = req.body;
    if (!name || !email || !birthDate) {
      return res.status(400).json({ message: "All fields are required." });
    }
    const author = {
      name,
      email,
      birthDate,
    };
    const updatedAuthor = await AuthorModel.findOneAndUpdate(
      { _id: req.body._id },
      author,
      { new: true }
    );
    if (!updatedAuthor) {
      return res.status(404).send({ message: "Author not found." });
    }
    res.status(200).json(updatedAuthor);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error." });
  }
};
