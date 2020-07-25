import gql from 'graphql-tag'

export const LOGIN_USER = gql `
  query login ($email: String! $password: String! ) {
    login(email: $email, password: $password) {
      userId
      token
      tokenExpiration
    }
  }
`
