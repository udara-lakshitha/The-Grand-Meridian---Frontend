import { useState } from "react"
import { useNavigate } from "react-router-dom";
import LeftPanel from "../components/Login/LeftPanel";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

const LoginPage = ({ setUser }) => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    })

    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const demoAccounts = [
        {
            name: "Sana Kaur",
            email: "admin@grandmeridian.com",
            role: "Admin",
            initials: "SK",
            password: "12345",
        },
        {
            name: "Isabelle Durant",
            email: "manager@grandmeridian.com",
            role: "Manager",
            initials: "ID",
            password: "12345",
        },
        {
            name: "Marcus Webb",
            email: "reception@grandmeridian.com",
            role: "Receptionist",
            initials: "MW",
            password: "12345",
        },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        const demoUser = demoAccounts.find(
            (account) =>
                account.email === form.email &&
                account.password === form.password
        );

        if (demoUser) {
            const user = {
                name: demoUser.name,
                email: demoUser.email,
                role: demoUser.role,
            };

            setUser(user);
            navigate("/");
            return;
        }

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
            setError("Invalid email or password. Try a demo account below.");
        }
    }

    const selectDemoUser = (account) => {
        setForm({
            email: account.email,
            password: account.password,
        });

        setError("");
    };

    return (
        <div className="min-h-screen grid lg:grid-cols-[5fr_4fr]">

            <LeftPanel />

            <div className="bg-[#F8F3E9] flex items-center justify-center px-10">
                <div className="w-full max-w-md mt-10">
                    <h1 className="text-2xl font-serif font-bold text-[#102235]">
                        Welcome back
                    </h1>
                    <p className="text-md text-[#6B7D99] mb-10">
                        Sign in to your staff account
                    </p>
                    <form onSubmit={handleSubmit}>
                        <label className="block text-xs font-semibold text-[#102235] mb-1">
                            EMAIL ADDRESS
                        </label>
                        <div className="relative mb-6">
                            <Mail
                                className="absolute left-4 top-4 text-[#9AA8BD]"
                                size={20}
                            />
                            <input
                                type="email"
                                placeholder="you@grandmeridian.com"
                                className="w-full rounded-2xl border border-[#E3DED4] bg-white py-3 pl-12 pr-4 outline-none placeholder:text-[#C5CBD5]"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                            />
                        </div>
                        <div className="flex justify-between mb-1">
                            <label className="text-xs font-semibold text-[#102235]">
                                PASSWORD
                            </label>
                            <button
                                type="button"
                                className="text-[#C48B32] text-xs"
                            >
                                Forgot password?
                            </button>
                        </div>
                        <div className="relative mb-4">
                            <Lock
                                className="absolute left-4 top-4 text-[#9AA8BD]"
                                size={20}
                            />
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                className="w-full rounded-2xl border border-[#E3DED4] bg-white py-4 pl-12 pr-12 outline-none placeholder:text-[#C5CBD5]"
                                value={form.password}
                                onChange={(e) => setForm({ ...form, password: e.target.value })}
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9AA8BD] hover:text-[#102235] transition"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                        {error &&
                            <p className="text-red-500 mb-4">
                                {error}
                            </p>
                        }
                        <button
                            className=" w-full bg-[#102235] text-white py-3 rounded-2xl font-semibold text-lg hover:bg-[#1A3048] transition"
                        >
                            Sign In
                        </button>
                    </form>

                    <div className="flex items-center gap-4 my-6">
                        <div className="h-px bg-[#E2DDD3] flex-1"></div>
                        <span className="text-[#8A99B0] text-sm">
                            Demo accounts
                        </span>
                        <div className="h-px bg-[#E2DDD3] flex-1"></div>
                    </div>

                    <div className="space-y-2">
                        {
                            demoAccounts.map((account, index) => (
                                <div
                                    key={index}
                                    onClick={() => selectDemoUser(account)}
                                    className={`flex items-center justify-between bg-white border rounded-2xl p-3 cursor-pointer hover:border-[#D9A441] ${index === 1 ? "border-[#D9A441]" : "border-[#E3DED4]"} `}
                                >
                                    <div className="flex items-center gap-4">
                                        <div
                                            className="w-10 h-10 rounded-full bg-[#102235] text-white flex items-center justify-center font-bold "
                                        >
                                            {account.initials}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-[#102235]">
                                                {account.name}
                                            </h3>
                                            <p className="text-xs text-[#8494AE]">
                                                {account.email}
                                            </p>
                                        </div>
                                    </div>
                                    <span
                                        className=" bg-[#F8F1E4] text-[#C48B32] px-4 py-1 rounded-full text-sm "
                                    >
                                        {account.role}
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                    <p className="text-center mt-8 mb-10 text-[#8291AA]">
                        The Grand Meridian © 2026 — Staff Portal
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage


