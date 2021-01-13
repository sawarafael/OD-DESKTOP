import http from "./../../services/http"

const id = localStorage.getItem("id");
const token = localStorage.getItem("token");

const state = {
    status: "",
    userFriends: {},
    userRequests: {},
    userBestFriends: {}
};

const getters = {
    allUserFriends: state => state.userFriends,
    allUserRequests: state => state.userRequests,
    allUserBestFriends: state => state.userBestFriends
}

const actions = {
    
   seeFriendData({ commit }) {
       return new Promise((resolve, reject) => {
           commit("friendData_status_request");
           http({
               url: `users/normal/friend/view/all/?id=${id}`,
               method: "GET",
               headers: {
                'Authorization': `${token}`
               }
           })
           .then(resp => {
                  
            const onlyRequests = resp.data.resp.filter((reqs) => {
                return reqs.statusCode === 1
            });

            const onlyFriends = resp.data.resp.filter((fres) => {
                return fres.statusCode === 2
            });
            
            const onlyBestFriends = resp.data.resp.filter((best) => {
                return best.statusCode === 3
            }) 

            commit("friendData_view", onlyFriends.map((see) => see.user), 
                                      onlyRequests.map((see) => see.user),
                                      onlyBestFriends.map((see) => see.user)
                  )
            
           })
           .catch(err => {
               console.log(err)
           })
       })
   },

    requestFriend({ commit }, num) {
        return new Promise((resolve, reject) => {
            commit("friendData_status_request");
            http({
                url: `users/normal/friend/request`,
                method: "POST",
                data: num,
                headers: {
                    'Authorization': `${token}`
                }
            })
              .then(resp => {
                  resolve(resp);
              })
              .catch(err => {
                  reject(err)
              })

        })
    },

    addFriend({ commit }, add) {
        return new Promise((resolve, reject) => {
            commit("friendData_status_request");
            http({
                url: `users/normal/friend/update/2`,
                method: "PATCH",
                data: add,
                headers: {
                    'Authorization': `${token}`
                }
            })
              .then(resp => {
                  resolve(resp)
              })
              .catch(err => {
                  reject(err)
              })
        })
    },

    refuseFriend({ commit }, ref ) {        
        return new Promise((resolve, reject) => {
            commit("friendData_status_request");
            http({
                url: `users/normal/friend/update/5`,
                method: "PATCH",
                data: ref,
                headers: {
                    'Authorization': `${token}`
                }
            })
              .then(resp => {
                  resolve(resp)
              })
              .catch(err => {
                  reject(err)
              })
        })

    },
    
    upgradeFriend({ commit }, upg ) {        
        return new Promise((resolve, reject) => {
            commit("friendData_status_request");
            http({
                url: `users/normal/friend/update/3`,
                method: "PATCH",
                data: upg,
                headers: {
                    'Authorization': `${token}`
                }
            })
              .then(resp => {
                  resolve(resp)
              })
              .catch(err => {
                  reject(err)
              })
        })

    },

    downgradeFriend({ commit }, upg ) {        
        return new Promise((resolve, reject) => {
            commit("friendData_status_request");
            http({
                url: `users/normal/friend/update/3`,
                method: "PATCH",
                data: upg,
                headers: {
                    'Authorization': `${token}`
                }
            })
              .then(resp => {
                  resolve(resp)
              })
              .catch(err => {
                  reject(err)
              })
        })

    },
    
    blockFriend({ commit }, blo ) {        
        return new Promise((resolve, reject) => {
            commit("friendData_status_request");
            http({
                url: `users/normal/friend/update/4`,
                method: "PATCH",
                data: blo,
                headers: {
                    'Authorization': `${token}`
                }
            })
              .then(resp => {
                  resolve(resp)
              })
              .catch(err => {
                  reject(err)
              })
        })

    },

};

const mutations = {
    friendData_status_request(state) {
        state.status = "loading";
    },

    friendData_view(state, userFriends, userRequests, userBestFriends) {
        state.status = "sucess";
        state.userFriends = userFriends;
        state.userRequests = userRequests;
        state.userBestFriends = userBestFriends;
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