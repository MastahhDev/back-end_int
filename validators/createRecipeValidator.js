import { body } from "express-validator";

export const createRecipeValidator = [
  body("author")
    .notEmpty()
    .withMessage("Author is required.")
    .isMongoId()
    .withMessage("Author must have an ID."),
  body("createdDate")
    .notEmpty()
    .isISO8601()
    .withMessage("Invalid date format. Must be ISO6801."),
  body("stepByStep")
    .notEmpty()
    .withMessage("Step by step is required.")
    .isLength({ min: 20 })
    .withMessage("Step by step must have a minimum of 20 characters."),
  body("title")
    .notEmpty()
    .withMessage("Title is required.")
    .isLength({ max: 30 })
    .withMessage("The title must have less than 30 characters."),
  body("description")
    .optional()
    .isLength({ max: 300 })
    .withMessage("The description must have less than 300 characters."),
  body("image")
    .optional()
    .custom((value, { req }) => {
      const image = req?.files?.image;
      if (!image) {
        throw new Error("Image is required.");
      }
      if (!image?.mimetype?.startsWith("/image")) {
        throw new Error("File must be an image.");
      }
    }),
];
