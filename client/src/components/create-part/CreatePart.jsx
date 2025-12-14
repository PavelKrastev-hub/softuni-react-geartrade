import { useNavigate } from "react-router";
import useForm from "../../hooks/useForm.js";
import useRequest from "../../hooks/useRequest.js";

export default function CreatePart() {
    const navigate = useNavigate();
    const { request } = useRequest();

    const createPartHandler = async (values) => {
        const data = values;

        if (!data.name ||
            !data.oem_number ||
            !data.category ||
            !data.suitable_to ||
            !data.price ||
            !data.brand ||
            !data.description ||
            !data.image_url) {

            return alert('Missing field!')
        }

        data.price = Number(data.price).toFixed(2);

        data.suitable_to = data.suitable_to
            .split(',')
            .map(item => item.trim())
            .filter(item => item.length > 0);

        try {
            await request('/data/parts', 'POST', data);

            navigate('/parts');
        } catch (error) {
            alert(error.message);
        }
    }

    const {
        register,
        formAction
    } = useForm(createPartHandler, {
        name: '',
        category: '',
        oem_number: '',
        suitable_to: '',
        price: '',
        brand: '',
        description: '',
        image_url: '',
    })

    return (
        <section className="min-h-[calc(100vh-112px)] flex items-center justify-center bg-[url('/images/carParts.jpg')] bg-cover bg-center">
            <div className="w-full h-full bg-black/50 flex items-center justify-center px-6">
                <div className="bg-white rounded-xl shadow-xl p-10 w-full max-w-3xl">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
                        Add Offer to <span className="text-red-600">GearTrade</span>
                    </h2>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4" action={formAction}>
                        <input
                            type="text"
                            placeholder="Name of part"
                            {...register('name')}
                            className="w-full p-3 rounded border border-gray-300"
                        />
                        <input
                            type="text"
                            placeholder="Category"
                            {...register('category')}
                            className="w-full p-3 rounded border border-gray-300"
                        />
                        <input
                            type="text"
                            placeholder="OEM number"
                            {...register('oem_number')}
                            className="w-full p-3 rounded border border-gray-300"
                        />
                        <input
                            type="text"
                            placeholder="Suitable to..."
                            {...register('suitable_to')}
                            className="w-full p-3 rounded border border-gray-300"
                        />
                        <input
                            type="number"
                            placeholder="Price"
                            {...register('price')}
                            className="w-full p-3 rounded border border-gray-300"
                        />
                        <input
                            type="text"
                            placeholder="brand"
                            {...register('brand')}
                            className="w-full p-3 rounded border border-gray-300"
                        />
                        <textarea
                            placeholder="Description"
                            {...register('description')}
                            rows={3}
                            className="w-full p-3 rounded border border-gray-300 md:col-span-2"
                        ></textarea>
                        <input
                            type="text"
                            placeholder="Image URL"
                            {...register('image_url')}
                            className="w-full p-3 rounded border border-gray-300 md:col-span-2"
                        />
                        <button
                            type="submit"
                            className="md:col-span-2 bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg font-semibold transition"
                        >
                            Upload offer
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}