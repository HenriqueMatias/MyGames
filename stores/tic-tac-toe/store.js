import StoreModel from "../../webcore/StoreModel.js";
import TYPES from "./types.js";

export default class GameSessionStore extends StoreModel {
    
    constructor(options) {
        super(options);
    }

    getCurrentTurnPlayer() {
        let turn = this.getState().turn
        return this.getState().players[turn]
    }

    getPlayers() {
        return this.state.players
    }

    isANewMatch() {
        return this.state.gameStatus == TYPES.GAME_STATUS_TYPES.NEW_MATCH
    }
}