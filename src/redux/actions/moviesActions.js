import axios from 'axios';
const API_URL = process.env.API_URL || 'https://agile-island-00923.herokuapp.com';


export const loadMoviesAction = () => {
    return dispatch => {
        return axios
            .get(`${API_URL}/movies`)
            .then((response) => {
                dispatch({
                    type: 'LOAD_MOVIES',
                    value: response.data
                })
            })
    }
};




export const searchMoviesAction = (searchKeyword) => {
    return dispatch => {
        return axios
            .get(`${API_URL}/search?searchKeyword=${searchKeyword}`)
            .then((response) => {
                dispatch({
                    type: 'LOAD_MOVIES',
                    value: response.data
                })
            })
    }
};