import { Link } from "react-router";

export default function Register() {
    return (
        <div className="flex flex-col">
            <section
                className="min-h-[calc(100vh-112px)] flex items-center justify-center bg-[url('/images/carParts.jpg')] bg-cover bg-center"
            >
                {/* Overlay за по-добър контраст */}
                <div className="w-full h-full bg-black/50 flex items-center justify-center px-6">
                    <div className="bg-white rounded-xl shadow-xl p-10 w-full max-w-md border border-gray-200">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
                            Create an Account for <span className="text-red-600">GearTrade</span>
                        </h2>

                        <form className="space-y-6">
                            {/* Username */}
                            <div>
                                <label className="block text-lg font-medium text-gray-700 mb-1">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                                    placeholder="Your username"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-lg font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                                    placeholder="you@example.com"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-lg font-medium text-gray-700 mb-1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                                    placeholder="••••••••"
                                />
                            </div>

                            {/* Repeat Password */}
                            <div>
                                <label className="block text-lg font-medium text-gray-700 mb-1">
                                    Repeat Password
                                </label>
                                <input
                                    type="password"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                                    placeholder="••••••••"
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg text-lg font-semibold transition"
                            >
                                Register
                            </button>
                        </form>

                        <p className="text-center text-gray-600 mt-6">
                            Already have an account?{' '}
                            <Link to="/login" className="text-red-600 hover:underline">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
