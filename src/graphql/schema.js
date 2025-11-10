// Combining typeDefs and resolvers...
const userType = require("./typeDefs/userType");
const userResolver = require("./resolvers/userResolver");

const typeDefs = [ userType, ];  // put all the types here in the array
const resolvers = [ userResolver, ]; // put all the resolvers here

module.exports = { typeDefs, resolvers };

