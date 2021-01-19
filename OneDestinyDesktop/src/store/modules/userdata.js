import http from "./../../services/http";

const id = localStorage.getItem("id");
const token = localStorage.getItem("token");

const state = {
  userID: {},
  userName: {},
  userDatum: {},
  status: ""
};

const getters = {
  userID: state => state.userID,
  userName: state => state.userName,
  userDatum: state => state.userDatum
};

const actions = {
  fetchUser({ commit }) {
    return new Promise(() => {
      http({
        url: `users/normal/dataview/id?id=${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(resp => {
        const userData = {
          userID: resp.data.userd.map(user => user.id),
          userName: resp.data.userd.map(user => user.username),
          userDatum: resp.data.userd.map(user => user.userdatum)
        };
        console.log(userData);
        commit("userIDData", userData.userID);
        commit("userNameData", userData.userName);
        commit("userDatumData", userData.userDatum);
      });
    });
  }
};

const mutations = {
  userIDData(state, userID) {
    state.status = "IDsucess";
    state.userID = userID;
  },
  userNameData(state, userName) {
    state.status = "usernameSucess";
    state.userName = userName;
  },
  userDatumData(state, userDatum) {
    state.status = "userDatumSucess";
    state.userDatum = userDatum;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

/// Criar mutations individuais para pegar os dados!!
