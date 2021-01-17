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
    allUserBestFriends: state => state.userBestFriends,
    countUserBestFriends: state => {
        return state.userBestFriends.length
    }
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

            const onlyRequests = resp.data.friendList.filter((reqs) => {
                return reqs.statusCode === 1
            });

            const onlyFriends = resp.data.friendList.filter((fres) => {
                return fres.statusCode === 2
            });
            
            const onlyBestFriends = resp.data.friendList.filter((best) => {
                return best.statusCode === 3
            })
            
            if(resp.data.friendsOne) {

                const filtf = onlyFriends.map((x) => x.idUserTwo)
                const filtbf = onlyBestFriends.map((y) => y.idUserTwo)
                const filtr = onlyRequests.map((z) => z.idUserTwo)
                
                const filtFriend = resp.data.friendsOne.filter(el => {
                    return filtf.includes(el.id)
                }) 

                const filtbFriends = resp.data.friendsOne.filter(el => {
                    return filtbf.includes(el.id)
                }) 

                const filtRequests = resp.data.friendsOne.filter(el => {
                    return filtr.includes(el.id)
                })

                commit("friendData_view", filtFriend)
                commit("friendData_best_view", filtbFriends)
                commit("requestFriend_view", filtRequests)
                

            } else if (resp.data.friendsTwo) {
                
                const filf = onlyFriends.map((x) => x.idUserOne)
                const filbf = onlyBestFriends.map((x) => x.idUserOne)
                const filr = onlyRequests.map((x) => x.idUserOne)

                const filFriend = resp.data.friendsTwo.filter(el => {
                    return filf.includes(el.id)
                })

                const filbFriend = resp.data.friendsTwo.filter(el => {
                    return filbf.includes(el.id)
                })

                const filRequest = resp.data.friendsTwo.filter(el => {
                    return filr.includes(el.id)
                })

                commit("friendData_view", filFriend)
                commit("friendData_best_view", filbFriend)
                commit("requestFriend_view", filRequest)                

                 console.log(filf)
            }
            
           console.log(resp.data)
            console.log("\n Requests:  \n ", onlyRequests , 
            "\n Friends:   \n" , onlyFriends , 
            "\n BFriends:  \n" , onlyBestFriends)
            // console.log( "id usuario atual: " + id , "\n" ,  onlyRequests)
           })
           .catch(err => {
               reject(err)
           })
       })
   },

    requestFriend({ commit }, num) {
        return new Promise((resolve, reject) => {
            commit("friendData_status_request");
            
            /*
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
              */
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
                url: `users/normal/friend/update/2`,
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

    requestFriend_view(state, userRequests) {
        state.status = "sucess"
        state.userRequests = userRequests
    },

    friendData_view(state, userFriends) {
        state.status = "sucess";
        state.userFriends = userFriends;
    },

    friendData_best_view(state, userBestFriends) {
        state.staus = "sucess";
        state.userBestFriends = userBestFriends
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