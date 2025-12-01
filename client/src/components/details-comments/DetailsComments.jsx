import { useEffect, useState } from "react";
import { useParams } from "react-router";
import request from "../../utils/request.js";
import { BASE_URL } from "../../utils/constants.js";

export default function DetailsComments({
    refresh,
}) {
    const [comments, setComments] = useState([]);
    const { partId } = useParams();

    useEffect(() => {
        request(`${BASE_URL}/comments`)
            .then(result => {
                const partComments = Object.values(result).filter(comment => comment.partId === partId);
                setComments(partComments);
            })
    }, [partId, refresh]);

    return (
        <div className="space-y-4">
            {comments.map(comment => (
                <div key={comment._id} className="p-4 bg-white rounded-xl shadow border border-gray-200">
                    <p className="font-semibold text-gray-800">{comment.author}</p>
                    <p className="text-gray-600 text-sm">{comment.message}</p>
                </div>
            ))}


        </div>
    );
}