const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
const port = process.env.PORT;
const hostname = process.env.LOCALHOST;
const http = require('http');

async function startApolloServer(typeDefs, resolvers, context) {
  const app = express();
  
  app.use(cors());

  const httpServer = http.createServer(app);

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context,
    introspection: true,
    playground: {
      settings: {
        'schema.polling.enable': false,
      },
    },
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: '/api'}); 

  /* httpServer.listen(port,hostname, ()=> {
        console.log(`🚀 Server ready at http://${hostname}:${port}/api`);
        console.log(`Stop server with Ctrl + C`);
    }) */ 

  await new Promise(resolve => httpServer.listen({ port: port }, resolve));
  console.log(`🚀 Server ready at http://${hostname}:${port}/api`)
  
}


 module.exports = startApolloServer;