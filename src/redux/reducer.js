import { LOGIN_USER, REGISTER_USER, FORGOT_PASSWORD, GET_ALL_PRODUCTS, CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT} from './actions';

const estadoinicial = {
    userLogged: []
}

const rootReducer = (estadoinicial, action) => {
    switch(action.type){
        case LOGIN_USER:
            return ;
        case REGISTER_USER:
            return ;
        case FORGOT_PASSWORD:
            return ;
        case GET_ALL_PRODUCTS:
            return;
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