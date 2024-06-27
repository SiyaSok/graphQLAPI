/** @format */

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
  createEvent: async (args, context) => {
    const { raw } = context.req;
    if (!raw.isAuth) {
      throw new Error(`Unauthenticated user!!`);
    }
    const event = new Event({
      title: args.eventInput.title,
      description: args.eventInput.description,
      price: +args.eventInput.price,
      date: dateToString(args.eventInput.date),
      venue: args.eventInput.venue,
      categories: args.eventInput.categories,
      eventImage: args.eventInput.eventImage,
      creator: raw.userId,
    });
    let createdEvent;

    try {
      const res = await event.save();
      createdEvent = transformEvent(res);
      const creator = await User.findById(raw.userId);
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
