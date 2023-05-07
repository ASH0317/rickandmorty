import { ADD_EPISODE_TO_FAVORITE, REMOVE_EPISODE_TO_FAVORITE } from "../constants/actionTypes";
import { getLocalStorage } from "../../utils/localStorage/localStorage";

const initialStateEpisode = getLocalStorage('episode');

const favoriteEpisodeReducer = (state = initialStateEpisode, action) => {
    switch (action.type) {
        case ADD_EPISODE_TO_FAVORITE:
            return {
                ...state,
                ...action.payload
            }
        case REMOVE_EPISODE_TO_FAVORITE:
            const { [action.payload]: obj, ...rest } = state
            return {
                ...rest
            }

        default:
            return state;
    }
};



export default favoriteEpisodeReducer;