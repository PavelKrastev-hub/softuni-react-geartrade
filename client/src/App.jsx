import { Routes, Route } from "react-router";

import Home from "./components/home/Home.jsx";
import Login from "./components/login/Login.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Catalog from "./components/catalog/Catalog.jsx";
import Register from "./components/register/Register.jsx";
import AboutUs from "./components/about/aboutUs.jsx";
import Create from "./components/create-part/CreatePart.jsx";
import Logout from "./components/logout/Logout.jsx";
import Details from "./components/details/Details.jsx";
import EditPart from "./components/edit/Edit.jsx";
import Profile from "./components/profile/Profile.jsx";
import MyParts from "./components/my-parts/MyParts.jsx";
import { useUserContext } from "./contexts/UserContext.jsx";
// import Wishlist from "./components/wish-list/WishList.jsx";

function App() {
    const { user } = useUserContext()

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
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/parts" element={<Catalog />} />
                        <Route path="/parts/create" element={<Create />} />
                        <Route path="/parts/:partId/details" element={<Details user={user} />} />
                        <Route path="/parts/:partId/edit" element={<EditPart />} />
                        <Route path="/parts/:userId/myParts" element={<MyParts />} />
                        <Route path="/users/:userId/profile" element={<Profile />} />
                        {/* <Route path="/users/:userId/wishlist" element={<Wishlist />} /> */}
                    </Routes>
                </main>

                <Footer />
            </div>
        </>
    );
}

export default App;
