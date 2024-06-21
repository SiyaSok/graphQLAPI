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

app.use((req, res, next) => {
  // Allow all origins to access this server
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Allow specific HTTP methods for CORS
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");

  // Allow specific headers for CORS
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  // Proceed to the next middleware
  next();
});

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
}

// Start the server at port
app.listen(5000);
