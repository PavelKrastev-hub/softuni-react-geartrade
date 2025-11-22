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

function App() {
    const [user, setUser] = useState(null);

    const authHandler = (email) => {
        setUser({
            email,
        })
    }

    return (
        <div className="app-container">
            <Header user={user} />

            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login onLogin={authHandler}/>} />
                    <Route path="/register" element={<Register onRegister={authHandler} />} />
                    <Route path="/parts/catalog" element={<Catalog />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/parts/create" element={<Create />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}

export default App;
