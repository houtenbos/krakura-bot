"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const graphqlPlayground_1 = require("apollo-server-core/dist/plugin/landingPage/graphqlPlayground");
const load_1 = require("@graphql-tools/load");
const graphql_file_loader_1 = require("@graphql-tools/graphql-file-loader");
const schema = (0, load_1.loadSchemaSync)("./schema.graphql", { loaders: [new graphql_file_loader_1.GraphQLFileLoader()] });
const resolvers = { Query: { /**...*/} };
const server = new apollo_server_1.ApolloServer({
    schema,
    resolvers,
    plugins: [
        (0, graphqlPlayground_1.ApolloServerPluginLandingPageGraphQLPlayground)(),
    ],
});
/**
 * Opens a graphql server for local testing of queries to Subquery
 */
server.listen({ port: 4000 }).then((data) => {
    console.log(`Server ready at ${data.url}`);
});
/**
 * Once Apollo server is launched,
 * set server url to https://api.subquery.network/sq/matthewashley1/karura-bot-polkadothackaton
 * This will allow you to try test queries to SubQuery
 *
 * Test Query:
 *      query {
            tokens {
                totalCount
                nodes {
                id
                name
                price
                }
            }
        }
 */ 
//# sourceMappingURL=server.js.map