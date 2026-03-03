import Fastify from "fastify";
import cors from "@fastify/cors";
import helmet from "@fastify/helmet";
import mercurius from "mercurius";
import { schema, resolvers } from "./schemas/schema.js";
import dotenv from "dotenv";

dotenv.config();

const app = Fastify({
  logger: {
    level: process.env.NODE_ENV === "production" ? "info" : "debug",
  },
});

await app.register(helmet, {
  contentSecurityPolicy: false
})

await app.register(cors, {
  origin: true,
  credentials: true,
});

await app.register(mercurius, {
  schema,
  resolvers,
  graphiql: true,
});

app.get("/", async () => ({
  ok: true,
  graphql: "/graphql",
  graphiql: "/graphiql",
}));

const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || "0.0.0.0";

try {
  await app.listen({ port, host });
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
