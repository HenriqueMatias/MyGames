export default {
    
    changeTurn(context, payload) {
        context.commit('changeTurn', payload);
    },
    addPlayers(context, payload) {
        context.commit('addPlayers', payload);
    },
    increaseScore(context, payload) {
        context.commit('increaseScore', payload);
    },
    startNewMatch(context) {
        context.commit('startNewMatch');
    },
    resetMatrix(context) {
        context.commit('resetMatrix');
    }
};