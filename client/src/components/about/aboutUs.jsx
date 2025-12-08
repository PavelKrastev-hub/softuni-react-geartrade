import { Link } from "react-router";

export default function AboutUs() {
    return (
        <section
            className="relative min-h-[calc(100vh-112px)] bg-[url('/images/carParts.jpg')] bg-cover bg-center"
        >
            <div className="bg-black/70 w-full h-full p-10 relative z-10">
                <div className="max-w-3xl relative z-10">
                    <h2 className="text-4xl font-extrabold mb-4 text-white drop-shadow-lg">
                        About <span className="text-red-500">GearTrade</span>
                    </h2>

                    <p className="mb-4 text-lg text-gray-100">
                        Welcome to <span className="font-semibold">GearTrade</span> — your reliable partner for high-quality auto parts.
                        We provide fast, affordable, and trustworthy solutions for all vehicle brands in Bulgaria.
                    </p>

                    <h3 className="text-2xl font-semibold mt-6 mb-3 text-white">Contact Information</h3>
                    <ul className="space-y-2 text-lg text-gray-200">
                        <li>
                            <span className="font-semibold">Address:</span> 15 Automobile Street, 9000 Varna, Bulgaria
                        </li>
                        <li>
                            <span className="font-semibold">Email:</span> <a href="mailto:info@geartrade.bg" className="text-red-500 hover:underline">info@geartrade.bg</a>
                        </li>
                        <li>
                            <span className="font-semibold">Phone:</span> <a href="tel:+359879123456" className="text-red-500 hover:underline">+359 879 123 456</a>
                        </li>
                    </ul>

                    <p className="mt-6 text-gray-300">
                        Go back to <Link to="/" className="text-red-500 hover:underline">Home</Link>
                    </p>
                </div>
            </div>

            <img
                src="/images/wrench.png"
                alt="Wrench"
                className="absolute top-3 right-20 w-96 opacity-90 animate-bounce-slow pointer-events-none z-20"
            />
        </section>
    );
}
