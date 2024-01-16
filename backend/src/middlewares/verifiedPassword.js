const argon2 = require("argon2");
const models = require("../models");

const verifyPassword = async (req, res, next) => {
  const { password, email } = req.body;
  try {
    const [[dataDB]] = await models.users.connectedUserByEmail(email);
    const verifiedUser = await argon2.verify(dataDB.password, password);
    if (verifiedUser) {
      delete req.body.password;
      const { id } = dataDB;
      req.body.id = id;
      next();
    } else {
      res.status(401).send("Password or users not find");
    }
  } catch (err) {
    res.status(500).send("Auth fail !");
  }
};
module.exports = verifyPassword;
