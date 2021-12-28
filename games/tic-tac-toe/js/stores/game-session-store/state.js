import Player from "../../../../../common/Player.js"
import TYPES from  "./types.js";

export default {
    players: [new Player("Player One", "x"), new Player("Player Two", "o")],
    turn: 0,
    gameStatus: TYPES.GAME_STATUS_TYPES.NEW_GAME,
    matrix : {'x': [], 'o': []}
}