const jwt = require("jsonwebtoken");

function getUser(token) {
  if (token) {
    try {
      return jwt.verify(token, process.env.TOKEN_KEY);
    } catch (err) {
      return { error: true, msg: "Session invalid" };
    }
  }
}

module.exports = {
  getUser,
};
