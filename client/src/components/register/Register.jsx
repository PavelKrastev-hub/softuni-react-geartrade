import { Link, useNavigate } from "react-router";
import useForm from "../../hooks/useForm.js";
import { useUserContext } from "../../contexts/UserContext.jsx";

export default function Register() {
    const navigate = useNavigate();
    const { registerHandler } = useUserContext();

    const registerSubmitHandler = async (values) => {
        const { email, username, fullName, country, password, rePass, imageUrl } = values;

        const missing = Object.entries(values)
            .filter(([, value]) => !value || value.trim() === '')
            .map(([key]) => key);

        if (missing.length > 0) {
            return alert('All fields are required!');
        }

        if (password !== rePass) {
            return alert('Passwords must match!');
        }

        try {
            await registerHandler(email, username, fullName, country, password, imageUrl);

            navigate('/');
        } catch (err) {
            return alert(err.message);
        }
    };

    const {
        register,
        formAction,
    } = useForm(registerSubmitHandler, {
        email: '',
        username: '',
        fullName: '',
        country: '',
        password: '',
        rePass: '',
    });

    return (
        <section
            className="min-h-[calc(100vh-112px)] flex items-center justify-center bg-[url('/images/carParts.jpg')] bg-cover bg-center"
        >
            <div className="w-full h-full bg-black/50 flex items-center justify-center px-6">
                <div className="bg-white rounded-xl shadow-xl p-10 w-full max-w-md border border-gray-200">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
                        Register to <span className="text-red-600">GearTrade</span>
                    </h2>

                    <form className="space-y-5" action={formAction}>
                        <div>
                            <label className="text-black font-medium">Email</label>
                            <input
                                type="email"
                                {...register('email')}
                                className="w-full mt-1 p-3 rounded-lg bg-white border border-gray-300 focus:border-blue-500 outline-none" placeholder="Enter email"
                            />
                        </div>

                        <div>
                            <label className="text-black font-medium">Username</label>
                            <input
                                type="text"
                                {...register('username')}
                                className="w-full mt-1 p-3 rounded-lg bg-white border border-gray-300 focus:border-blue-500 outline-none" placeholder="Enter username"
                            />
                        </div>
                        <div>
                            <label className="text-black font-medium">Full Name</label>
                            <input
                                type="text"
                                {...register('fullName')}
                                className="w-full mt-1 p-3 rounded-lg bg-white border border-gray-300 focus:border-blue-500 outline-none" placeholder="Enter email"
                            />
                        </div>

                        <div>
                            <label className="text-black font-medium">Country</label>
                            <input
                                type="text"
                                {...register('country')}
                                className="w-full mt-1 p-3 rounded-lg bg-white border border-gray-300 focus:border-blue-500 outline-none" placeholder="Enter email"
                            />
                        </div>

                        <div>
                            <label className="text-black font-medium">Password</label>
                            <input
                                type="password"
                                {...register('password')}
                                className="w-full mt-1 p-3 rounded-lg bg-white border border-gray-300 focus:border-blue-500 outline-none" placeholder="Enter password"
                            />
                        </div>

                        <div>
                            <label className="text-black font-medium">Repeat Password</label>
                            <input
                                type="password"
                                {...register('rePass')}
                                className="w-full mt-1 p-3 rounded-lg bg-white border border-gray-300 focus:border-blue-500 outline-none" placeholder="Repeat password"
                            />
                        </div>
                        <div>
                            <label className="text-black font-medium">Image URL</label>
                            <input
                                type="text"
                                {...register('imageUrl')}
                                className="w-full mt-1 p-3 rounded-lg bg-white border border-gray-300 focus:border-blue-500 outline-none" placeholder="Repeat password"
                            />
                        </div>

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
