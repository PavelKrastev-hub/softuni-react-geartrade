import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { BASE_URL } from "../../utils/constants.js";

export default function Details() {
    const { partId } = useParams();
    const [part, setPart] = useState({});

    const price = Number(part.price).toFixed(2);

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${BASE_URL}/${partId}`)
            .then(response => response.json())
            .then(result => setPart(result))
            .catch(err => alert(err.message));
    }, [partId]);

    const deleteGameHandler = async () => {
        const isConfirmed = confirm(`Are you sure you want to delete your part - ${part.name}`);

        if (!isConfirmed) {
            return;
        }
        try {

            await fetch(`${BASE_URL}/${partId}`, {
                method: 'DELETE'
            })
            navigate('/parts');
        } catch (err) {
            (alert(err.message));
        }
    }
    
    return (
        <section className="min-h-[calc(100vh-112px)] bg-[url('/images/carParts.jpg')] bg-cover bg-center py-40">
            <div className="max-w-7xl mx-auto p-1 rounded-5xl bg-gradient-to-r from-black via-red-500 to-blue-500 transform">
                <div className="max-w-7xl mx-auto bg-white rounded-5xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

                    {/* IMAGE */}
                    <div className="h-96 lg:h-auto relative">
                        <img
                            src={part.image_url}
                            alt={part.name}
                            className="w-full h-full object-cover rounded-l-5xl"
                        />
                        {/* Добавяме лек overlay за по-драматичен ефект */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-l-5xl"></div>
                    </div>

                    {/* INFO */}
                    <div className="p-10 flex flex-col justify-center space-y-6 relative">
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-2 border-b-2 border-red-500 inline-block pb-2">
                            {part.name}
                        </h2>

                        <p className="text-gray-700 text-lg mb-4">
                            {part.description}
                        </p>

                        <div className="space-y-3">
                            <p className="text-lg">
                                <span className="font-semibold text-gray-900">Category:</span> {part.category}
                            </p>

                            <p className="text-lg">
                                <span className="font-semibold text-gray-900">OEM Number:</span> {part.oem_number}
                            </p>

                            <p className="text-lg">
                                <span className="font-semibold text-gray-900">Suitable for:</span> {Array.isArray(part.suitable_to) && part.suitable_to.join(', ')}
                            </p>

                            <p className="text-lg">
                                <span className="font-semibold text-gray-900">Brand:</span> {part.brand}
                            </p>

                            <p className="text-3xl font-bold text-red-600 mt-4 border-t-2 border-gray-200 pt-4">
                                ${price}
                            </p>
                        </div>
                        <div className="mt-6 flex justify-end space-x-4">
                            <button
                                className="relative px-6 py-3 bg-white border-4 border-black rounded-lg font-bold text-lg uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 shadow-md hover:scale-105 hover:shadow-lg transition-transform transition-shadow"
                            >
                                Edit Part
                                <span className="absolute inset-0 rounded-lg border-2 border-black pointer-events-none"></span>
                            </button>

                            <button
                                className="relative px-6 py-3 bg-white border-4 border-black rounded-lg font-bold text-lg uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 shadow-md hover:scale-105 hover:shadow-lg transition-transform transition-shadow"
                                onClick={deleteGameHandler}
                            >
                                Delete Part
                                <span className="absolute inset-0 rounded-lg border-2 border-black pointer-events-none"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}