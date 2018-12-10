function Home () {
  return {
    home: 'This is home',
    name: ''
  }
}

const home = {
  namespaced: true,
  state: Home,
  mutations: {
    setName (state, name) {
      state.name = 'name : ' + name
    }
  },
  actions: {
    set ({ commit }) {
      commit('setName', 'Jack')
    }
  }
}

export default home
