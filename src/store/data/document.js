const state = {
    id: '',
    property: {},
    agent: {},
    documentName: '',
}

const getters = {
    getDocumentId: (state, getters, rootState) => {
        return state.id
    },
    getDataProperty: (state, getters, rootState) => {
        return {
            property: state.property,
            agent: state.agent,
            documentName: state.documentName
        }
    }
}

const actions = {
    setDocumentId: ({ commit, state }, payload) => {
        commit('SET_DOCUMENT_ID', payload)
    },
    setDataProperty: ({ commit, state }, payload) => {
        commit('SET_DATA_PROPERTY', payload)
    }
}

const mutations = {
    SET_DOCUMENT_ID(state, payload) {
        state.id = payload.id
    },
    SET_DATA_PROPERTY(state, payload) {
        state.property = payload.property
        state.agent = payload.agent
        state.documentName = payload.documentName
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}