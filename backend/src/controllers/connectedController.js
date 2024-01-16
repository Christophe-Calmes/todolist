const jwt = require("jsonwebtoken");

const userLogin = (req, res) => {
  const userData = req.body;
  // JWT generation
  const jwtUser = jwt.sign({ id: userData.id }, process.env.JWT_SECRET_KEY);
  res.status(200).json({ jwt: jwtUser, message: "connected" });
  console.info(jwtUser);
};
module.exports = { userLogin };
