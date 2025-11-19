import { Routes, Route } from "react-router";
import Home from "./components/home/Home.jsx";
import Login from "./components/login/Login.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Catalog from "./components/catalog/Catalog.jsx";
import Register from "./components/register/Register.jsx";

function App() {
    return (
        <div className="app-container">
            <Header />

            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/parts/catalog" element={<Catalog />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}

export default App;
