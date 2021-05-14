import React, {useEffect, useReducer} from 'react';
import {AppRouter} from "./routers/AppRouter";
import {AuthContext} from "./auth/AuthContext";
import {authReducer} from "./auth/authReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || {logged: false}
}

export const HeroesApp = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init);

    useEffect(() => {
        const setOnLocalStorage = () => {
            localStorage.setItem('user', JSON.stringify(user))
        }
        setOnLocalStorage();
    }, [user]);


    return (
        <AuthContext.Provider value={{
            user,
            dispatch
        }}>
            <AppRouter/>
        </AuthContext.Provider>
    );
};