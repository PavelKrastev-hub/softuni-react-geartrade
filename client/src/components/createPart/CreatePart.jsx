export default function CreatePart() {
    return (
        <section className="min-h-[calc(100vh-112px)] flex items-center justify-center bg-[url('/images/carParts.jpg')] bg-cover bg-center">
            {/* Overlay за по-добър контраст */}
            <div className="w-full h-full bg-black/50 flex items-center justify-center px-6">
                <div className="bg-white rounded-xl shadow-xl p-10 w-full max-w-3xl">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
                        Add Offer to <span className="text-red-600">GearTrade</span>
                    </h2>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Name of part"
                            name="name"
                            className="w-full p-3 rounded border border-gray-300"
                        />
                        <input
                            type="text"
                            placeholder="Category"
                            name="category"
                            className="w-full p-3 rounded border border-gray-300"
                        />
                        <input
                            type="text"
                            placeholder="OEM number"
                            name="oem_number"
                            className="w-full p-3 rounded border border-gray-300"
                        />
                        <input
                            type="text"
                            placeholder="Suitable to..."
                            name="suitable_to"
                            className="w-full p-3 rounded border border-gray-300"
                        />
                        <input
                            type="number"
                            placeholder="Price"
                            name="price"
                            className="w-full p-3 rounded border border-gray-300"
                        />
                        <input
                            type="text"
                            placeholder="brand"
                            name="brand"
                            className="w-full p-3 rounded border border-gray-300"
                        />
                        <textarea
                            placeholder="Description"
                            name="description"
                            rows={3}
                            className="w-full p-3 rounded border border-gray-300 md:col-span-2"
                        ></textarea>
                        <input
                            type="text"
                            placeholder="Image URL"
                            name="imageUrl"
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