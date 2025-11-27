export default function Details() {
    return (
        <section className="min-h-[calc(100vh-112px)] bg-[url('/images/carParts.jpg')] bg-cover bg-center py-12">
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

                {/* IMAGE */}
                <div className="h-96 lg:h-auto">
                    <img
                        src="https://www.ilmotorsport.de/shop/xxlpics/ND2-7033119/1/1280/1280/Brake-pad-set-Brembo-front-MK4-1.jpg"
                        alt="Part Name"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* INFO */}
                <div className="p-8 flex flex-col">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                        Brake Pads Front Set
                    </h2>

                    <p className="text-gray-700 text-lg mb-6">
                        These brake pads provide increased stopping power and durability.
                        Commonly used for front wheel braking systems.
                    </p>

                    <div className="space-y-4">

                        <p className="text-lg">
                            <span className="font-semibold">Category:</span> Brakes
                        </p>

                        <p className="text-lg">
                            <span className="font-semibold">OEM Number:</span> 8E0698151A
                        </p>

                        <p className="text-lg">
                            <span className="font-semibold">Suitable for:</span> Audi A4, A6, VW Passat
                        </p>

                        <p className="text-lg">
                            <span className="font-semibold">Brand:</span> Bosch
                        </p>

                        <p className="text-3xl font-bold text-red-600 mt-4">
                            129.00 лв.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}