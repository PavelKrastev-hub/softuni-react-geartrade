import { useParams } from "react-router";
import useRequest from "../../hooks/useRequest.js";

export default function DetailsComments() {
    const { partId } = useParams();

    const urlParams = new URLSearchParams({
        where: `partId="${partId}"`,
        load: 'author=_ownerId:users'
    });

    const { data: comments } = useRequest(`/data/comments?${urlParams.toString()}`, []);

    return (
        <div className="space-y-4">
            {comments.map(comment => (
                <div key={comment._id} className="p-4 bg-white rounded-xl shadow border border-gray-200">
                    <p className="font-semibold text-gray-800">{comment.author?.username}</p>
                    <p className="text-gray-600 text-sm">{comment.message}</p>
                </div>
            ))}


        </div>
    );
}