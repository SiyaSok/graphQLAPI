/** @format */

var express = require("express");
var { createHandler } = require("graphql-http/lib/use/express");
var { ruruHTML } = require("ruru/server");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const graphQlSchema = require("./graphql/schema/index");
const graphQlResolvers = require("./graphql/resolvers/index");
const isAuth = require("./middleware/is-auth");
var app = express();

app.use(bodyParser.json());

// Serve the GraphiQL IDE.
app.get("/", (_req, res) => {
  res.type("html");
  res.end(ruruHTML({ endpoint: "/graphql" }));
});

// Create and use the GraphQL handler.
app.use(isAuth);

app.all(
  "/graphql",
  createHandler({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    context: (req, res) => ({ req }),
  })
);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@thecolourbql.mjva94l.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority&appName=TheColourBql`
  );

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// Start the server at port
app.listen(5000);
