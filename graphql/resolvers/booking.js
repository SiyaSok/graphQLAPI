const Booking = require("../../models/booking");
const Event = require("../../models/event");

const { transformBooking, transformEvent } = require("./merge");

module.exports = {
  bookings: async (args, context) => {
    const { raw } = context.req;

    if (!raw.isAuth) {
      throw new Error(`Unauthenticated user!!`);
    }
    try {
      const bookings = await Booking.find();
      return bookings.map((booking) => {
        return transformBooking(booking);
      });
    } catch (error) {
      throw error;
    }
  },

  bookEvent: async (args, context) => {
    const { raw } = context.req;

    if (!raw.isAuth) {
      throw new Error(`Unauthenticated user!!`);
    }
    const fetchedEvent = await Event.findOne({ _id: args.eventId });
    try {
      const booking = new Booking({
        user: raw.userId,
        event: fetchedEvent,
      });
      const res = await booking.save();
      return transformBooking(res);
    } catch (error) {
      throw error;
    }
  },
  cancelBooking: async (args, context) => {
    const { raw } = context.req;

    if (!raw.isAuth) {
      throw new Error(`Unauthenticated user!!`);
    }
    try {
      const booking = await Booking.findById(args.bookingId).populate("event");
      const event = transformEvent(booking._doc.event);
      await Booking.deleteOne({ _id: args.bookingId });

      return event;
    } catch (error) {
      throw error;
    }
  },
};
