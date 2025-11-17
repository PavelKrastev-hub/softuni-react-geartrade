export default function Login() {
    return (
        <div className="bg-gray-100 flex flex-col">
            <section className="min-h-[calc(100vh-112px)] flex items-center justify-center bg-gray-100 px-6">
                <div className="bg-white rounded-xl shadow-xl p-10 w-full max-w-md border border-gray-200">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
                        Login to <span className="text-red-600">GearTrade</span>
                    </h2>

                    <form className="space-y-6">
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

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg text-lg font-semibold transition"
                        >
                            Login
                        </button>
                    </form>

                    <p className="text-center text-gray-600 mt-6">
                        Don’t have an account?{' '}
                        <a href="/register" className="text-red-600 hover:underline">
                            Register
                        </a>
                    </p>
                </div>
            </section>
        </div>
    );
}
