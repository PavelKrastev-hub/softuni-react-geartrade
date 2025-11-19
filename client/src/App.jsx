import { Routes, Route } from "react-router";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Catalog from "./components/Catalog.jsx";

function App() {
    return (
        <div className="app-container">
            <Header />

            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/parts/catalog" element={<Catalog />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}

export default App;
