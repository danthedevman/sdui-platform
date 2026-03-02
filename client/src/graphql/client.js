import { GraphQLClient } from "graphql-request";

const endpoint = import.meta.env.VITE_GRAPHQL_URL;

export const client = new GraphQLClient(endpoint);