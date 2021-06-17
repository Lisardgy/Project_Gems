const state = {
    lat: 0,
    lng: 0,
}

const getters = {
    getPosition: (state, getters, rootState) => {
        return {
            lat: state.lat,
            lng: state.lng,
        };
    }
}

const actions = {
    setPosition: ({ commit, state }, payload) => {
        commit('SET_POSITION', payload)
    }
}

const mutations = {
    SET_POSITION(state, payload) {
        state.lat = payload.lat;
        state.lng = payload.lng;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}