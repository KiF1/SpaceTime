import { PrismaClient } from "@prisma/client";
import fastify from "fastify";

const app = fastify();
const prisma = new PrismaClient()

app.listen({
  host: '0.0.0.0',
  port: 4000,
}).then(() => console.log('🚀HTTP Running'))