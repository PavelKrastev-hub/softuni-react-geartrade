import { Link } from "react-router";

export default function Header() {
    return (
        <header className="bg-gray-900 text-white">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <h1 className="text-2xl font-bold tracking-wide">
                    Gear<span className="text-red-500">Trade</span>
                </h1>

                <ul className="flex gap-6 text-lg">
                    <li><Link to="/" className="hover:text-red-400">Home</Link></li>
                    <li><Link to="/catalog" className="hover:text-red-400">Catalog</Link></li>
                    <li><Link to="/create" className="hover:text-red-400">Create</Link></li>
                    <li><Link to="/login" className="hover:text-red-400">Login</Link></li>
                    <li><Link to="/register" className="hover:text-red-400">Register</Link></li>
                </ul>
            </nav>
        </header>
    );
}