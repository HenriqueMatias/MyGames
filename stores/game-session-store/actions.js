export default {
    
    changeTurn(context) {
        context.commit('changeTurn');
    },
    addPlayers(context, payload) {
        context.commit('addPlayers', payload);
    },
    increaseScore(context, payload) {
        context.commit('increaseScore', payload);
    }
};