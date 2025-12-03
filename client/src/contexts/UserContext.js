import { createContext } from "react";

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

export default UserContext;