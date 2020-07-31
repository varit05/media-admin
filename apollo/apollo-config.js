import {
  createHttpLink
} from 'apollo-link-http'
const PORT = process.env.PORT || 3000;
const url = process.env.NODE_ENV === 'production' ? 'https://nifty-heyrovsky-bc910d.netlify.app/graphql' : `http://localhost:${PORT}/graphql`;

console.log('url', url);

export default (ctx) => {

  const httpLink = createHttpLink({
    uri: url,
  })

  return {
    httpEndpoint: url,
    httpLinkOptions: {
      credentials: 'same-origin'
    },
    link: httpLink,
    defaultHttpLink: false,
  }
}
