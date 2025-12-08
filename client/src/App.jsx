import { Routes, Route } from "react-router";

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
import { useContext } from "react";
import UserContext from "./contexts/UserContext.jsx";
import Profile from "./components/Profile/Profile.jsx";

function App() {
    const { user } = useContext(UserContext)
    return (
        <>
            <div className="app-container">
                <Header user={user} />

                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/parts" element={<Catalog />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/parts/create" element={<Create />} />
                        <Route path="/parts/:partId/details" element={<Details user={user} />} />
                        <Route path="/parts/:partId/edit" element={<EditPart />} />
                        <Route path="/users/:userId/profile" element={<Profile />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </>
    );
}

export default App;
