export default function CreatePart() {
    return (
        <section className="min-h-[calc(100vh-112px)] flex items-center justify-center bg-[url('/images/carParts.jpg')] bg-cover bg-center">
            {/* Overlay за по-добър контраст */}
            <div className="w-full h-full bg-black/50 flex items-center justify-center px-6">
                <div className="bg-white rounded-xl shadow-xl p-10 w-full max-w-3xl">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
                        Добавяне на авточаст
                    </h2>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Име на авточастта"
                            className="w-full p-3 rounded border border-gray-300"
                        />
                        <input
                            type="text"
                            placeholder="Категория"
                            className="w-full p-3 rounded border border-gray-300"
                        />
                        <input
                            type="text"
                            placeholder="OEM номер"
                            className="w-full p-3 rounded border border-gray-300"
                        />
                        <input
                            type="text"
                            placeholder="Подходящ за автомобил"
                            className="w-full p-3 rounded border border-gray-300"
                        />
                        <input
                            type="number"
                            placeholder="Цена"
                            className="w-full p-3 rounded border border-gray-300"
                        />
                        <input
                            type="number"
                            placeholder="Количество"
                            className="w-full p-3 rounded border border-gray-300"
                        />
                        <textarea
                            placeholder="Кратко описание"
                            rows={3}
                            className="w-full p-3 rounded border border-gray-300 md:col-span-2"
                        ></textarea>
                        <input
                            type="text"
                            placeholder="URL на изображение"
                            className="w-full p-3 rounded border border-gray-300 md:col-span-2"
                        />
                        <button
                            type="submit"
                            className="md:col-span-2 bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg font-semibold transition"
                        >
                            Добави авточаст
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}