import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import useForm from "../../hooks/useForm.js";
import useRequest from "../../hooks/useRequest.js";

export default function EditPart() {
    const editGameHandler = async (values) => {
        try {
            values.suitable_to = (values.suitable_to)
                .split(',')
                .map(x => x.trim())
                .filter(x => x.length > 0);
            await request(`/data/parts/${partId}`, 'PUT', values);

            navigate(`/parts/${partId}/details`);
        } catch (error) {
            alert(error.message)
        }
    }

    const {
        register,
        formAction,
        setValues,
    } = useForm(editGameHandler, {
        name: '',
        category: '',
        oem_number: '',
        suitable_to: '',
        price: '',
        brand: '',
        description: '',
        image_url: '',
    })

    const navigate = useNavigate();
    const { partId } = useParams();
    const { request } = useRequest(`/data/parts/${partId}`);

    useEffect(() => {
        request(`/data/parts/${partId}`)
            .then(result => {
                if (Array.isArray(result.suitable_to)) {
                    result.suitable_to = result.suitable_to.join(', ');
                }
                
                setValues(result)
            })
            .catch(err => {
                alert(err.message);
            });
    }, [partId, setValues]);

    return (
        <section className="min-h-[calc(100vh-112px)] flex items-center justify-center bg-[url('/images/carParts.jpg')] bg-cover bg-center">
            <div className="w-full h-full bg-black/50 flex items-center justify-center px-6">
                <div className="bg-white rounded-xl shadow-xl p-10 w-full max-w-3xl">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
                        Edit <span className="text-red-600">Offer</span>
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
                            Save offer
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}