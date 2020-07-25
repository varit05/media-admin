const {
  makeExecutableSchema
} = require('graphql-tools');
const {
  Media
} = require('./media/schema');
const {
  User
} = require('./authentication/schema');
const {
  Base
} = require('./base');
const resolvers = require('./resolvers');

module.exports = makeExecutableSchema({
  typeDefs: [Base, Media, User],
  resolvers,
  logger: {
    log: e => console.log(e)
  },
});
