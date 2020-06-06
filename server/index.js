const express = require('express')
const consola = require('consola');
const {
  Nuxt,
  Builder
} = require('nuxt')
const app = express()
const fs = require('fs');
const expressJwt = require('express-jwt');
const {
  ApolloServer,
  gql
} = require('apollo-server-express');
require('dotenv').config();

const schema = require('../graphql/schema')
// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host,
    port
  } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // apis
  const jwtSecret = Buffer.from(process.env.NUXT_ENV_JWT_TOKEN, "base64");
  app.use(
    expressJwt({
      secret: jwtSecret,
      credentialsRequired: false,
    })
  );

  // graphql
  const apolloServer = new ApolloServer({
    schema
  });

  apolloServer.applyMiddleware({
    app,
    path: '/graphql'
  });

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host);

  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start();
