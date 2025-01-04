import { validationResult } from "express-validator";

const validationMiddleware = (req, res, next) => { //Checks for errors after authorization
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: "Validation error.", errors: errors.array() });
  }
  next();
};

export default validationMiddleware;