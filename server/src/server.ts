import fastify from "fastify";
import { memoriesRoutes } from "./routes/memories";
import cors from '@fastify/cors'
import 'dotenv/config'
import { authRoutes } from "./routes/auth";
import jwt from '@fastify/jwt'
import multipart from "@fastify/multipart";
import { uploadRoutes } from "./routes/upload";
import { resolve } from 'node:path'

const app = fastify();

app.register(multipart)
app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})

app.register(uploadRoutes)
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
  port: 3333,
}).then(() => console.log('🚀Server Running'))

