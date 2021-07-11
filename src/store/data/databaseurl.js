const state = {
    // databaseUrl: 'https://us-central1-gemsmap.cloudfunctions.net/api'
    databaseUrl: 'http://localhost:5001/gemsmap/us-central1/api'
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