/** @format */

const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  eventImage: {
    type: String,
    trim: true,
  },
  venue: {
    type: String,
    required: true,
    trim: true,
  },
  categories: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Event", eventSchema);
