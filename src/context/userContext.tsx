import { createContext, useEffect, useState } from "react";
import api from "../api";
import { toast } from "react-toastify";


export const UserContext = createContext({} as any);

export const UserStorage = ({ children }: any) => {

    const [create, setCreate] = useState(false);
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState({});
    const [token, setToken] = useState(localStorage.getItem('token') as string);

    const createUser = (name: string, email: string, password: string) => {
        api.post('/user/sign-up', {name, email, password}).then(() => {
            setCreate(true);
            console.log('usuário criado com sucesso!');
        }).catch((error) => {
            console.log('Erro na criação de conta...', error)
        })
    }

    const getUser = (token: string) => {
        api.get('/user/get-users', {headers:{"Authorization": `${token}`}}).then(({data}) => {
            console.log(data);
            setUser(data.user);
            setLogin(true);
        }).catch((error) => {
            console.log('Usuário não autentificado', error)
        })
    }

    useEffect(() => {
        getUser(token);
    }, [token]);

    const logOut = () => {
        localStorage.removeItem('token');
        setLogin(false);
        setUser({});
    }

    const handleLogin = (email: string, password: string) => {
        api.post('/user/sign-in', {email, password}).then(({ data }) => {
            setLogin(true);
            localStorage.setItem('token', data.token);
            setToken(data.token);
            console.log('Usuário logado com sucesso');
            // getUser(data.token);
        }).catch((error) => {
            console.log('Erro no login', error);
        })
    }

    return (
        <UserContext.Provider value={{
            create,
            login,
            user,
            token,
            handleLogin,
            logOut,
            createUser,
            getUser
        }}>
            {children}
        </UserContext.Provider>
    )
}