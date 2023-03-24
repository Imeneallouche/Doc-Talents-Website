const db = require("../../../DB/db_config");
const bcrypt = require("bcryptjs");

//exports.isLoggedIn = async (req, res, next) => {

const isLoggedIn = async (req, res, next) => {
  if (req.cookies.userSave) {
    try {
      // 1. Verify the token
      const decoded = await promisify(jwt.verify)(
        req.cookies.userSave,
        process.env.JWT_SECRET
      );
      console.log(decoded);

      // 2. Check if the user still exist
      db.query(
        "SELECT * FROM users WHERE id = ?",
        [decoded.id],
        (err, results) => {
          console.log(results);
          if (!results) {
            return next();
          }
          req.user = results[0];
          return next();
        }
      );
    } catch (err) {
      console.log(err);
      return next();
    }
  } else {
    next();
  }
};
