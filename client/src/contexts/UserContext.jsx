import { createContext, useState } from "react";
import useRequest from "../hooks/useRequest.js";

const UserContext = createContext({
    isAuthenticated: false,
    user: {
        email: '',
        password: '',
        username: '',
        _createdOn: 0,
        _id: '',
        accessToken: '',
    },
    registerHandler() { },
    loginHandler() { },
    logoutHandler() { },
});

export function UserProvider(props) {
    const [user, setUser] = useState(null);
    const { request } = useRequest();

    const registerHandler = async (email, username, password) => {
        const newUser = { email, password, username };

        const result = await request('/users/register', 'POST', newUser);

        console.log(result);

        setUser(newUser);
    }

    const loginHandler = async (email, password) => {
        const result = await request('/users/login', 'POST', { email, password });

        setUser(result);
    };

    const logoutHandler = () => {
        return request('/users/logout')
            .finally(() => setUser(null));
    };

    const userContextValues = {
        user,
        isAuthenticated: !!user?.accessToken,
        loginHandler,
        logoutHandler,
        registerHandler,
    }

    return (
        <UserContext.Provider value={userContextValues}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserContext;