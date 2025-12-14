import { useParams } from "react-router";
import useRequest from "../../hooks/useRequest.js";
import useForm from "../../hooks/useForm.js";

export default function CreateComment({
    user,
    onCreate,
}) {
    const { partId } = useParams();
    const { request } = useRequest();

    const submitHnadler = async ({ comment }) => {

        if (!comment) {
            return alert('Field is required!');
        }

        try {
            const createdComment = await request(`/data/comments`, 'POST', {
                message: comment,
                partId,
            });

            onCreate(createdComment);

            reset();
        } catch (error) {
            alert(error.message);
        }
    }

    const {
        register,
        formAction,
        reset,
    } = useForm(submitHnadler, {
        comment: '',
    })

    return (
        <form className="p-6 bg-white rounded-3xl shadow border border-gray-200" action={formAction}>
            <h4 className="text-xl font-bold mb-4 border-b-2 border-red-500 pb-2 text-center">
                Add a Comment
            </h4>

            <div className="space-y-4">
                <textarea
                    {...register('comment')}
                    placeholder="Write your comment..."
                    className="w-full p-3 rounded-lg border border-gray-300"
                    rows={4}
                />

                <div className="flex justify-center">
                    <input
                        type="submit"
                        disabled={!user}
                        className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition"
                        value='Post Comment'
                    >

                    </input>
                </div>
            </div>
        </form>
    );
}