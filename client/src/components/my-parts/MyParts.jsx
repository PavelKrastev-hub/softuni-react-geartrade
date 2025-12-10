import { useState, useMemo } from "react";
import PartCard from "../part-card/PartCard.jsx";
import useRequest from "../../hooks/useRequest.js";
import { useUserContext } from "../../contexts/UserContext.jsx";

export default function MyParts() {
    const { user } = useUserContext();
    const userId = user?.id;

    const { data: parts } = useRequest(`/data/parts?where=_ownerId%3D%22${userId}%22`, []);

    const ITEMS_PER_PAGE = 9;
    const [currentPage, setCurrentPage] = useState(1);

    const paginatedParts = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        return parts.slice(start, start + ITEMS_PER_PAGE);
    }, [parts, currentPage]);

    const totalPages = Math.ceil(parts.length / ITEMS_PER_PAGE);

    return (
        <section
            className="min-h-[calc(100vh-112px)] bg-[url('/images/carParts.jpg')] bg-cover bg-center bg-fixed"
        >
            <div className="bg-black/0 w-full h-full px-6 py-16">

                <div className="max-w-6xl mx-auto text-center mb-14 bg-black/40 px-6 py-8 rounded-lg">
                    <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
                        My Published Parts
                    </h1>
                    <p className="mt-4 text-xl text-white drop-shadow-md">
                        All auto parts you have added.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {parts.length === 0 && (
                        <p className="col-span-full text-center text-xl font-semibold text-gray-700 bg-white/80 py-6 rounded-xl shadow-md">
                            You haven't added any parts yet!
                        </p>
                    )}

                    {paginatedParts.map(part => (
                        <PartCard key={part._id} {...part} />
                    ))}
                </div>

                {totalPages > 1 && (
                    <div className="flex justify-center mt-10 gap-3">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`px-4 py-2 rounded-lg text-lg font-semibold transition-all
                                    ${page === currentPage
                                        ? "bg-blue-600 text-white shadow-lg"
                                        : "bg-white/80 hover:bg-blue-200"
                                    }`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
