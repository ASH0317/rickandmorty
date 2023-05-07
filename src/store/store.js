import { createStore } from 'redux';
import rootReducer from './reducers';
import { setLocalStorage } from '../utils/localStorage/localStorage'

const store = createStore(rootReducer);

store.subscribe(() => {
    setLocalStorage('character', store.getState().favoriteCharacterReducer)
    setLocalStorage('episode', store.getState().favoriteEpisodeReducer)
    setLocalStorage('location', store.getState().favoriteLocationReducer)
});

export default store;