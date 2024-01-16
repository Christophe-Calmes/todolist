const argon2 = require("argon2");

const hashingPassword = async (req, res, next) => {
  const { password } = req.body;
  try {
    const hashPassword = await argon2.hash(password, { hasLength: 62 });
    req.body.password = hashPassword;
  } catch (err) {
    res.status(500).send("Error");
  }
  next();
};
module.exports = hashingPassword;
