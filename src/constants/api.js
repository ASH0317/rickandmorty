export const BASE_URL = 'https://rickandmortyapi.com/api/';


const CHARACTER = 'character/';
export const LOCATION = 'location/';
const EPISODE = 'episode/';

export const API_PARAM_PAGE = '/?page='

export const API_PARAM_NAME = 'name='
export const API_PARAM_STATUS = '?status='
export const API_PARAM_SPECIES = '?species='
export const API_PARAM_GENDER = '?gender='



export const API_CHARACTER = BASE_URL + CHARACTER + API_PARAM_PAGE;
export const API_EPISODE = BASE_URL+EPISODE + API_PARAM_PAGE;
export const API_LOCATION = BASE_URL+LOCATION + API_PARAM_PAGE;
export const API_PERSON = BASE_URL + CHARACTER;
export const API_EPISODEINFO = BASE_URL + EPISODE;
export const API_LOCATIONINFO = BASE_URL + LOCATION;
