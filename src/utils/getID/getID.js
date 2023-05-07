import { API_PARAM_PAGE } from "../../constants/api"

export const getCharacterPageId = (url) => {
    const pos = url.lastIndexOf(API_PARAM_PAGE);
    const id = url.slice(pos+API_PARAM_PAGE.length, url.length);

    return Number(id);
}