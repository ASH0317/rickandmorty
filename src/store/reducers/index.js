import { combineReducers } from "redux";
import favoriteCharacterReducer from "./favoriteCharacterReducer";
import favoriteEpisodeReducer from "./favoriteEpisodeReducer";
import favoriteLocationReducer from "./favoriteLocationReducer";
// import searchCharacterReducer from "./searchCharacterReducer";

export default combineReducers({
    favoriteCharacterReducer,
    favoriteEpisodeReducer,
    favoriteLocationReducer,
    // searchCharacterReducer

});