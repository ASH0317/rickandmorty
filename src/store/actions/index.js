import { ADD_CHARACTER_TO_FAVORITE, REMOVE_CHARACTER_TO_FAVORITE, ADD_EPISODE_TO_FAVORITE, REMOVE_EPISODE_TO_FAVORITE, ADD_LOCATION_TO_FAVORITE, REMOVE_LOCATION_TO_FAVORITE, ADD_CHARACTER_TO_STORE, REMOVE_CHARACTER_TO_STORE } from '../constants/actionTypes'


export const setCharacterToFavorite = character => ({
    type: ADD_CHARACTER_TO_FAVORITE,
    payload: character
})


export const removeCharacterToFavorite = id => ({
    type: REMOVE_CHARACTER_TO_FAVORITE,
    payload: id
})

export const setEpisodeToFavorite = episode => ({
    type: ADD_EPISODE_TO_FAVORITE,
    payload: episode
})


export const removeEpisodeToFavorite = id => ({
    type: REMOVE_EPISODE_TO_FAVORITE,
    payload: id
})

export const setLocationToFavorite = location => ({
    type: ADD_LOCATION_TO_FAVORITE,
    payload: location
})


export const removeLocationToFavorite = id => ({
    type: REMOVE_LOCATION_TO_FAVORITE,
    payload: id
})

// export const setCharacterToStore = info => ({
//     type: ADD_CHARACTER_TO_STORE,
//     payload: info
// })


// export const removeCharacterToStore = id => ({
//     type: REMOVE_CHARACTER_TO_STORE,
//     payload: id
// })


