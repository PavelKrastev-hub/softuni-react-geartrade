import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
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
        <section className="min-h-[calc(100vh-112px)] bg-[url('/images/carParts.jpg')] bg-cover bg-center py-20">
            <div className="max-w-7xl mx-auto p-10 rounded-5xl bg-white shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-10 min-h-[60vh] lg:min-h-[40vh]">

                {/* IMAGE */}
                <div className="relative w-full h-76 lg:h-[50vh] overflow-hidden rounded-l-5xl flex items-center justify-center bg-gray-100">
                    <img
                        src={part.image_url}
                        alt={part.name}
                        className="max-w-full max-h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>

                {/* INFO */}
                <div className="flex flex-col justify-center p-6 space-y-4">
                    <h2 className="text-3xl lg:text-4xl font-extrabold mb-2 border-b-2 border-red-500 pb-2">
                        {part.name}
                    </h2>

                    <p className="text-gray-700 text-lg mb-2">{part.description}</p>

                    <div className="space-y-1">
                        <p><span className="font-semibold">Category:</span> {part.category}</p>
                        <p><span className="font-semibold">OEM Number:</span> {part.oem_number}</p>
                        <p><span className="font-semibold">Suitable for:</span> {Array.isArray(part.suitable_to) && part.suitable_to.join(', ')}</p>
                        <p><span className="font-semibold">Brand:</span> {part.brand}</p>
                        <p className="text-2xl lg:text-3xl font-bold text-red-600 mt-2 border-t-2 border-gray-200 pt-2">${price}</p>
                    </div>

                    <div className="mt-4 flex justify-end space-x-4">
                        <Link to={`/parts/${partId}/edit`} className="relative px-6 py-3 bg-white border-4 border-black rounded-lg font-bold text-lg uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 shadow-md hover:scale-105 hover:shadow-lg transition-transform transition-shadow">
                            Edit Part
                            <span className="absolute inset-0 rounded-lg border-2 border-black pointer-events-none"></span>
                        </Link>

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
        </section>
    );
}