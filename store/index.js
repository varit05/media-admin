import {
  LOGIN_USER
} from "../graphql-client/queries";

export const state = () => ({
  drawer: true,
  user: {}
})

export const mutations = {
  toggleDrawer(state) {
    state.drawer = !state.drawer
  },
  drawer(state, val) {
    state.drawer = val
  }
}

export const actions = {
  async login({
    commit,
    dispatch
  }, authDetails) {
    try {
      console.log('authDetails', authDetails);
      const {
        data
      } = await this.$apollo.query({
        query: LOGIN_USER,
        variables: {
          ...authDetails
        }
      })
      console.log('data', data);
      const token = JSON.stringify(data.token)
      commit('setUser', data)
      localStorage.setItem('apollo-token', token)
    } catch (e) {
      console.log(e)
    }
  },
}
