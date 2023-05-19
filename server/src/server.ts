import fastify from "fastify";
import { memoriesRoutes } from "./routes/memories";
import cors from '@fastify/cors'
import 'dotenv/config'
import { authRoutes } from "./routes/auth";
import jwt from '@fastify/jwt'

const app = fastify();

app.register(memoriesRoutes)
app.register(authRoutes)

app.register(cors, {
  origin: true
})

app.register(jwt, {
  secret: 'spacetime'
})

app.listen({
  host: '0.0.0.0',
  port: 4000,
}).then(() => console.log('🚀Server Running'))