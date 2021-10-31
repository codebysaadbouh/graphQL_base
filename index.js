require('dotenv').config();

const startApolloServer = require('./api/server');

const typeDefs = require('./graphql/schemas');
const resolvers = require('./graphql/resolvers');
const context = require('./graphql/context');


process.on('uncaughtException', (err) => {
  console.error(`${(new Date()).toUTCString()} uncaughtException:`, err);
  process.exit(0);
});

process.on('unhandledRejection', (err) => {
  console.error(`${(new Date()).toUTCString()} unhandledRejection:`, err);
});


startApolloServer(typeDefs, resolvers, context).then(r => console.log("❌ Stop server with Ctrl + C"));