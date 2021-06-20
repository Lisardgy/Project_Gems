const state = {
    databaseUrl: 'https://us-central1-gemsmap.cloudfunctions.net/api'
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