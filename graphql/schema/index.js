/** @format */

var { buildSchema } = require("graphql");

module.exports = buildSchema(`

type Booking {
    _id:ID!
    event: Event!
    user:User!
    createdAt: String!
    updatedAt: String!
}

type Event {
  _id:ID!
  title:String!
  description: String!
  price:Float!
  eventImage:String
  date:String!
  creator: User!
}

type AuthData {
  userId : ID!
  token: String!
  tokenExpiration:Int!
}

type User {
  _id:ID!
  userImage:String!
  firstName:String!
  lastName:String!
  phoneNumber:String!
  company:String
  website:String
  email:String!
  password:String
  createdEvents:[Event!]
}

input UserInput {
UserName:String!
userImage:String!
firstName:String!
lastName:String!
phoneNumber:String!
company:String
website:String
email:String!
password: String!
terms:String!
}

input EventInput {
  title:String!
  description: String!
  eventImage:String
  price:Float!
  date:String!
  venue:String!
  categories:String!
}

type RootQuery {
  events: [Event!]!
  bookings : [Booking!]!
  login(email:String!,password:String!):AuthData
}
type RootMutation {
  createEvent(eventInput:EventInput):Event
  createUser(userInput :UserInput):User
  bookEvent(eventId:ID!):Booking!
  cancelBooking(bookingId:ID!):Event! 
}
schema {
  query: RootQuery
  mutation: RootMutation
}
`);
