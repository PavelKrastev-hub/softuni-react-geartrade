import { Link, useNavigate } from "react-router";

export default function Register({
    onRegister,
}) {
    const navigate = useNavigate();

    const registerSubmit = (formData) => {
        const email = formData.get('email');
        const username = formData.get('username');
        const password = formData.get('password');
        const rePass = formData.get('rePass');

        if (!email || !password || !username) {
            return alert('Email,password and username are required!');
        }

        if (password !== rePass) {
            return alert('Passwords must match!');
        }

        try {
            onRegister(email, username, password);

            navigate('/');
        } catch (err) {
            return alert(err.message);
        }
    };

    return (
        <section
            className="min-h-[calc(100vh-112px)] flex items-center justify-center bg-[url('/images/carParts.jpg')] bg-cover bg-center"
        >
            <div className="w-full h-full bg-black/50 flex items-center justify-center px-6">
                <div className="bg-white rounded-xl shadow-xl p-10 w-full max-w-md border border-gray-200">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
                        Register to <span className="text-red-600">GearTrade</span>
                    </h2>

                    <form className="space-y-5" action={registerSubmit}>
                        {/* Email */}
                        <div>
                            <label className="text-black font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="w-full mt-1 p-3 rounded-lg bg-white border border-gray-300 focus:border-blue-500 outline-none" placeholder="Enter email"
                            />
                        </div>

                        {/* Username */}
                        <div>
                            <label className="text-black font-medium">Username</label>
                            <input
                                type="text"
                                name="username"
                                className="w-full mt-1 p-3 rounded-lg bg-white border border-gray-300 focus:border-blue-500 outline-none" placeholder="Enter username"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="text-black font-medium">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="w-full mt-1 p-3 rounded-lg bg-white border border-gray-300 focus:border-blue-500 outline-none" placeholder="Enter password"
                            />
                        </div>

                        {/* Repeat Password */}
                        <div>
                            <label className="text-black font-medium">Repeat Password</label>
                            <input
                                type="password"
                                name="rePass"
                                className="w-full mt-1 p-3 rounded-lg bg-white border border-gray-300 focus:border-blue-500 outline-none" placeholder="Repeat password"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg text-lg font-semibold transition"
                        >
                            Register
                        </button>
                        <p className="text-center text-gray-600 mt-6">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="text-red-600 hover:underline"
                            >
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
