const state = {
    uid: 'Doublepor',
    email: '',
    password: '',
}

const getters = {
    getUserLogin: (state, getters, rootState) => {
        return {
            uid: state.uid,
            email: state.email,
            password: state.password,
        };
    }
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
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}