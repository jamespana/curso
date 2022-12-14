import { INFORMATION, SAVE_USER } from "./type";

const initialSate = {
    user_loged: '',
    information: "",
};

const userReducer = (state = initialSate, action) => {
    switch (action.type) {
        case SAVE_USER: {
            return {
                ...state,
                user_loged: action.payload,
            }
        }
        case INFORMATION: {
            return {
                ...state,
                information: action.payload,
            }
        }        
        default:
            return state;
    }
};

export default userReducer;