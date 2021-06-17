const state = {
    lat: '',
    lng: '',
    property: {
        projectName: '',
        name: '', //ชื่อคอนโด
        type: '',
        status: '',
        houseNumber: '',
        building: '', //อาคาร
        swine: '', //หมู่
        alley: '', //ซอย
        distict: '', //อำเภอ
        subDistict: '', //ตำบล
        province: '', //จังหวัด
    },
}

const getters = {
    getLocationCondo: (state, getters, rootState) => {
        const { lat, lng, property } = state
        return {
            lat,
            lng,
            property
        }
    }
}

const actions = {
    setLocationCondo: ({ commit, state }, payload) => {
        commit('SET_LOCATION_CONDO', payload)
    }
}

const mutations = {
    SET_LOCATION_CONDO(state, payload) {
        state.lat = payload.lat
        state.lng = payload.lng
        state.property = payload.property
        // state.property.projectName = payload.projectName
        // state.property.name = payload.name //ชื่อคอนโด
        // state.property.type = payload.type
        // state.property.status = payload.status
        // state.property.houseNumber = payload.houseNumber
        // state.property.building = payload.building //อาคาร
        // state.property.swine = payload.swine //หมู่
        // state.property.alley = payload.alley //ซอย
        // state.property.distict = payload.distict //อำเภอ
        // state.property.subDistict = payload.subDistict //ตำบล
        // state.property.province = payload.province //จังหวัด
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}