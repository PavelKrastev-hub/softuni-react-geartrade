import { useEffect, useState } from "react";
import { Link } from "react-router";
import PartCard from "../part-card/PartCard.jsx";
import { BASE_URL } from "../../utils/constants.js";

export default function Home() {
    const [latestParts, setLatestParts] = useState([]);

    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(result => {
                const parts = Object.values(result)
                    .sort((a, b) => b._createdOn - a._createdOn)
                    .slice(0, 3);

                setLatestParts(parts);
            })
    }, []);

    return (
        <section className="min-h-[calc(100vh-112px)] bg-[url('/images/carParts.jpg')] bg-cover bg-center">
            <div className="bg-black/50 w-full h-full flex items-center">
                <div className="max-w-4xl mx-auto px-6 text-white">
                    <h2 className="text-5xl font-extrabold drop-shadow-lg">
                        Find the Best Auto Parts
                    </h2>
                    <p className="mt-4 text-xl text-gray-200">
                        Quality parts for all vehicle brands — fast, reliable and affordable.
                    </p>
                    <Link
                        to={'/parts'}
                        className="mt-6 inline-block px-8 py-4 bg-red-500 hover:bg-red-600 text-white rounded-xl text-lg font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                    >
                        Explore Catalog
                    </Link>
                </div>
            </div>

            <section className="py-10 bg-transparent">
                <div className="max-w-6xl mx-auto px-6">
                    <h3 className="text-3xl font-bold mb-6 text-gray-900">
                        Latest Offers
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {latestParts.length === 0 && <p className="col-span-full text-center text-xl font-semibold text-gray-700 bg-white/80 py-6 rounded-xl shadow-md"> No published parts yet! </p>}

                        {latestParts.map(part => <PartCard key={part._id} {...part} />)}
                    </div>
                </div>
            </section>
        </section>
    );
}