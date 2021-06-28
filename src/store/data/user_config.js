const state = {
    uid: '',
    email: '',
    password: '',
    status: '',
}

const getters = {
    getUserLogin: (state, getters, rootState) => {
        return {
            uid: state.uid,
            email: state.email,
            password: state.password,
            status: state.status
        };
    },
}

const actions = {
    setUserLogin: ({ commit, state }, payload) => {
        commit('SET_USER', payload)
    }
}

const mutations = {
    SET_USER(state, payload) {
        state.uid = payload.uid;
        state.email = payload.email;
        state.password = payload.password;
        state.status = payload.status;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}