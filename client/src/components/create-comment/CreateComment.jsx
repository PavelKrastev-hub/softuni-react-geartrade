import { useState } from "react";
import request from "../../utils/request.js";
import { BASE_URL } from "../../utils/constants.js";
import { useParams } from "react-router";

export default function CreateComment({
    user,
    onCreate,
}) {
    const { partId } = useParams();
    const [comment, setComment] = useState('');

    const changeHandler = (e) => {
        setComment(e.target.value);
    }

    const submitHnadler = async () => {
        try {
            await request(`${BASE_URL}/comments`, 'POST', {
                author: user.username,
                message: comment,
                partId,
            });

            setComment('');
            onCreate();
        } catch (error) {
            alert(error.message);
        }

    }

    return (
        <form className="p-6 bg-white rounded-3xl shadow border border-gray-200" action={submitHnadler}>
            <h4 className="text-xl font-bold mb-4 border-b-2 border-red-500 pb-2 text-center">
                Add a Comment
            </h4>

            <div className="space-y-4">
                <textarea
                    name="comment"
                    placeholder="Write your comment..."
                    className="w-full p-3 rounded-lg border border-gray-300"
                    onChange={changeHandler}
                    value={comment}
                    rows={4}
                />

                <div className="flex justify-center">
                    <input
                        type="submit"
                        // disabled={!user}
                        className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition"
                        value='Post Comment'
                    >

                    </input>
                </div>
            </div>
        </form>
    );
}