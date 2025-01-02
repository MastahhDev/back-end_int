import AuthorModel from "../../models/authorModel";

export const deleteAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    await AuthorModel.findByIdAndDelete(id);
    res.status(204).json({ message: "Author deleted." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error." });
  }
};
