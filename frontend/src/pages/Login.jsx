import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "../api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center px-8 py-20">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-2xl p-12 rounded-3xl w-full max-w-lg"
      >
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-blue-800 mb-3">
            Welcome Back
          </h2>
          <p className="text-gray-700 text-xl">Login to your account</p>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-5 rounded-lg mb-8 text-lg">
            {error}
          </div>
        )}

        <div className="space-y-5 mb-8">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full px-5 py-4 border-2 border-blue-300 rounded-xl focus:border-blue-600 focus:outline-none transition text-lg"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-5 py-4 border-2 border-blue-300 rounded-xl focus:border-blue-600 focus:outline-none transition text-lg"
            required
          />
        </div>

        <button
          disabled={loading}
          className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 hover:shadow-lg transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Logging In..." : "Login"}
        </button>

        <div className="mt-8 text-center">
          <p className="text-gray-700 text-lg">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 font-bold hover:text-blue-800 transition">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}