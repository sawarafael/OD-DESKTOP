import http from "./../../services/http"

// const id = localStorage.getItem("id");
const token = localStorage.getItem("token");

const state = {
    status: "",
    rooms: ""
};

const getters = {
    allRooms: state => state.rooms,
};

const actions = {

    seeAllRooms({ commit }) {
        return new Promise((resolve, reject) => {
            commit("room_status_request");
            http({
                url: `/view/all`,
                method: "GET",
                headers: {
                    'Authorization': `${token}`
                }
            })
            .then(resp => {
                commit("seeRooms", resp.data)
                resolve(resp)
            })
            .catch(err => {
                console.log(err + " Erro em visualizar os dados")
                reject(err)
            })
        })
    }
};

const mutations = {

    room_status_request(state) {
        state.status = "loading"
    },

    seeRooms(state, rooms) {
        state.status = "sucess";
        state.rooms = rooms;
    },

    room_error_request(state) {
        state.status = "error"
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}