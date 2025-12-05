import { Link } from "react-router";
import { useUserContext } from "../../contexts/UserContext.jsx";

export default function Header() {
    const { isAuthenticated } = useUserContext();

    return (
        <header className="bg-gray-900 text-white">
            <nav className="max-w-9xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link to="/">
                    <h1 className="text-2xl font-bold tracking-wide">
                        Gear<span className="text-red-500">Trade</span>
                    </h1>
                </Link>
                <ul className="flex gap-6 text-lg">
                    <li>
                        <Link to="/parts" className="hover:text-red-400">
                            Catalog
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-red-400">
                            About Us
                        </Link>
                    </li>
                    {isAuthenticated
                        ? (
                            <>
                                <li>
                                    <Link to="/parts/create" className="hover:text-red-400">
                                        Add Part
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/parts/myOffers" className="hover:text-red-400">
                                        My Offers
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/logout" className="hover:text-red-400">
                                        Logout
                                    </Link>
                                </li>
                            </>
                        )
                        : (
                            <>
                                <li>
                                    <Link to="/login" className="hover:text-red-400">
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/register" className="hover:text-red-400">
                                        Register
                                    </Link>
                                </li>
                            </>
                        )
                    }

                </ul>
            </nav>
        </header>
    );
}