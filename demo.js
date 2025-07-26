import React, { useState, type ChangeEvent } from "react";

interface FormData {
  username: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

interface ErrorState {
  username: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

function SignUp() {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<ErrorState>({
    username: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateName = (name: string): string => {
    const nameRegex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;
    return !nameRegex.test(name)
      ? "Name should only contain letters and single spaces"
      : "";
  };

  const validatePhone = (phone: string): string => {
    const phoneRegex = /^\d{10}$/;
    return !phoneRegex.test(phone)
      ? "Phone number must be exactly 10 digits"
      : "";
  };

  const validateEmail = (email: string): string => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !emailRegex.test(email) ? "Invalid email format" : "";
  };

  const validatePassword = (password: string): string => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    return !passwordRegex.test(password)
      ? "Password must be at least 6 characters with 1 uppercase and 1 number"
      : "";
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "username") {
      setErrors((prev) => ({ ...prev, username: validateName(value) }));
    } else if (name === "phone") {
      setErrors((prev) => ({ ...prev, phone: validatePhone(value) }));
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/mountain-bg.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-green-500/30"></div>

      {/* Glassmorphism card */}
      <div className="relative z-10 bg-black/20 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/10">
        {/* Profile Avatar */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 p-1">
            <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-white text-xl font-semibold text-center mb-8 tracking-wider">
          SIGNUP FORM
        </h1>

        {/* Form */}
        <form className="space-y-4">
          <div className="space-y-1">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50 transition-all"
            />
            {errors.username && (
              <p className="text-red-400 text-sm ml-1">{errors.username}</p>
            )}
          </div>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50 transition-all"
          />

          <div className="space-y-1">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50 transition-all"
            />
            {errors.phone && (
              <p className="text-red-400 text-sm ml-1">{errors.phone}</p>
            )}
          </div>

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50 transition-all"
            required
          />

          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50 transition-all"
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-6 bg-gradient-to-r from-emerald-500/80 to-teal-500/80 backdrop-blur-sm text-white font-semibold py-3 rounded-lg hover:from-emerald-600/90 hover:to-teal-600/90 transition-all border border-white/10"
          >
            Create Account
          </button>
        </form>

        {/* Social Login */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-white/20"></div>
          <span className="px-4 text-white/60 text-sm">Or continue with</span>
          <div className="flex-grow h-px bg-white/20"></div>
        </div>

        <div className="flex space-x-3">
          <button className="flex-1 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg py-3 text-white/80 hover:bg-white/20 transition-all">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Google_%22G%22_Logo.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Google
          </button>
          <button className="flex-1 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg py-3 text-white/80 hover:bg-white/20 transition-all">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
              alt="Facebook"
              className="w-5 h-5 mr-2"
            />
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
