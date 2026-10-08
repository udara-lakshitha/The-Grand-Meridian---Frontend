import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

const inputBase =
  "w-full rounded-xl sm:rounded-2xl border border-[#E4DDD2] bg-white py-3 sm:py-4 pl-11 sm:pl-12 text-base outline-none focus:border-[#C48B32]";
const iconBase =
  "absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-[#94A3B8] w-[18px] h-[18px] sm:w-5 sm:h-5 pointer-events-none";

const LoginForm = ({ setUser }) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const demoUser = demoAccounts.find(
      (user) => user.email === form.email && user.password === form.password
    );

    if (demoUser) {
      setUser({
        name: demoUser.name,
        email: demoUser.email,
        role: demoUser.role,
      });
      navigate("/");
      return;
    }

    setError("Invalid email or password.");
  };

  const selectDemoUser = (account) => {
    setForm({ email: account.email, password: account.password });
    setError("");
  };

  return (
    <div className="w-full max-w-lg mx-auto px-4 sm:px-0 py-6 sm:py-0">
      {/* Top */}
      <div className="flex flex-wrap justify-end items-center gap-x-3 gap-y-2 mb-8 sm:mb-12">
        <span className="text-sm text-gray-500">Don't have an account?</span>
        <button
          type="button"
          onClick={() => navigate("/register")}
          className="bg-[#102235] hover:bg-[#1A3048] transition text-white px-4 sm:px-5 py-2 rounded-xl font-medium"
        >
          Register
        </button>
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#102235]">
        Welcome back
      </h1>
      <p className="text-[#6B7D99] mt-2 mb-6 sm:mb-10 text-base sm:text-lg">
        Sign in to your staff account
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
        <div>
          <label
            htmlFor="login-email"
            className="block text-xs font-semibold tracking-wide mb-2 text-[#102235]"
          >
            EMAIL ADDRESS
          </label>
          <div className="relative">
            <Mail className={iconBase} />
            <input
              id="login-email"
              type="email"
              placeholder="you@grandmeridian.com"
              autoComplete="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={`${inputBase} pr-4`}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2 gap-2">
            <label
              htmlFor="login-password"
              className="text-xs font-semibold tracking-wide text-[#102235]"
            >
              PASSWORD
            </label>
            <button
              type="button"
              className="text-[#C48B32] text-xs hover:underline"
            >
              Forgot password?
            </button>
          </div>

          <div className="relative">
            <Lock className={iconBase} />
            <input
              id="login-password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              autoComplete="current-password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className={`${inputBase} pr-12`}
            />
            <button
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2"
            >
              {showPassword ? (
                <EyeOff size={20} className="text-[#94A3B8]" />
              ) : (
                <Eye size={20} className="text-[#94A3B8]" />
              )}
            </button>
          </div>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full rounded-xl sm:rounded-2xl bg-[#102235] py-3 sm:py-4 text-white text-base sm:text-lg font-semibold hover:bg-[#1A3048] transition"
        >
          Sign In
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-4 my-8 sm:my-10">
        <div className="flex-1 h-px bg-[#E2DDD3]" />
        <span className="text-sm text-[#94A3B8]">Demo Accounts</span>
        <div className="flex-1 h-px bg-[#E2DDD3]" />
      </div>

      {/* Demo Cards */}
      <div className="space-y-3">
        {demoAccounts.map((account) => (
          <button
            type="button"
            key={account.email}
            onClick={() => selectDemoUser(account)}
            className="w-full text-left cursor-pointer rounded-xl sm:rounded-2xl border border-[#E4DDD2] bg-white p-3 sm:p-4 hover:border-[#C48B32] transition"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-full bg-[#102235] text-white flex items-center justify-center font-bold text-sm sm:text-base">
                  {account.initials}
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-[#102235] truncate">
                    {account.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] truncate">
                    {account.email}
                  </p>
                </div>
              </div>

              <span className="self-start sm:self-auto shrink-0 bg-[#FAF2E6] text-[#C48B32] px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm">
                {account.role}
              </span>
            </div>
          </button>
        ))}
      </div>

      <p className="text-center text-[#94A3B8] text-xs sm:text-sm mt-8 sm:mt-10">
        The Grand Meridian © 2026 — Staff Portal
      </p>
    </div>
  );
};

export default LoginForm;
