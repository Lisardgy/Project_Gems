const state = {
    collectionCondo: {},
    collectionFirebase: [],
}

const getters = {
    getCollectionCondo: (state, getters, rootState) => {
        return state.collectionCondo
    },
    dataFirebase: (state, getters, rootState) => {
        return [state.collectionFirebase];
    },
}

const actions = {
    setCollectionCondo: ({ commit, state }, payload) => {
        commit('SET_COLLECTION', payload)
    },
    setCollectionFirebase: async ({ commit, state }, payload) => {
        const db = Firebase.firestore();

        return new Promise((resolve, reject) => {
            db.collection("property").onSnapshot((snapshot) => {
                snapshot.docChanges().forEach((change) => {
                    const {
                        id,
                        lat,
                        lng,
                        sub_id,
                        property,
                        agent,
                        deleteBy
                    } = change.doc.data();
                    if (!deleteBy) {
                        const positionObject = {
                            id,
                            sub_id,
                            name: property.name,
                            type: property.type,
                            status: property.status,
                            position: {
                                lat,
                                lng,
                            },
                            property,
                            agent,
                        };

                        commit('SET_COLLECTION_FIREBASE', positionObject)
                    }
                })
            });
        })

    }
}


const mutations = {
    SET_COLLECTION(state, payload) {
        state.collectionCondo = payload;
    },
    SET_COLLECTION_FIREBASE(state, payload) {
        state.collectionFirebase.push(payload);
        console.log(state.collectionFirebase);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}