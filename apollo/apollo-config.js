import {
  createHttpLink
} from 'apollo-link-http'
const PORT = process.env.PORT || 3000;

export default (ctx) => {

  const httpLink = createHttpLink({
    uri: `http://localhost:${PORT}/graphql`,
  })

  return {
    httpEndpoint: `http://localhost:${PORT}/graphql`,
    httpLinkOptions: {
      credentials: 'same-origin'
    },
    link: httpLink,
    defaultHttpLink: false,
  }
}
