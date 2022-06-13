const mongoose = require("mongoose");
const { options } = require("./config");

const connect = (url = options.dbUrl) => {
  return mongoose.connect(url);
};

module.exports = {
  connect,
};
