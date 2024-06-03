const Event = require("../../models/event");
const User = require("../../models/user");

const { dateToString } = require("../../helpers/date");
const { transformEvent } = require("./merge");

module.exports = {
  events: async () => {
    try {
      const events = await Event.find();
      return events.map((event) => {
        return transformEvent(event);
      });
    } catch (error) {
      throw error;
    }
  },
  createEvent: async (args) => {
    const event = new Event({
      title: args.eventInput.title,
      description: args.eventInput.description,
      price: +args.eventInput.price,
      date: dateToString(args.eventInput.date),
      creator: "665ae6e718c05474dcaf1063",
    });
    let createdEvent;

    try {
      const res = await event.save();
      createdEvent = transformEvent(res);
      const creator = await User.findById("665ae6e718c05474dcaf1063");
      if (!creator) {
        throw new Error(`User not found.`);
      }
      creator.createdEvents.push(event);
      await creator.save();
      return createdEvent;
    } catch (error) {
      throw error;
    }
  },
};