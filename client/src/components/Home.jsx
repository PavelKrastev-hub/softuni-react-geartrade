export default function Home() {
    return (
        <section className="min-h-[calc(100vh-112px)] bg-[url('/images/homeBackgroundPhoto.jpg')] bg-cover bg-center">
            <div className="bg-black/50 w-full h-full flex items-center">
                <div className="max-w-4xl mx-auto px-6 text-white">
                    <h2 className="text-5xl font-extrabold drop-shadow-lg">
                        Find the Best Auto Parts
                    </h2>
                    <p className="mt-4 text-xl text-gray-200">
                        Quality parts for all vehicle brands — fast, reliable and affordable.
                    </p>
                    <button className="mt-6 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg text-lg shadow-lg transition">
                        Explore Catalog
                    </button>
                </div>
            </div>
        </section>
    );
}
