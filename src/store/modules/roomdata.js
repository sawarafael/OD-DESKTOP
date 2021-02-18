import http from "./../../services/http";

const id = localStorage.getItem("id");
const token = localStorage.getItem("token");

const state = {
  roomID: {},
  roomName: {},
  roomStatus: ""
};

const getters = {
  roomID: state => state.roomID,
  roomName: state => state.roomName,
  roomStatus: state => state.roomStatus
};

const actions = {
  fetchRoomPlaying({ commit }) {
    return new Promise(() => {
      http({
        url: `room/view/playing/?id=${id}`,
        method: "GET",
        headers: {
          Authorization: `${token}`
        }
      })
        .then(resp => {
          const roomData = {
            roomID: resp.data.room.map(room => room.id),
            roomName: resp.data.room.map(room => room.roomName)
          };
          console.log(roomData);
          commit("roomIDData", roomData.roomID);
          commit("roomNameData", roomData.roomName);
        })
        .catch(error => {
          commit("roomDataError", "error");
          throw error;
        });
    });
  }
};

const mutations = {
  roomIDData(state, roomID) {
    state.roomStatus = "RoomIDSucess";
    state.roomID = roomID;
  },
  roomNameData(state, roomName) {
    state.roomStatus = "roomNameSucess";
    state.roomName = roomName;
  },
  roomDataError(state) {
    state.roomStatus = "error";
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
