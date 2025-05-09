import { useContext } from "react"
import { AuthContext } from "../contexts/authContext";

export function useAuth() {

    const context = useContext(AuthContext);
    return context

};