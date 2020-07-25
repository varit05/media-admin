const Base = require('../base');

const User = `
extend type Query {
    login(email: String!, password: String!): AuthData
}
type AuthData {
    userId: ID
    token: String
    tokenExpiration: Int
}
`;

module.exports = {
  User,
  Base
};
