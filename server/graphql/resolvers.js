const Media = require('./media/resolvers');
const User = require('./authentication/resolvers');

module.exports = {
  Query: {
    ...Media.Query,
    ...User.Query,
  },
  Mutation: {
    ...Media.Mutation,
  },
};
