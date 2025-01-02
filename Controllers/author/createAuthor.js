import AuthorModel from "../../models/authorModel";

export const createAuthor = async (req, res) => {
    try {
      const { name, email, birthDate } = req.body;
  
      if (!name || !email || !birthDate) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      const author = {
        name,
        email,
        birthDate,
        createdDate: new Date(),
      };
  
      const newAuthor = await AuthorModel.create(author);
  
      res.status(201).json(newAuthor);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server error." });
    }
};