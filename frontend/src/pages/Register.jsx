import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "../api";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post("/auth/register", form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
      console.error("Registration error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center px-8 py-20">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl p-12 rounded-3xl w-full max-w-lg"
      >
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-blue-800 mb-3">
            Create Account
          </h2>
          <p className="text-gray-700 text-xl">Join Paw Haven today</p>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-5 rounded-lg mb-8 text-lg">
            {error}
          </div>
        )}

        <div className="space-y-5 mb-8">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full px-5 py-4 border-2 border-blue-300 rounded-xl focus:border-blue-600 focus:outline-none transition text-lg"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full px-5 py-4 border-2 border-blue-300 rounded-xl focus:border-blue-600 focus:outline-none transition text-lg"
            required
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-5 py-4 border-2 border-blue-300 rounded-xl focus:border-blue-600 focus:outline-none transition text-lg"
            required
          />
        </div>

        <button
          disabled={loading}
          className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 hover:shadow-lg transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Creating Account..." : "Sign Up"}
        </button>

        <div className="mt-8 text-center">
          <p className="text-gray-700 text-lg">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 font-bold hover:text-blue-800 transition">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}