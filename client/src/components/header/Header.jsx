import { Link } from "react-router";
import { useUserContext } from "../../contexts/UserContext.jsx";

export default function Header() {
    const { user, isAuthenticated } = useUserContext();

    return (
        <header className="bg-gray-900 text-white">
            <nav className="max-w-9xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link to="/">
                    <h1 className="text-2xl font-bold tracking-wide">
                        Gear<span className="text-red-500">Trade</span>
                    </h1>
                </Link>
                <div className="flex gap-6 text-lg">

                    <Link to="/parts" className="hover:text-red-400">
                        Catalog
                    </Link>

                    <Link to="/about" className="hover:text-red-400">
                        About Us
                    </Link>
                    {isAuthenticated
                        ? (
                            <>
                                <Link to="/parts/create" className="hover:text-red-400">
                                    Add Part
                                </Link>

                                <Link to={`/parts/${user.id}/myParts`} className="hover:text-red-400">
                                    My Parts
                                </Link>

                                <Link to="/logout" className="hover:text-red-400">
                                    Logout
                                </Link>
                                <Link to={`/users/${user.id}/profile`} className="hover:text-red-400">
                                    View Profile {user.username}
                                </Link>
                            </>
                        )
                        : (
                            <>
                                <Link to="/login" className="hover:text-red-400">
                                    Login
                                </Link>

                                <Link to="/register" className="hover:text-red-400">
                                    Register
                                </Link>
                            </>
                        )
                    }
                </div>
            </nav>
        </header>
    );
}