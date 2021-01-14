import http from "./../../services/http";

const id = localStorage.getItem("id");
const token = localStorage.getItem("token");

const state = {
  userData: {},
  status: ""
};

const getters = {
  userData: state => state.userData
};

const actions = {
  fetchUser({ commit }) {
    commit("userDataRequest");
    return new Promise(() => {
      http({
          url: `users/normal/dataview/id?id=${id}`,
          method: "GET",
          headers: {
            'Authorization': `${token}`
          }
        })
        .then(resp => {
          const userData = resp.data;
          commit("userDataView", userData);
        });
    });
  }
};

const mutations = {
  userDataView(state, userData) {
    state.status = "sucess";
    state.userData = userData;
  },
  userDataRequest(state) {
    state.status = "loading";
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
