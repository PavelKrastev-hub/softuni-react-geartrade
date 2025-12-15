import { createContext, useContext } from "react";
import useRequest from "../hooks/useRequest.js";
import useLocalStorage from "../hooks/useLocalStorage.js";
import { useNavigate } from "react-router";

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
    const navigate = useNavigate();
    const [user, setUser] = useLocalStorage(null, 'auth');
    const { request } = useRequest();

    const registerHandler = async (email, username, fullName, country, password, imageUrl) => {
        const newUser = { email, password, username, fullName, country, imageUrl };

        const result = await request('/users/register', 'POST', newUser);

        const safeUser = {
            email,
            username,
            fullName,
            country,
            imageUrl,
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
            fullName: result.fullName,
            country: result.country,
            imageUrl: result.imageUrl,
            id: result._id,
            accessToken: result.accessToken
        }

        setUser(safeUser);
    };

    const logoutHandler = async () => {
        if (!user) {
            return
        }

        try {
            await request('/users/logout', 'POST', null, { accessToken: user.accessToken });

            navigate('/');
            setUser(null);
        } catch (error) {
            alert(error.message);
        }
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