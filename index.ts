import "reflect-metadata";

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import datasource from "./lib/datasource";
import { createSchema } from "./lib/createSchema";


async function main() {
  const schema = await createSchema();

  const server = new ApolloServer<{}>({
   schema,
   
  });
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    
  });
  await datasource.initialize(); 
  console.log(`Serveur: ${url}`);
}
main();