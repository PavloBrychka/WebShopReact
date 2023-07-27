import { AuthUserActionType, IAuthUser, IUser } from "./types";

const initState: IAuthUser = {
    isAuth: false,
    user: undefined,
};

export const AuthRecuder = (state = initState, action:any): IAuthUser =>{
    switch(action.type){
        case AuthUserActionType.LOGIN_USER:{
            const user = action.pauload as IUser;
            return{
                isAuth: true,
                user: user,
            };

        }
        case AuthUserActionType.LUGOUT_USER: {
            return {
                isAuth:false,
                user:undefined,
            };

            }
        
    }
    return state;
};