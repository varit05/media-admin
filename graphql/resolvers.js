const Media = require('./media/resolvers');

module.exports = {
  Query: {
    ...Media.Query,
  },
  Mutation: {
    ...Media.Mutation,
  },
};
