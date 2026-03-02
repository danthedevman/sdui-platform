import { mockData } from "../db/mockData.js";

export const schema = `
  scalar JSON

  type Query {
    health: String!
    screens: [Screen!]!
    screenById(id: ID!): Screen
    screenByRoute(route: String!): Screen
    productsByIds(ids: [ID!]!): [Product!]!
  }

  type Screen {
    id: ID!
    title: String!
    route: String!
    components: [UIComponent!]!
  }

  type UIComponent {
    id: ID!
    type: String!
    props: JSON!
  }

  type Product {
    id: ID!
    name: String!
    priceCents: Int!
    imageUrl: String
  }
`;

export const resolvers = {
  Query: {
    health: async () => "ok",

    screens: async () => mockData.screens,

    screenById: async (_, { id }) => mockData.screens.find((s) => s.id === id) || null,

    screenByRoute: async (_, { route }) =>
      mockData.screens.find((s) => s.route === route) || null,

    productsByIds: async (_, { ids }) => {
      const set = new Set(ids);
      return mockData.products.filter((p) => set.has(p.id));
    }
  }
};