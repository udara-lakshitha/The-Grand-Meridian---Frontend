import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Mail, Phone, Lock, Eye, EyeOff } from "lucide-react";
import { registerUser } from "../../services/auth.service";

const inputBase =
  "w-full rounded-xl sm:rounded-2xl border border-[#E4DDD2] bg-white py-3 sm:py-4 pl-11 sm:pl-12 text-base outline-none focus:border-[#C48B32]";
const iconBase =
  "absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-[#94A3B8] w-[18px] h-[18px] sm:w-5 sm:h-5 pointer-events-none";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const updateField = (field) => (e) =>
    setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.phone ||
      !form.password ||
      !form.confirmPassword
    ) {
      setError("Please fill all fields.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await registerUser({
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phone: form.phone,
        password: form.password,
        confirmPassword: form.confirmPassword,
      });

      console.log("Registration response:", response);
      setSuccess("Registration successful!");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error("Registration error:", error);
      const message =
        error.response?.data?.message ||
        "Registration failed. Please try again.";
      setError(message);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 sm:px-0 py-6 sm:py-0">
      {/* Top */}
      <div className="flex flex-wrap justify-end items-center gap-x-3 gap-y-2 mb-8 sm:mb-12">
        <span className="text-sm text-gray-500">Already have an account?</span>
        <button
          type="button"
          onClick={() => navigate("/login")}
          className="bg-[#102235] hover:bg-[#1A3048] transition text-white px-4 sm:px-5 py-2 rounded-xl font-medium"
        >
          Sign In
        </button>
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#102235]">
        Create Account
      </h1>
      <p className="text-[#6B7D99] mt-2 mb-6 sm:mb-10 text-base sm:text-lg">
        Register as a customer
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        {/* Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative">
            <User className={iconBase} />
            <input
              type="text"
              placeholder="First Name"
              autoComplete="given-name"
              value={form.firstName}
              onChange={updateField("firstName")}
              className={`${inputBase} pr-4`}
            />
          </div>

          <div className="relative">
            <User className={iconBase} />
            <input
              type="text"
              placeholder="Last Name"
              autoComplete="family-name"
              value={form.lastName}
              onChange={updateField("lastName")}
              className={`${inputBase} pr-4`}
            />
          </div>
        </div>

        {/* Email */}
        <div className="relative">
          <Mail className={iconBase} />
          <input
            type="email"
            placeholder="Email Address"
            autoComplete="email"
            value={form.email}
            onChange={updateField("email")}
            className={`${inputBase} pr-4`}
          />
        </div>

        {/* Phone */}
        <div className="relative">
          <Phone className={iconBase} />
          <input
            type="tel"
            inputMode="tel"
            placeholder="Phone Number"
            autoComplete="tel"
            value={form.phone}
            onChange={updateField("phone")}
            className={`${inputBase} pr-4`}
          />
        </div>

        {/* Password */}
        <div className="relative">
          <Lock className={iconBase} />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            autoComplete="new-password"
            value={form.password}
            onChange={updateField("password")}
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

        {/* Confirm Password */}
        <div className="relative">
          <Lock className={iconBase} />
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            autoComplete="new-password"
            value={form.confirmPassword}
            onChange={updateField("confirmPassword")}
            className={`${inputBase} pr-12`}
          />
          <button
            type="button"
            aria-label={
              showConfirmPassword ? "Hide confirm password" : "Show confirm password"
            }
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2"
          >
            {showConfirmPassword ? (
              <EyeOff size={20} className="text-[#94A3B8]" />
            ) : (
              <Eye size={20} className="text-[#94A3B8]" />
            )}
          </button>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-600 text-sm">{success}</p>}

        <button
          type="submit"
          className="w-full rounded-xl sm:rounded-2xl bg-[#102235] py-3 sm:py-4 text-white text-base sm:text-lg font-semibold hover:bg-[#1A3048] transition"
        >
          Create Account
        </button>
      </form>

      {/* Footer */}
      <p className="text-center text-[#94A3B8] text-xs sm:text-sm mt-8 sm:mt-10">
        The Grand Meridian © 2026 — Customer Portal
      </p>
    </div>
  );
};

export default RegisterForm;
