const state = {
    collectionCondo: {},
    collectionFirebase: [],
}

const getters = {
    getCollectionCondo: (state, getters, rootState) => {
        return state.collectionCondo
    },
}

const actions = {
    setCollectionCondo: ({ commit, state }, payload) => {
        commit('SET_COLLECTION', payload)
    },
}


const mutations = {
    SET_COLLECTION(state, payload) {
        state.collectionCondo = payload;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}