import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleOnSubmit(e) {
        e.preventDefault();
        const backendUrl = import.meta.env.VITE_BACKEND_URL;

        axios
            .post(`${backendUrl}/api/users/login`, {
                email,
                password,
            })
            .then((res) => {
                toast.success("Login Success");
                const user = res.data.user;
                localStorage.setItem("token", res.data.token);

                if (user.role === "admin") {
                    navigate("/admin/");
                } else {
                    navigate("/");
                }
            })
            .catch((err) => {
                console.error(err);
                toast.error(err.response?.data?.error || "Login failed");
            });
    }

    return (
        <div className="w-full h-screen flex items-center justify-center bg-gray-100">
            <div className="flex w-[800px] h-[500px] shadow-2xl rounded-2xl overflow-hidden">
                {/* Left Panel (Brand or Image) */}
                <div className="w-1/2 bg-accent flex items-center justify-center text-white text-3xl font-bold">
                    Welcome Back!
                </div>

                {/* Right Panel (Login Form) */}
                <div className="w-1/2 bg-secondary flex items-center justify-center">
                    <form
                        onSubmit={handleOnSubmit}
                        className="w-full max-w-[320px] flex flex-col"
                    >

                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mb-4 p-3 rounded-md text-center text-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mb-6 p-3 rounded-md text-center text-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent"
                        />

                        <button
                            type="submit"
                            className="bg-accent text-white py-2 rounded-md hover:opacity-90 transition"
                        >
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
