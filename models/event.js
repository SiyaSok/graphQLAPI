const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
<<<<<<< Updated upstream
  },
=======
    trim: true,
  },
  eventImage: {
    type: String,
    trim: true,
  },
  // venue: {
  //   type: String,
  //   required: true,
  //   trim: true,
  // },
  // categories: {
  //   type: String,
  //   required: true,
  //   trim: true,
  // },
>>>>>>> Stashed changes
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
