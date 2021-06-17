const state = {
    id: ''
}

const getters = {
    getDocumentId: (state, getters, rootState) => {
        return state.id
    }
}

const actions = {
    setDocumentId: ({ commit, state }, payload) => {
        commit('SET_DOCUMENT_ID', payload)
    }
}

const mutations = {
    SET_DOCUMENT_ID(state, payload) {
        state.id = payload.id
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}