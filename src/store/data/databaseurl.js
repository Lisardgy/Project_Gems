const state = {
    databaseUrl: 'http://localhost:5001'
    // databaseUrl: ''
}

const getters = {
    getDatabaseUrl: (state, getters, rootState) => {
        return state.databaseUrl
    }
}

export default {
    namespaced: true,
    state,
    getters,
}