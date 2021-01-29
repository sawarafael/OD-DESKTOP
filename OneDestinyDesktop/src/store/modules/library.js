import http from "../../services/http"

const id = localStorage.getItem("id");
const token = localStorage.getItem("token");

const state = {
    status: "",
    rooms: "",
    userRooms: "",
    playRooms: "",
    tagRooms: "",
    bfriendRooms: ""    
};

const getters = {
    allRooms: state => state.rooms,
    getUserRooms: state => state.userRooms
};

const actions = {

    seeAllRooms({ commit }) {
        return new Promise((resolve, reject) => {
            commit("room_status_request");
            http({
                url: `room/view/all`,
                method: "GET",
                headers: {
                    'Authorization': `${token}`
                }
            })
            .then(resp => {
                console.log(resp.data)
                commit("")
                resolve(resp)
            })
            .catch(err => {
                console.log(err + " Erro em visualizar os dados")
                reject(err)
            })
        })
    },

    createUserRoom({ commit }, dataRoom) {
        return new Promise((resolve, reject) => {
            commit("room_status_request");
            http({
                url: `room/create/new`,
                method: "POST",
                data: dataRoom,
                headers: {
                    'Authorization': `${token}`
                }
            })
            .then((resp) => {
                resolve(resp)
            })
            .catch((err) => {
                reject(err)
            })
        })
    },

    seeUserOwnRoom({ commit }) {
        return new Promise((resolve, reject) => {
            commit("room_status_request");
            http({ 
                url: `room/view/own?id=${id}`,
                method: "GET",
                headers: {
                    'Authorization' : `${token}`
                }
            })
            .then((resp) => {
                commit("seeOwnRooms", resp.data.userrooms)
                console.log(resp.data.userrooms.map(x => x.roomdatum))
            })
            .catch((err) => {
                console.log(err)
            })
        })
    }


};

const mutations = {

    room_status_request(state) {
        state.status = "loading"
    },

    seeAllRooms(state, rooms) {
        state.status = "sucess";
        state.rooms = rooms;
    },

    seeOwnRooms(state, userrooms) {
        state.status = "sucess";
        state.userRooms = userrooms;
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