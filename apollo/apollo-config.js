import { createHttpLink } from 'apollo-link-http'
const PORT = process.env.PORT;

export default (ctx) => {

    const httpLink = createHttpLink({
        uri: `http://localhost:${PORT}/graphql`,
    })

    return {
        httpEndpoint: `http://localhost:${PORT}`,
        browserHttpEndpoint: '/graphql',
        link: httpLink,
        defaultHttpLink: false,
    }
}