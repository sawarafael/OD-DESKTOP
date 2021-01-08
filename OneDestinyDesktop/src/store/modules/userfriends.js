import http from "./../../services/http"

const id = localStorage.getItem("id");
const token = localStorage.getItem("token");

const state = {
    status: "",
    userFriendsName: {},
    userFriendsRequest: {}
};

const getters = {
    allUserFriendsName: state => state.userFriendsName,
    allUserFriendsData: state => state.userFriendsData
}

const actions = {
    seeFriendData({ commit }) {
        return new Promise((resolve, reject) => {
            commit("friendData_status_request");
            http({
                url: `users/normal/friend/view/all/id?id=${id}`,
                method: "GET",
                headers: {
                    'Authorization': `${token}`
                }
            })
              .then(resp => {
                  const userFriendsName = resp.data.resp.map(x => x.user)

                  commit("friendData_view", userFriendsName)
              })
        })
    },

    requestFriend({ commit }, num) {
        return new Promise((resolve, reject) => {
            commit("friendData_status_request");
            http({
                url: `users/normal/friend/request`,
                method: "POST",
                data: `"id1":${id}, "id2":${num}`,
                headers: {
                    'Authorization': `${token}`
                }
            })
              .then(resp => {
                  console.log(resp)
              })
              .catch(err => {
                  console.log(err)
              })

        })
    },

    addFriend({ commit }, user) {

    },

    refuseFriend({ commit }, user ) {

    }
};

const mutations = {
    friendData_status_request(state) {
        state.status = "loading";
    },

    friendData_view(state, userFriendsName, userFriendsData) {
        state.status = "sucess";
        state.userFriendsName = userFriendsName;
    },

    friendData_error(state) {
        state.status = "error";
    }
}


export default {
    state, 
    getters,
    actions,
    mutations
}