const db = require("../../../DB/db_config");
const bcrypt = require("bcryptjs");

//exports.logout = (req, res) => {

const logout = async (req, res) => {
  res.cookie("userSave", "logout", {
    expires: new Date(Date.now() + 2 * 1000),
    httpOnly: true,
  });
  res.status(200).redirect("/");
};
