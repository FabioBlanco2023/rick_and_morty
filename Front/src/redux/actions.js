<<<<<<< HEAD:Front/src/redux/actions.js
import axios from "axios";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const GET_CHARACTER_DETAIL = "GET_CHARACTER_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const GET_FAVORITES = 'GET_FAVORITES'

//export const addFavorite = (character) => {
    //return { type: ADD_FAVORITE, payload: character };
//};
export const removeFavorite = (id) => {
 return { type: REMOVE_FAVORITE, payload: id };
};

export const getCharacterDetail = (id) => {
    return async function (dispatch) {
        const URL_BASE = "http://localhost:3001";
        const response = await axios.get(`${URL_BASE}/detail/${id}`)
        dispatch ({ type: GET_CHARACTER_DETAIL, payload: response.data });
    };
};

export const getFavorites = () => {
    return async function(dispatch){
        const URL_BASE = "http://localhost:3001";
        const response = await axios.get(`${URL_BASE}/rickandmorty/fav`);
        dispatch({type: GET_FAVORITES, payload: response.data });
    };
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};


=======
export const ADD_FAVORITE = "ADD_FAVORITE"
export const REMOVE_FAVORITE = "REMOVE_FAVORITE"

export const addFavorite = (character) => {
    return { type: ADD_FAVORITE, payload: character }
}

export const removeFavorite = (id) => {
    return { type: REMOVE_FAVORITE, payload: id }
}
>>>>>>> abeed3f355627283cfd9e5dd19b3922364bd1207:src/redux/actions.js

