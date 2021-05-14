import React, {useContext} from 'react';
import {AuthContext} from "../../auth/AuthContext";
import {types} from "../../types/types";

export const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext);

    const lastPath = localStorage.getItem('lastPath') || '/'

    function handleLogin() {

        dispatch({
            type: types.LOGIN,
            payload: {
                name: 'Eduardo'
            }
        })

        history.replace(lastPath)
    }

    return (
        <div className={'container mt-5'}>
            <h1>Login</h1>
            <hr/>

            <button
                type={'button'}
                className={'btn btn-primary'}
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    );
};