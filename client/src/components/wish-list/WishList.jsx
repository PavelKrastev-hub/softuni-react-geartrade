import PartCard from "../part-card/PartCard.jsx";
import { useEffect, useState } from "react";

export default function Wishlist() {
    const [favorites, setFavorites] = useState([]);

    // Зареждане на любимите части от localStorage при стартиране
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(stored);
    }, []);

    return (
        <section
            className="min-h-[calc(100vh-112px)] bg-[url('/images/carParts.jpg')] bg-cover bg-center bg-fixed"
        >
            <div className="bg-black/0 w-full h-full px-6 py-16">
                <div className="max-w-6xl mx-auto text-center mb-14 bg-black/40 px-6 py-8 rounded-lg">
                    <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
                        My Favorite Parts
                    </h1>
                    <p className="mt-4 text-xl text-white drop-shadow-md">
                        Here you can see all your favorite car parts.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {favorites.length === 0 && (
                        <p className="col-span-full text-center text-xl font-semibold text-gray-700 bg-white/80 py-6 rounded-xl shadow-md">
                            No favorite parts yet!
                        </p>
                    )}

                    {favorites.map(part => (
                        <PartCard
                            key={part._id}
                            {...part}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
