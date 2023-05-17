import fastify from "fastify";
import { memoriesRoutes } from "./routes/memories";
import cors from '@fastify/cors'

const app = fastify();

app.register(memoriesRoutes)
app.register(cors, {
  origin: true
})

app.listen({
  host: '0.0.0.0',
  port: 4000,
}).then(() => console.log('🚀Server Running'))