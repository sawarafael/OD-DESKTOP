import http from "./../../services/http";

const state = {
  status: "",
  token: localStorage.getItem("token") || "",
  user: {}
};

const getters = {
  isLoggedIn: state => !!state.token,
  authStatus: state => state.status
};

const actions = {
  login({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit("auth_request");
      http({
        url: `users/normal/signin`,
        data: user,
        method: "POST"
      })
        .then(resp => {
          const token = resp.data.token;
          const id = resp.data.id;
          const role = resp.data.role;
          localStorage.setItem("token", token);
          http.defaults.headers.common.Authorization = token;
          commit("auth_sucess", token, id, role);
          resolve(resp);
        })
        .catch(err => {
          commit("auth_error");
          localStorage.removeItem("token");
          reject(err);
        });
    });
  },
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      commit("logout");
      localStorage.removeItem("token");
      delete http.defaults.headers.common.Authorization;
      resolve();
    });
  }
};

const mutations = {
  auth_request(state) {
    state.status = "loading";
  },
  auth_sucess(state, token, id, role) {
    state.status = "sucess";
    state.token = token;
    state.id = id;
    state.role = role;
  },
  auth_error(state) {
    state.status = "error";
  },
  logout(state) {
    state.status = "";
    state.token = "";
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
