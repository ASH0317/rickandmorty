import { ADD_CHARACTER_TO_FAVORITE, REMOVE_CHARACTER_TO_FAVORITE } from "../constants/actionTypes";
import { getLocalStorage } from "../../utils/localStorage/localStorage";

const initialStateCharacter = getLocalStorage('character');

const favoriteCharacterReducer = (state = initialStateCharacter, action) => {
    switch (action.type) {
        case ADD_CHARACTER_TO_FAVORITE:
            return {
                ...state,
                ...action.payload
            }
        case REMOVE_CHARACTER_TO_FAVORITE:
            const { [action.payload]: obj, ...rest } = state
            return {
                ...rest
            }

        default:
            return state;
    }
};



export default favoriteCharacterReducer;