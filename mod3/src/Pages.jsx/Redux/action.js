import { INFORMATION, SAVE_USER } from "./type";

export const setSaveUserLoger = (userName) => {
    return {
        type: SAVE_USER,
        payload: userName        
    }
};

export const setSaveInformation = (userInformacion) => {
    return {
        type: INFORMATION,
        payload: userInformacion        
    }
};