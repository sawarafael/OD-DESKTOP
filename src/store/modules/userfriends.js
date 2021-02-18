import http from "./../../services/http";

const id = localStorage.getItem("id");
const token = localStorage.getItem("token");

const state = {
    status: "",
    userFriends: {},
    userRequests: {},
    userBFRequests: {},
    userBestFriends: {}
};

const getters = {
    allUserFriends: state => state.userFriends,
    allUserRequests: state => state.userRequests,
    allUserBFRequests: state => state.userBFRequests,
    allUserBestFriends: state => state.userBestFriends,
    countUserBestFriends: state => {
        return state.userBestFriends.length
    }
}

const actions = {

  seeFriendData({ commit }) {
      return new Promise(() => {
          commit("friendData_status_request");
          http({
              url: `users/normal/friend/view/all/?id=${id}`,
              method: "GET",
              headers: {
               'Authorization': `${token}`
              }
          })
          .then(resp => {
           http({
             url: `users/normal/bestfriend/view/all/?id=${id}`,
             method: "GET",
             headers: {
               'Authorization': `${token}`
             }
           }).then((respo) => {  
            
          function getAllRequests(id, friendL, friendD) {
              const arrayToReturn = [];
              const filteredArray = friendL.map(objeto =>  {
                  const requerido = id.includes(objeto.useridRequerido);
                  if (objeto.useridrelacao === 1 && requerido){
                      return objeto.useridRequerente;
                  }
              });
              
              for (const objeto of filteredArray) {
                  if (objeto) {
                      arrayToReturn.push(objeto);
                  }
              } 
              const filterFriendData = friendD.filter(objeto => {
                return arrayToReturn.includes(objeto.id)
              })

              return filterFriendData;  
          }
          
          function getAllBFRequests(id, bfriendL, bfriendD) {
              const arrayToReturn = [];
              const filteredArray = bfriendL.map(objeto =>  {
                const requerido = id.includes(objeto.idUserOne);
                if (objeto.statusCode === 3 && requerido){
                    return objeto.idUserTwo;
                }
            });
            
            for (const objeto of filteredArray) {
                if (objeto) {
                    arrayToReturn.push(objeto);
                }
            } 
            const filterFriendData = bfriendD.filter(objeto => {
              return arrayToReturn.includes(objeto.id)
            })

            return filterFriendData;
          }

          function getAllFriends(id, friendL, friendD) {
              const arrayToReturn = [];
              const filteredArray = friendL.map(objeto =>  {
                  const requerente = id.includes(objeto.useridRequerente);
                  const requerido = id.includes(objeto.useridRequerido);
                  if (objeto.useridrelacao === 2 && (requerente || requerido)){
                      return requerido ? objeto.useridRequerente : objeto.useridRequerido;
                  }
              });
              for (const objeto of filteredArray) {
                  // Check for other properties here if wanted
                  if (objeto) {
                      arrayToReturn.push(objeto);
                  }
              }
              const filterFriendData = friendD.filter(objeto => {
                  return arrayToReturn.includes(objeto.id)
              })           
              return filterFriendData;  
          }

          function getAllBestFriends(id, friendL, friendD) {
              const arrayToReturn = [];
              const filteredArray = friendL.map(objeto =>  {
                  const requerente = id.includes(objeto.useridRequerente);
                  const requerido = id.includes(objeto.useridRequerido);
                  if (objeto.useridrelacao === 4 && (requerente || requerido)){
                      return requerido ? objeto.useridRequerente : objeto.useridRequerido;
                  }
              });
              for (const objeto of filteredArray) {
                  // Check for other properties here if wanted
                  if (objeto) {
                      arrayToReturn.push(objeto);
                  }
              }
              const filterFriendData = friendD.filter(objeto => {
                  return arrayToReturn.includes(objeto.id)
              })           
              return filterFriendData;  
          }
          

          commit("requestFriend_view", getAllRequests(id, resp.data.friendL, resp.data.friendData))
          commit("requestsBestFriend_view", getAllBFRequests(id, respo.data.bfriendList, respo.data.bfriendData))
          commit("friendData_view", getAllFriends(id, resp.data.friendL, resp.data.friendData))
          commit("friendData_best_view", getAllBestFriends(id, resp.data.friendL, resp.data.friendData))

          

          console.log(respo.data)
          console.log("     ")
          console.log(getAllBFRequests(id, respo.data.bfriendList, respo.data.bfriendData))
          console.log("     ")
        })
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
                reject(err);
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
          resolve(resp);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  
  acceptBFriend({ commit }, add) {
    return new Promise((resolve, reject) => {
      commit("friendData_status_request");
      http({
        url: `users/normal/bestfriend/update/4`,
        method: "PATCH",
        data: add,
        headers: {
         'Authorization': `${token}`
        }
      })
        .then(resp => {
          resolve(resp);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  refuseFriend({ commit }, ref) {
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
          resolve(resp);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  upgradeFriend({ commit }, upg) {
    return new Promise((resolve, reject) => {
      commit("friendData_status_request");
      http({
        url: `users/normal/bestfriend/view/all/?id=${id}`,
        method: "GET",
        headers: {
          'Authorization': `${token}`
        }
      })
        .then((ex) => {
          ex.data.bfriendList.filter((tr) => {
            if(id.includes(tr.idUserOne)) { 
              http({
                url: `users/normal/bestfriend/update/3`,
                method: "PATCH",
                data: upg,
                headers: {
                  'Authorization': `${token}`
                }
              })
                .then(resp => {
                  resolve(resp);
                })
                .catch(err => {
                  reject(err);
                });
            } else {
                    
              http({
                url: `users/normal/bestfriend/request`,
                method: "POST",
                data: upg,
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
            }
          })
        })  
      })
  },  

  blockFriend({ commit }, blo) {
    return new Promise((resolve, reject) => {
      commit("friendData_status_request");
      http({
        url: `users/normal/friend/update/6`,
        method: "PATCH",
        data: blo,
        headers: {
          'Authorization': `${token}`
        }
      })
        .then(resp => {
          resolve(resp);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
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

    requestsBestFriend_view(state, userBFRequests) {
        state.status = "sucess";
        state.userBFRequests = userBFRequests
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
};
