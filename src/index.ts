  
import 'reflect-metadata';
import * as cors from 'cors';
import * as http from 'http';
import * as express from 'express';
import { resolvers } from "./resolvers";
import * as  bodyParser from 'body-parser';
import * as TypeGraphQL from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';

async function bootstrap() {

    // server setup
    let server;
    const app = express();

    // setting up middleware
    app.use(bodyParser.json());
    app.use(cors({}));

    // Generating GraphQL schema 
    const schema = await TypeGraphQL.buildSchema({
        resolvers,
        validate: false
    });

    // Creating Apollo Server based of schema
    const apollo = new ApolloServer({
        schema,
        playground: true
    });

    // Puts Apollo on the Server
    apollo.applyMiddleware({ app });

    // Builds server 
    server = http.createServer(app);
    server.listen(8080); // should be an enviroment variable in docker 
}

bootstrap()
    .then(_ => console.log('GraphQL started successfully service'))
    .catch(err => console.log(err))