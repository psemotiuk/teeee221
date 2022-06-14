import {
    IUserState,
    UserAction,
    UserLoginActionTypes,
    UserLogoutActionTypes,
    UserRegistrActionTypes
} from "../../types/userTypes";

const initialState: IUserState = {
    name: '',
    email: '',
    role: ''
}

export const userReducer = (state: IUserState = initialState, action: UserAction): IUserState => {
    switch (action.type) {
        case UserLoginActionTypes.LOGIN:
            return {...state}
        case UserLoginActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                email: action.payload.email,
                name: action.payload.name,
                role: action.payload.role
            }
        case UserLoginActionTypes.LOGIN_FAIL:
            return {...state}
        case UserLogoutActionTypes.LOGOUT:
        case UserLoginActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                email: '',
                name: '',
                role: 'action.payload.role'
            }
        case UserLoginActionTypes.LOGIN_FAIL:
            return {...state}
        case UserRegistrActionTypes.REGISTR:
            return {...state}
        case UserRegistrActionTypes.REGISTR_SUCCESS:
            return {
                ...state,
                email: action.payload.email,
                name: action.payload.name,
                role: action.payload.role
            }
        case UserRegistrActionTypes.REGISTR_FAIL:
            return {...state}
        default:
            return state
    }
}
