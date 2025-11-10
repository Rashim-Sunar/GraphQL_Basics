const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./graphql/schema");

const authMiddleware = require("./middleware/authMiddleware");

async function createApp(){

    const app = express();

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: async({ req }) => {
           const user = await authMiddleware(req); // apply the middleware here...
           return { user };
        }
    });

    await server.start();
    server.applyMiddleware({ app, path: "/graphql" });

    return app;
}

module.exports = createApp;