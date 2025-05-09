import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,

} from "react";

import { signin, signup } from "../services/authService";
import api from "../controllers/apiController";
import * as localStorage from "../utils/localStorage";

interface AuthContextProps {
    authState?: {
        token: string | null
        authenticated: boolean | null
    }
    onRegister?: (
        name: string,
        email: string,
        password: string,
        confirmPassword: string
    ) => Promise<any>
    onLogin?: (email: string, password: string) => Promise<any>
    onLogout?: () => Promise<any>
}

interface AuthenticatedProps {
    token: string | null
    authenticated: boolean | null
}

interface AuthProviderProps {
    children: React.ReactNode
}

const TOKEN_KEY = "access-token"

export const AuthContext = createContext<AuthContextProps>({})

export function AuthProvider({ children }: AuthProviderProps) {
    //Estado de auth local
    const [authState, setAuthState] = useState<AuthenticatedProps>({
        token: null,
        authenticated: null
    })

    //Responsavel por pegar o token inicial
    useEffect(() => {
        async function loadToken() {

            // pegar o token do localStorage
            const token = await localStorage.getItem(TOKEN_KEY);

            //Se o token existir, adicionar no header da api
            if (token) {
                api.defaults.headers.common["Authorization"] = `${token}`;

                setAuthState({
                    token,
                    authenticated: true,
                });
            }
        };

        loadToken()
    }, [])

    async function register(
        name: string,
        email: string,
        password: string,
        confirmPassword: string
    ) {
        try {
            await signup({ name, email, password, confirmPassword })
        } catch (error) {
            throw error
        }
    };

    async function login(email: string, password: string) {
        try {
            //chamar a função de signin
            const result = await signin(email, password);

            // alterar estado local
            setAuthState({
                authenticated: true,
                token: result.token,
            });

            //add token no header
            api.defaults.headers.common["Authorization"] = `${result.token}`;

            //add token no localStorage
            await localStorage.setItem(TOKEN_KEY, result.token);

            //retornar o resultado
            return result;
        } catch (error) {
            throw error
        }
    };

    async function logout() {
        try {
            await localStorage.removeItem(TOKEN_KEY);

            api.defaults.headers.common["Authorization"] = "";

            //RESETAR ESTADO LOCAL
            setAuthState({
                token: null,
                authenticated: null,
            });

        } catch (error) {
            throw error
        }
    };

    const value = {
        onRegister: register,
        onLogin: login,
        onLogout: logout,
        authState,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

};