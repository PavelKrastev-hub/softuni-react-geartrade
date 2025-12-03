import { Routes, Route } from "react-router";
import Home from "./components/home/Home.jsx";
import Login from "./components/login/Login.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Catalog from "./components/catalog/Catalog.jsx";
import Register from "./components/register/Register.jsx";
import AboutUs from "./components/about/aboutUs.jsx";
import Create from "./components/createPart/CreatePart.jsx";
import { useState } from "react";
import Logout from "./components/logout/Logout.jsx";
import Details from "./components/details/Details.jsx";
import EditPart from "./components/edit/Edit.jsx";
import UserContext from "./contexts/userContext.js";

function App() {
    const [user, setUser] = useState(null);

    const registerHandler = async (email, username, password) => {
        const newUser = { email, password, username };

        const response = await fetch('http://localhost:3030/users/register', {
            method: 'POST',
            headers: {

                'content-type': 'application/json',
            },
            body: JSON.stringify(newUser)
        });

        const result = await response.json();

        console.log(result);

        setUser(newUser);
    }

    const loginHandler = (email, password) => {

        if (!user) {
            throw new Error('Invalid email or password!');
        }

        setUser(user);
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
                        <Route path="/login" element={<Login onLogin={loginHandler} />} />
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
