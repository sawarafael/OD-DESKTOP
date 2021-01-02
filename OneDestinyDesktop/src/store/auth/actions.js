import http from "./../../services/http";

/*
export function someAction (context) {
}
*/

// export function efetuarLogin({ commit }, user) {
//   return new Promise((resolve, reject) => {
//     http
//       .post("users/normal/signin", user)
//       .then(response => {
//         commit("LOGAR_USER", {
//           token: response.data.acess_token,
//           user: response.data.user
//         });
//         resolve(response.data);
//       })
//       .catch(err => {
//         console.log(err);
//         reject(err);
//       });
//   });
// }

export function efetuarLogin({ commit }, user) {
    return new Promise((resolve, reject) => {
      http
        .post("users/normal/signin", user)
        .then((response) => {
          commit("LOGAR_USER", {
            token: response.data.token,
            user: response.data.user
          })
          localStorage.setItem('token', response.data.token);
          resolve(response.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  }