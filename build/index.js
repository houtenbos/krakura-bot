"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_request_1 = require("graphql-request");
const queries_1 = require("./src/generated/queries");
const client = new graphql_request_1.GraphQLClient('https://api.subquery.network/sq/matthewashley1/karura-bot-polkadothackaton', { headers: {} });
const sdk = (0, queries_1.getSdk)(client);
const response = sdk.Test().then((data) => console.log(data.query.blocks));
