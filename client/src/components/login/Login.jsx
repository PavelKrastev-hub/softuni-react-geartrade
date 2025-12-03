import { Link, useNavigate } from "react-router";
import useForm from "../../hooks/useForm.js";
import { useContext } from "react";
import UserContext from "../../contexts/userContext.js";

export default function Login() {
    const navigate = useNavigate();
    const { loginHandler } = useContext(UserContext)

    const submitHandler = async ({ email, password }) => {
        if (!email || !password) {
            return alert('Email and password are required!');
        }

        try {
            await loginHandler(email, password);

            navigate('/');
        } catch (err) {
            alert(err.message);
        }
    };

    const {
        register,
        formAction
    } = useForm(submitHandler, {
        email: '',
        passowrd: '',
    })

    return (
        <div className="flex flex-col">
            <section
                className="min-h-[calc(100vh-112px)] flex items-center justify-center bg-[url('/images/carParts.jpg')] bg-cover bg-center"
            >
                {/* Overlay за по-добър контраст */}
                <div className="w-full h-full bg-black/50 flex items-center justify-center px-6">
                    <div className="bg-white rounded-xl shadow-xl p-10 w-full max-w-md border border-gray-200">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
                            Login to <span className="text-red-600">GearTrade</span>
                        </h2>

                        <form className="space-y-6" action={formAction}>
                            {/* Email */}
                            <div>
                                <label className="block text-lg font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    {...register('email')}
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
                                    {...register('password')}
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
                            <Link to="/register" className="text-red-600 hover:underline">
                                Register
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
