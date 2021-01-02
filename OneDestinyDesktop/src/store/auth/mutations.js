/*
export function someMutation (state) {
}
*/

export function LOGAR_USER(state, { token, user }) {
  state.token = token;
  state.user = user;
}

export function DESLOGAR_USER(state) {
  state.token = null;
  state.user = {};
}
