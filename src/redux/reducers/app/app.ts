import {
    IS_MOBILE,
} from './types';


const initialState = {
    isMobile: false,
};


export default function (state = initialState, action) {
    switch (action.type) {
        case IS_MOBILE:
            return {
                ...state,
                isMobile: action.payload,
            };
        default:
            return state;
    }
}