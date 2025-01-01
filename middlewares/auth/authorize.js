export const authorize = (...roles) => {
    return (req, res, next) => {
      try {
        if (!roles.includes(req.user.role)) { //Checks for roles
          return res.status(403).json({ message: "Insuficcient permits." });
        }
        next();
      } catch (error) { //Checks for errors
        console.log(error);
        res.status(500).json({ message: "Server error." });
      }
    };
  };