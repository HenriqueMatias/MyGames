import TYPES from "./types.js";

export default {
  changeTurn(state) {
    let nextTurn = state.turn +1;
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
  startNewGame(state) {
    state.gameStatus = TYPES.GAME_STATUS_TYPES.NEW_GAME;
    return state;
  },
  startNewMatch(state) {
    state.gameStatus = TYPES.GAME_STATUS_TYPES.NEW_MATCH;
    return state;
  }
};