import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/constants.js";
import { useNavigate, useParams } from "react-router";
import request from "../../utils/request.js";

const initialValues = {
    name: '',
    category: '',
    oem_number: '',
    suitable_to: '',
    price: '',
    brand: '',
    description: '',
    image_url: '',
};

export default function EditPart() {
    const navigate = useNavigate();
    const { partId } = useParams();
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    };

    useEffect(() => {
        request(`${BASE_URL}/parts/${partId}`)
            .then(result => {
                setValues(result)
            })
            .catch(err => {
                alert(err.message);
            });
    }, [partId]);

    const editGameHandler = async () => {
        try {
            values.suitable_to = values.suitable_to
                .split(',')
                .map(x => x.trim())
                .filter(x => x.length > 0);
            await request(`${BASE_URL}/parts/${partId}`, 'PUT', values);

            navigate(`/parts/${partId}/details`);
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <section className="min-h-[calc(100vh-112px)] flex items-center justify-center bg-[url('/images/carParts.jpg')] bg-cover bg-center">
            <div className="w-full h-full bg-black/50 flex items-center justify-center px-6">
                <div className="bg-white rounded-xl shadow-xl p-10 w-full max-w-3xl">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
                        Edit Offer <span className="text-red-600">{values.name}</span>
                    </h2>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4" action={editGameHandler}>
                        <input
                            type="text"
                            placeholder="Name of part"
                            name="name"
                            onChange={changeHandler}
                            value={values.name}
                            className="w-full p-3 rounded border border-gray-300"
                        />
                        <input
                            type="text"
                            placeholder="Category"
                            name="category"
                            onChange={changeHandler}
                            value={values.category}
                            className="w-full p-3 rounded border border-gray-300"
                        />
                        <input
                            type="text"
                            placeholder="OEM number"
                            name="oem_number"
                            onChange={changeHandler}
                            value={values.oem_number}
                            className="w-full p-3 rounded border border-gray-300"
                        />
                        <input
                            type="text"
                            placeholder="Suitable to..."
                            name="suitable_to"
                            onChange={changeHandler}
                            value={values.suitable_to}
                            className="w-full p-3 rounded border border-gray-300"
                        />
                        <input
                            type="number"
                            placeholder="Price"
                            name="price"
                            onChange={changeHandler}
                            value={values.price}
                            className="w-full p-3 rounded border border-gray-300"
                        />
                        <input
                            type="text"
                            placeholder="brand"
                            name="brand" onChange={changeHandler}
                            value={values.brand}
                            className="w-full p-3 rounded border border-gray-300"
                        />
                        <textarea
                            placeholder="Description"
                            name="description"
                            rows={3} onChange={changeHandler}
                            value={values.description}
                            className="w-full p-3 rounded border border-gray-300 md:col-span-2"
                        ></textarea>
                        <input
                            type="text"
                            placeholder="Image URL"
                            name="imageUrl"
                            onChange={changeHandler}
                            value={values.image_url}
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