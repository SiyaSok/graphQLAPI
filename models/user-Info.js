/** @format */

const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userInfoSchema = new Schema({
  userImage: {
    type: String,
    trim: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  cellphone: {
    type: Number,
    required: true,
  },
  company: {
    type: String,
  },
  website: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

module.exports = mongoose.model("User-info", userInfoSchema);
