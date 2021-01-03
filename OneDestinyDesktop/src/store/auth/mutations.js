/*
export function someMutation (state) {
}
*/

export function LOGAR_USER(state, { token, id }) {
  state.token = token;
  state.id = id;
}

export function DESLOGAR_USER(state) {
  state.token = null;
  state.id = {};
}
