export enum AuthUserActionType {
    LOGIN_USER =  "AUTH_LOGIN_USER",
    LUGOUT_USER = "AUTH_LOGOUT_USER",
}

export interface IUser {
    email: string;
    image: string;
}

export interface IAuthUser {
    isAuth: boolean;
    user?: IUser;
}