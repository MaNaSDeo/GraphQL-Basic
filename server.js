const express = require("express");
const expressGraphQL = require("express-graphql").graphqlHTTP;

const app = express();

/**Middlewares are tiny functions meant to intercept or modify requests as they come through an express server.*/
app.use(
  "/graphql",
  expressGraphQL({
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Listening");
});
