import TYPES from "./types.js";
import stateDefault from "./state.js";

export default {
  changeTurn(state, payload) {
    let nextTurn = state.turn +1;
    let {spotID, symbol} = payload;
    state.matrix[symbol].push(spotID);  
    if( nextTurn < state.players.length ) {
        state.turn = nextTurn
        return state
    }
    state.turn = 0
    return state;
  },
  addPlayers(state, payload) {
    state.players = payload.players;
    return state;
  },
  increaseScore(state, payload) {
    let playersList = state.players
    let indexPlayer = playersList.findIndex((player) => player.name === payload.name)
    let playerToUpdate = playersList[indexPlayer];
    playerToUpdate.score = playerToUpdate.score + 1;
    playersList[indexPlayer] = playerToUpdate;
    state.players = playersList;
    return state
  },
  resetGame(state) {
    state.turn = 0
    state.players = state.players.map((player) => player.score = 0)
    return state;
  },
  resetMatrix(state) {
    state.matrix = {'x': [], 'o': []};
    return state;
  }
};