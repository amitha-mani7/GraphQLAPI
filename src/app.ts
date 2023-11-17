import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from "./schema";
import resolvers from "./resolver";
import { DataSource } from "typeorm"

const server = new ApolloServer({ typeDefs, resolvers })

startStandaloneServer(server, {
    listen: { port: 4000 },
}).then(url => {
    console.log(`🚀  Server ready at: ${url.url}`);
});



export const PgDbDataSource = new DataSource({
    type: "postgres",
    host: "3.214.153.201",
    //host: "propono-db.cgdfzk0yjguf.us-east-1.rds.amazonaws.com",
    port: 5432,
    username: "test",
    password: "pillartestaccount",
    database: "sandbox",
    logging: true,
    entities: ['./dist/entities/ProponoPlaces.js'],
    subscribers: [],
    ssl: true,
    extra: {
        ssl: {
            rejectUnauthorized: false
        }
    }

});
PgDbDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

export default PgDbDataSource






