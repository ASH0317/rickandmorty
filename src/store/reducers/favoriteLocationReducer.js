import { ADD_LOCATION_TO_FAVORITE, REMOVE_LOCATION_TO_FAVORITE } from "../constants/actionTypes";
import { getLocalStorage } from "../../utils/localStorage/localStorage";

const initialStateLocation = getLocalStorage('location');

const favoriteLocationReducer = (state = initialStateLocation, action) => {
    switch (action.type) {
        case ADD_LOCATION_TO_FAVORITE:
            return {
                ...state,
                ...action.payload
            }
        case REMOVE_LOCATION_TO_FAVORITE:
            const { [action.payload]: obj, ...rest } = state
            return {
                ...rest
            }

        default:
            return state;
    }
};



export default favoriteLocationReducer;