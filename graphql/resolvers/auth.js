const bcrypt = require("bcrypt");
const User = require("../../models/user");

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
};
