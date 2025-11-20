import { Link } from "react-router";

export default function Register() {
    return (
        <div className="flex flex-col">
            <section
                className="min-h-[calc(100vh-112px)] flex items-center justify-center bg-[url('/images/carParts.jpg')] bg-cover bg-center"
            >
                {/* Overlay за контраст */}
                <div className="w-full h-full bg-black/50 flex items-center justify-center px-6">
                    <div className="bg-white rounded-xl shadow-xl p-10 w-full max-w-md border border-gray-200">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
                            Добавяне на <span className="text-red-600">авточаст</span>
                        </h2>

                        <form className="space-y-4">
                            {/* Име на авточастта */}
                            <div>
                                <label className="block text-lg font-medium text-gray-700 mb-1">
                                    Име на авточастта
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                                    placeholder="Например: Амортисьор преден"
                                />
                            </div>

                            {/* Категория */}
                            <div>
                                <label className="block text-lg font-medium text-gray-700 mb-1">
                                    Категория
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                                    placeholder="Например: Окачване"
                                />
                            </div>

                            {/* OEM номер */}
                            <div>
                                <label className="block text-lg font-medium text-gray-700 mb-1">
                                    OEM номер
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                                    placeholder="Например: 12345678"
                                />
                            </div>

                            {/* Подходящ за автомобил */}
                            <div>
                                <label className="block text-lg font-medium text-gray-700 mb-1">
                                    Подходящ за автомобил
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                                    placeholder="Например: BMW E91 325i 2005–2012"
                                />
                            </div>

                            {/* Цена */}
                            <div>
                                <label className="block text-lg font-medium text-gray-700 mb-1">
                                    Цена
                                </label>
                                <input
                                    type="number"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                                    placeholder="Например: 49.99"
                                />
                            </div>

                            {/* Количество */}
                            <div>
                                <label className="block text-lg font-medium text-gray-700 mb-1">
                                    Количество
                                </label>
                                <input
                                    type="number"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                                    placeholder="Например: 10"
                                />
                            </div>

                            {/* Кратко описание */}
                            <div>
                                <label className="block text-lg font-medium text-gray-700 mb-1">
                                    Кратко описание
                                </label>
                                <textarea
                                    rows={3}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                                    placeholder="Описание на частта"
                                ></textarea>
                            </div>

                            {/* Снимка */}
                            <div>
                                <label className="block text-lg font-medium text-gray-700 mb-1">
                                    Снимка
                                </label>
                                <input type="file" className="w-full" />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg text-lg font-semibold transition"
                            >
                                Добави авточаст
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
