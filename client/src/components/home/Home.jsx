import { Link } from "react-router";

export default function Home() {
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
                    <Link to={'/parts/catalog'} className="mt-6 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg text-lg shadow-lg transition">
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
                        {/* Card 1 */}
                        <div className="bg-white rounded-xl shadow-md p-4 border border-gray-200 flex flex-col">
                            <img
                                src="/images/sample1.jpg"
                                alt="Product"
                                className="w-full h-40 object-cover rounded-lg mb-4"
                            />
                            <h4 className="text-xl font-semibold text-gray-800">Oil Filter Bosch</h4>
                            <p className="text-red-600 text-lg font-bold mt-1">$19.99</p>

                            <button className="mt-auto bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-sm font-semibold transition">
                                View Details
                            </button>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-xl shadow-md p-4 border border-gray-200 flex flex-col">
                            <img
                                src="/images/sample2.jpg"
                                alt="Product"
                                className="w-full h-40 object-cover rounded-lg mb-4"
                            />
                            <h4 className="text-xl font-semibold text-gray-800">Front Brake Pads</h4>
                            <p className="text-red-600 text-lg font-bold mt-1">$49.00</p>

                            <button className="mt-auto bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-sm font-semibold transition">
                                View Details
                            </button>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-xl shadow-md p-4 border border-gray-200 flex flex-col">
                            <img
                                src="/images/sample3.jpg"
                                alt="Product"
                                className="w-full h-40 object-cover rounded-lg mb-4"
                            />
                            <h4 className="text-xl font-semibold text-gray-800">Air Filter Mann</h4>
                            <p className="text-red-600 text-lg font-bold mt-1">$24.50</p>

                            <button className="mt-auto bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-sm font-semibold transition">
                                View Details
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}