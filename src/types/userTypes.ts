export interface IUserState {
    name: string;
    email: string;
    role: string
}

export enum UserActionTypes {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
    REGISTER = 'REGISTER'
}

export enum UserLoginActionTypes {
    LOGIN = 'LOGIN',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_FAIL = 'LOGIN_FAIL'
}

export enum UserLogoutActionTypes {
    LOGOUT = 'LOGOUT',
    LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
    LOGOUT_FAIL = 'LOGOUT_FAIL'
}

export enum UserRegistrActionTypes {
    REGISTR = 'REGISTR',
    REGISTR_SUCCESS = 'REGISTR_SUCCESS',
    REGISTR_FAIL = 'REGISTR_FAIL'
}

export interface ILoginAction {
    type: UserLoginActionTypes.LOGIN
}

export interface ILoginSuccessAction {
    type: UserLoginActionTypes.LOGIN_SUCCESS,
    payload: IUser
}

export interface ILoginFailAction {
    type: UserLoginActionTypes.LOGIN_FAIL,
    payload: string
}

export interface ILogoutAction {
    type: UserLogoutActionTypes.LOGOUT
}

export interface ILogoutSuccessAction {
    type: UserLogoutActionTypes.LOGOUT_SUCCESS,
}

export interface ILogoutFailAction {
    type: UserLogoutActionTypes.LOGOUT_FAIL,
    payload: string
}

export interface IRegisterAction {
    type: UserRegistrActionTypes.REGISTR
}

export interface IRegistrSuccessAction {
    type: UserRegistrActionTypes.REGISTR_SUCCESS,
    payload: IUser
}

export interface IRegistrFailAction {
    type: UserRegistrActionTypes.REGISTR_FAIL,
    payload: string
}

export type UserAction = ILoginAction | ILoginSuccessAction | ILoginFailAction |
    ILogoutAction | ILogoutSuccessAction | ILogoutFailAction |
    IRegisterAction | IRegistrSuccessAction | IRegistrFailAction

export interface IUser {
    name: string;
    email: string;
    role: string
}
