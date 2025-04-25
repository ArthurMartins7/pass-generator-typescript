import * as authResource from '../core/auth/authResource';


export const signin = (email, password) => {
   return authResource.signin(email, password).then((response) => response.data);
};

export const signup = (data) => {
    return authResource.signup(data).then((response) => response.data);
};

export const signout = () => {
    return authResource.signout().then((response) => response.data);
};