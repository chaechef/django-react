import axios from 'axios'
export const FETCH_CHIKHEN = 'FETCH_CHIKHEN';

export const fetchChicken = (data) => {
    return {
        type: FETCH_CHIKHEN,
        data
    }
  }
  
export const fetchChickens = () => {
    return (dispatch) => {
        return axios.get('http://localhost:8000/api/')
            .then(response => {
                dispatch(fetchChicken(response.data))
            })
            .catch(error => {
                throw(error);
            });
    }
}