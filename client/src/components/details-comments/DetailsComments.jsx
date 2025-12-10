export default function DetailsComments({
    comments,
}) {
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