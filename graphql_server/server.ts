import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core/dist/plugin/landingPage/graphqlPlayground';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';

const schema = loadSchemaSync("./schema.graphql", {loaders: [new GraphQLFileLoader()]});
const resolvers = { Query: {/**...*/} };

const server = new ApolloServer({ 
    schema, 
    resolvers,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
});

/**
 * Opens a graphql server for local testing of queries to Subquery
 */
server.listen({port: 4000}).then((data) => {
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