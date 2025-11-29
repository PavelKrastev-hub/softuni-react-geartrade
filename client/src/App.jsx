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

function App() {
    const [registeredUsers, setRegisteredUsers] = useState([]);
    const [user, setUser] = useState(null);

    const registerHandler = (email, username, password) => {
        if (registeredUsers.some(user => user.email === email)) {
            throw new Error('This email already exists!');
        }

        if (registeredUsers.some(user => user.username === username)) {
            throw new Error('This username already exists!');
        }

        const newUser = { email, password, username };

        setRegisteredUsers((state) => [...state, { email, username, password }]);

        setUser(newUser);
    }

    const loginHandler = (email, password) => {
        const user = registeredUsers.find(user => user.email === email && user.password === password);

        if (!user) {
            throw new Error('Invalid email or password!');
        }

        setUser(user);
    };

    const logoutHandler = () => {
        setUser(null);
    };

    return (
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
                    <Route path="/parts/:partId/details" element={<Details />} />
                    <Route path="/parts/:partId/edit" element={<EditPart />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}

export default App;
