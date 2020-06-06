const Media = `
type Query {
    programs: [Program]
    program(id: ID!): Program
}
type Mutation {
    createProgram (body: String): Program
    deleteProgram(id: ID!): Program
}
type Media {
    type: String
    url: String
}
type Program {
    id: ID!
    title: String
    description: String
    thumbnail: String
    media: [Media]
  }
`;

module.exports = {
  Media
};
