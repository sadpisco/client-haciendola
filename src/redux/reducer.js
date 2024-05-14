import { LOGIN_USER, LOGIN_FAILED, REGISTER_USER, FORGOT_PASSWORD, GET_ALL_PRODUCTS, CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, LOGOUT} from './actions';

const estadoinicial = {
    userLogged: {},
    loginMessage: '',
    allProducts: []
}

const rootReducer = (state = estadoinicial, action) => {
    switch(action.type){
        case LOGIN_USER:
            return { ...state, userLogged: action.payload, loginMessage: 'Success!'};
        case LOGIN_FAILED:
            return { ...state, loginMessage: action.payload.message};
        case LOGOUT:
            return { ...state, userLogged: {}, loginMessage: ''};
        case REGISTER_USER:
            return ;
        case FORGOT_PASSWORD:
            return ;
        case GET_ALL_PRODUCTS:
            return { ...state, allProducts: action.payload};
        case CREATE_PRODUCT:
            return;
        case UPDATE_PRODUCT:
            return;
        case DELETE_PRODUCT:
            return;
        default: 
        return {
            ...estadoinicial
        }
    }
}

export default rootReducer;