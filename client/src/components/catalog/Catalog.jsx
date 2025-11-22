import { useEffect, useState } from "react";
import { Link } from "react-router";
import PartCard from "../part-card/PartCard.jsx";

const BASE_URL = 'http://localhost:3030/jsonstore/parts';

export default function Catalog() {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(BASE_URL);

                const result = await response.json();

                setParts(Object.values(result));
            } catch (error) {
                alert(error.message);
            }
        })();
    }, []);

    return (
        <section
            className="min-h-[calc(100vh-112px)] bg-[url('/images/carParts.jpg')] bg-cover bg-center bg-fixed"
        >
            {/* overlay */}
            <div className="bg-black/0 w-full h-full px-6 py-16">

                <div className="max-w-6xl mx-auto text-center mb-14 bg-black/40 px-6 py-8 rounded-lg">
                    <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
                        Available Auto Parts
                    </h1>
                    <p className="mt-4 text-xl text-white drop-shadow-md">
                        Browse high-quality car parts at the best prices.
                    </p>


                </div>



                {/* grid */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                    {parts.map(part => <PartCard key={part._id} {...part} />)}

                </div>

            </div>
        </section>
    );
}
