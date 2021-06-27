const state = {
    collectionCondo: {},
    statusCondo: '',
}

const getters = {
    getCollectionCondo: (state, getters, rootState) => {
        return state.collectionCondo
    },
    getStatusCondo: (state, getters, rootState) => {
        return state.statusCondo
    }
}

const actions = {
    setCollectionCondo: ({ commit, state }, payload) => {
        commit('SET_COLLECTION', payload)
    },
    setStatusCondo: ({ commit, state }, payload) => {
        commit('SET_STATUS', payload)
    }
}


const mutations = {
    SET_COLLECTION(state, payload) {
        state.collectionCondo = payload;
    },
    SET_STATUS(state, payload) {
        state.statusCondo = payload;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}