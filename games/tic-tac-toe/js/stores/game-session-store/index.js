
import actions from './actions.js';
import mutations from './mutations.js';
import state from './state.js';
import GameSessionStore from './store.js';

export default new GameSessionStore({
    actions,
    mutations,
    state
});