import { Link } from "react-router";

export default function Catalog() {
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

                    {/* Item 1 */}
                    <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition">
                        <div
                            className="h-48 bg-cover bg-center"
                            style={{ backgroundImage: 'url("/images/brakes.jpg")' }}
                        />
                        <div className="p-5 text-white">
                            <h3 className="text-2xl font-semibold">Sport Brake Pads</h3>
                            <p className="mt-2 text-red-400 text-lg font-bold">120 лв.</p>
                            <Link
                                to="/catalog/1"
                                className="mt-4 inline-block bg-red-500 hover:bg-red-600 py-2 px-4 rounded-lg transition"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition">
                        <div
                            className="h-48 bg-cover bg-center"
                            style={{ backgroundImage: 'url("/images/engineOil.jpg")' }}
                        />
                        <div className="p-5 text-white">
                            <h3 className="text-2xl font-semibold">Premium Engine Oil 5W-40</h3>
                            <p className="mt-2 text-red-400 text-lg font-bold">85 лв.</p>
                            <Link
                                to="/catalog/2"
                                className="mt-4 inline-block bg-red-500 hover:bg-red-600 py-2 px-4 rounded-lg transition"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition">
                        <div
                            className="h-48 bg-cover bg-center"
                            style={{ backgroundImage: 'url("/images/sparkPlugs.jpg")' }}
                        />
                        <div className="p-5 text-white">
                            <h3 className="text-2xl font-semibold">NGK Spark Plugs (4 pack)</h3>
                            <p className="mt-2 text-red-400 text-lg font-bold">48 лв.</p>
                            <Link
                                to="/catalog/3"
                                className="mt-4 inline-block bg-red-500 hover:bg-red-600 py-2 px-4 rounded-lg transition"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
