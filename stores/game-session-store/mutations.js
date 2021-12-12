

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
    return state.players = playersList;
  }
};