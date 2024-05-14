import axios from 'axios';
//USER ACTIONS
export const LOGIN_USER = 'LOGIN_USER';
export const REGISTER_USER = 'REGISTER_USER';
export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';

//PRODUCTS ACTIONS 
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

//USER FUNCTIONS
export function loginUser(user){
    //Falta pasarle por body username y password
    const endPoint = '/authUser';
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endPoint, user);
            dispatch({
                type: LOGIN_USER,
                payload: data
            })
        } catch (error) {
            console.log(error);
            return{ error: error.message };
        }
    }
}

export function registerUser(user){
    //pasarle por body username, password y description
    const endPoint = '/user';
    return async (dispatch) => {
        try {
            const { data } = await axios.post(endPoint, user);
            dispatch({
                type: REGISTER_USER,
                payload: data
            });
    } catch (error){
        console.log(error);
        return{ error: error.message };
    }
}}

export function forgotPassword (user){
    const endPoint = '/forgotPassword';
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endPoint, user);
            dispatch({
                type: FORGOT_PASSWORD,
                payload: data
            });
        } catch (error){
            console.log(error);
            return{ error: error.message };
        }
    }
}

//PRODUCTS FUNCTION

export function getAllProducts (){
    const endPoint = '/product';
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endPoint);
            dispatch({
                type: GET_ALL_PRODUCTS,
                payload: data
            });
        } catch (error){
            console.log(error);
            return{ error: error.message };
        }
    }
}