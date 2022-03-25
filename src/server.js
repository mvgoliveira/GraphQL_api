import { ApolloServer } from "apollo-server";
import { MongoDB } from "./database/index";
import 'dotenv/config';

function startServer({ typeDefs, resolvers }) {
  MongoDB();
  
  const server = new ApolloServer({ typeDefs, resolvers });
  server.listen().then(({ url }) => console.log(`🚀 Server is running in URL ${url}`));
}

export { startServer }