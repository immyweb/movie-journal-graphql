const { User } = require("../models");

const UserResolvers = {
  Query: {
    async getUsers() {
      const users = await User.find({});

      return users;
    },
  },
};

module.exports = UserResolvers;
