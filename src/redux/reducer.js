import { LOGIN_USER, LOGIN_FAILED, REGISTER_USER, FORGOT_PASSWORD, GET_ALL_PRODUCTS, CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, LOGOUT} from './actions';

const estadoinicial = {
    userLogged: {},
    loginMessage: '',
    registerMessage: '',
    allProducts: []
}

const rootReducer = (state = estadoinicial, action) => {
    switch(action.type){
        case LOGIN_USER:
            return { ...state, userLogged: action.payload, loginMessage: 'Success!', registerMessage: ''};
        case LOGIN_FAILED:
            return { ...state, loginMessage: action.payload.message, registerMessage: ''};
        case LOGOUT:
            return { ...state, userLogged: {}, loginMessage: '', registerMessage: ''};
        case REGISTER_USER:
            return { ...state, registerMessage: action.payload.message};
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