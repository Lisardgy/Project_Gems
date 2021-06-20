import Firebase from 'firebase'
import 'firebase/firestore'

const state = {
    collectionFirebase: [],
}

const getters = {
    getCollectionFirebase: (state) => state.collectionFirebase
}

const actions = {
    setCollectionFirebase: ({ commit, state }, payload) => {
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