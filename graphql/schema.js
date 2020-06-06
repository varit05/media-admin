const {
  makeExecutableSchema
} = require('graphql-tools');
const {
  Media
} = require('./media/schema');
const resolvers = require('./resolvers');

module.exports = makeExecutableSchema({
  typeDefs: [Media],
  resolvers,
  logger: {
    log: e => console.log(e)
  },
});
