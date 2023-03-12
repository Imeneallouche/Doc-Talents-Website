const db = require("../../DB/db_config");
const bcrypt = require("../../DB/db_config");

//exports.register = (req, res) => {

const register = async (req, res) => {
  console.log(req.body);
  const { name, email, password, passwordConfirm } = req.body;
  db.query(
    "SELECT email from users WHERE email = ?",
    [email],
    async (err, results) => {
      if (err) {
        console.log(err);
      } else {
        if (results.length > 0) {
          return res.sendFile(__dirname + "request.html", {
            message: "The email is already in use",
          });
        } else if (password != passwordConfirm) {
          return res.sendFile(__dirname + "request.html", {
            message: "Password dont match",
          });
        }
      }

      let hashedPassword = await bcrypt.hash(password, 8);
      console.log(hashedPassword);

      db.query(
        "INSERT INTO users SET ?",
        { name: name, email: email, password: hashedPassword },
        (err, results) => {
          if (err) {
            console.log(err);
          } else {
            return res.sendFile(__dirname + "request.html", {
              message: "User registered",
            });
          }
        }
      );
    }
  );
  res.send("Form submitted");
};
