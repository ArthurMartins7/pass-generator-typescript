import api from '../../controllers/apiController';

type SignupDTO = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    birthday: string;
}

export const signin = (email, password) => {
    return api.post("/auth/signin", {
        email,
        password,
    });
};

export const signup = (data) => {
    return api.post("/auth/signup", data);
};

export const signout = () => {
    return api.get("auth/signout");
};