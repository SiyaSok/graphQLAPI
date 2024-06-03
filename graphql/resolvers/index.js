const authResolver = require("./auth.js");
const eventResolver = require("./events.js");
const bookingResolver = require("./booking.js");

const rootResolver = { ...authResolver, ...eventResolver, ...bookingResolver };

module.exports = rootResolver;
