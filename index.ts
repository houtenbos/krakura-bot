import { GraphQLClient } from 'graphql-request';
import { getSdk } from './src/generated/queries';


const client = new GraphQLClient(
    'https://api.subquery.network/sq/matthewashley1/karura-bot-polkadothackaton',
    { headers: {} });
const sdk = getSdk(client);
const response = sdk.Test().then((data) => console.log(data.query.blocks));


