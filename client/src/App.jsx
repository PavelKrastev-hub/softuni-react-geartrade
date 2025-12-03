import { Routes, Route } from "react-router";
import { useState } from "react";

import Home from "./components/home/Home.jsx";
import Login from "./components/login/Login.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Catalog from "./components/catalog/Catalog.jsx";
import Register from "./components/register/Register.jsx";
import AboutUs from "./components/about/aboutUs.jsx";
import Create from "./components/createPart/CreatePart.jsx";
import Logout from "./components/logout/Logout.jsx";
import Details from "./components/details/Details.jsx";
import EditPart from "./components/edit/Edit.jsx";
import UserContext from "./contexts/userContext.js";
import useRequest from "./hooks/useFetch.js";

function App() {
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
        setUser(null);
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
            <div className="app-container">
                <Header user={user} />

                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register onRegister={registerHandler} />} />
                        <Route path="/parts" element={<Catalog />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/parts/create" element={<Create />} />
                        <Route path="/logout" element={<Logout onLogout={logoutHandler} />} />
                        <Route path="/parts/:partId/details" element={<Details user={user} />} />
                        <Route path="/parts/:partId/edit" element={<EditPart />} />
                        <Route path="/parts/:partId/comments" element={<Comment />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </UserContext.Provider>
    );
}

export default App;
