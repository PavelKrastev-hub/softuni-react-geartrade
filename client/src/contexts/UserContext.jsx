import { createContext, useContext } from "react";
import useRequest from "../hooks/useRequest.js";
import useLocalStorage from "../hooks/useLocalStorage.js";

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
    const [user, setUser] = useLocalStorage(null, 'auth');
    const { request } = useRequest();

    const registerHandler = async (email, username, password) => {
        const newUser = { email, password, username };

        const result = await request('/users/register', 'POST', newUser);

        const safeUser = {
            email,
            username,
            id: result._id,
            accessToken: result.accessToken
        }

        setUser(safeUser);
    }

    const loginHandler = async (email, password) => {
        const result = await request('/users/login', 'POST', { email, password });

        const safeUser = {
            email,
            username: result.username,
            id: result._id,
            accessToken: result.accessToken
        }

        setUser(safeUser);
    };

    const logoutHandler = () => {
        return request('/users/logout', null, null, { accessToken: user.accessToken })
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

export function useUserContext() {
    const contextData = useContext(UserContext);

    return contextData;
}

export default UserContext;