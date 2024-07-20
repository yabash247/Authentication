import {createContext, useContext, useState} from "react";

type authContextType = {
    user: boolean;
    login: () => void;
    logout: () => void;
};

const authContextDefaultValues: authContextType = {
    user: true,
    login: () => {},
    logout: () => {},
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
    return useContext(AuthContext);
}

