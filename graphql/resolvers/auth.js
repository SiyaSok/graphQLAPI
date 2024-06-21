/** @format */

const bcrypt = require("bcrypt");
const User = require("../../models/user");
var jwt = require("jsonwebtoken");

module.exports = {
  createUser: async (args) => {
    try {
      const existingUser = await User.findOne({ email: args.userInput.email });
      if (existingUser) {
        throw new Error(
          `User with this email : ${args.userInput.email} already exist`
        );
      }
      const hashedPassword = await bcrypt.hash(args.userInput.password, 12);
      const user = new User({
        email: args.userInput.email,
        password: hashedPassword,
      });
      const UserRes = await user.save();
      return { ...UserRes._doc, password: null };
    } catch (error) {
      throw error;
    }
  },
  login: async ({ email, password }) => {
    const user = await User.findOne({ email: email });

    if (!user) {
      throw new Error(
        `A user with this email ${email} doesn't exist.Please regster`
      );
    }
    const isEqual = await bcrypt.compare(password, user.password);

    if (!isEqual) {
      throw new Error(`The password provided is incorrent, Please try again.`);
    }
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      "somesupersecretkey",
      { expiresIn: "1h" }
    );

    return {
      userId: user.id,
      token: token,
      tokenExpiration: 1,
    };
  },
};
