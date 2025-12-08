import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import CreateComment from "../create-comment/CreateComment.jsx";
import DetailsComments from "../details-comments/DetailsComments.jsx";
import useRequest from "../../hooks/useRequest.js";
import { useUserContext } from "../../contexts/UserContext.jsx";

export default function Details() {
    const navigate = useNavigate();
    const { user, isAuthenticated } = useUserContext();
    const { partId } = useParams();
    const [refresh, setRefresh] = useState(false);
    const { data: part, request } = useRequest(`/data/parts/${partId}`, {});
    const [isFavorite, setIsFavorite] = useState(false); // state за любими

    const price = Number(part.price).toFixed(2);

    const deleteGameHandler = async () => {
        const isConfirmed = confirm(`Are you sure you want to delete your part - ${part.name}`);
        if (!isConfirmed) return;

        try {
            await request(`/data/parts/${partId}`, 'DELETE');
            navigate('/parts');
        } catch (err) {
            alert(err.message);
        }
    };

    const refreshHandler = () => setRefresh(state => !state);

    const handleFavoriteClick = () => {
        setIsFavorite(prev => !prev);
        // TODO: добави backend/localStorage логика за любими
    };

    return (
        <section className="min-h-[calc(100vh-112px)] bg-[url('/images/carParts.jpg')] bg-cover bg-center py-20">
            <div className="max-w-7xl mx-auto p-10 rounded-5xl bg-white shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-10 min-h-[60vh] lg:min-h-[40vh]">

                <div className="relative w-full h-76 lg:h-[50vh] overflow-hidden rounded-l-5xl flex items-center justify-center bg-gray-100">
                    <img
                        src={part.image_url}
                        alt={part.name}
                        className="max-w-full max-h-full object-contain"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>

                <div className="flex flex-col justify-center p-6 space-y-4 relative">

                    <button
                        onClick={handleFavoriteClick}
                        className="absolute top-0 right-0 mt-2 mr-2 focus:outline-none"
                    >
                        {isFavorite ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400 hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                        )}
                    </button>

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

            <div className="mt-16 max-w-5xl mx-auto space-y-10">
                {isAuthenticated && <CreateComment user={user} onCreate={refreshHandler} />}
                <DetailsComments refresh={refresh} />
            </div>
        </section>
    );
}
