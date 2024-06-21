/** @format */

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "graphql",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
      headers: {
        Accept: "application/json",
      },
    })
  );

  app.use(
    createProxyMiddleware("/graphql", {
      target: `http://localhost:5000`,
      headers: {
        accept: "application/json",
        method: "POST",
      },
    })
  );
};
