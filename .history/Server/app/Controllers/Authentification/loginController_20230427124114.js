const db = require("../../../DB/db_config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const login = async (req, res) =>{
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({
        message: "Please provide an email and password",
      }); 
    }


    db.query(
      "SELECT * FROM DPGR WHERE email = ?",
      [email],
      async (err, results) => {
        console.log(results);
        if (
          !results ||
          !(await bcrypt.compare(password, results[0].password))
        ) {
          res.status(401).send({
            message: "Email or password is incorrect",
          });
        } else {

          console.log("The token is " + token);

          const cookieOptions = {
            expires: new Date(
              Date.now() +
                process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
            ),
            httpOnly: true,
          };
          res.cookie("userSave", token, cookieOptions);
          res.status(200).redirect("/Doctorant");
        }
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Server error",
    });
  }
};

module.exports = login;
