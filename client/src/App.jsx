import { Routes, Route } from "react-router"
import Home from "./components/Home.jsx"
import Login from "./components/Login.jsx"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"

function App() {
    return (
        <div>

            <Header />

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </main>

            <Footer />

        </div>
    )
}

export default App
