// import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";


const LoginPage = ({ setUser }) => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    })

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // try {
        //     const res = await axios.post("http://localhost:5000/api/auth/login", form);
        //     setUser(res.data);
        //     navigate("/");
        // } catch (err) {
        //     setError("Invalid Credentials");
        // }
        if (
            form.email === "harindi@gmail.com" &&
            form.password === "12345"
        ) {
            const user = {
                name: "Harindi",
                email: "harindi@gmail.com",
            };

            setUser(user);
            navigate("/");
        } else {
            setError("Invalid Credentials");
        }
    }

    return (
        <div className="min-h-[80vh] flex items-center justify-center p-4">
            <form
                className="bg-white p-6 rounded shadow-md w-full max-w-lg"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl mb-6 font-bold text-center text-gray-800">
                    Login
                </h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <input
                    type="email"
                    placeholder="email"
                    className="border p-2 w-full mb-3"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="password"
                    className="border p-2 w-full mb-3"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
                <button className="bg-blue-500 text-white p-2 w-full">Login</button>
            </form>
        </div>
    )
}

export default LoginPage