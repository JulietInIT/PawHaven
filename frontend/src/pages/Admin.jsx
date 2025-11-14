import { useEffect, useState } from "react";
import axios from "../api";

export default function Admin() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const res = await axios.get("/admin/stats");
        setStats(res.data);
      } catch (err) {
        console.error("Failed to load admin stats:", err);
      } finally {
        setLoading(false);
      }
    };
    loadStats();
  }, []);

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-500 animate-pulse">
        Loading admin dashboard…
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-100 py-12 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-blue-800 mb-2">
            Admin Dashboard
          </h1>
          <p className="text-blue-700 text-lg">Manage your Paw Haven community</p>
        </div>

        {/* Stats Grid */}
        {stats ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Animals Card */}
            <div className="bg-blue-500 rounded-2xl shadow-lg p-8 text-white">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-blue-100 text-sm font-semibold mb-1">TOTAL ANIMALS</p>
                  <p className="text-5xl font-bold">{stats.animals || 0}</p>
                </div>
                <div className="text-5xl">🐾</div>
              </div>
              <div className="bg-blue-400 bg-opacity-30 h-2 rounded-full overflow-hidden">
                <div className="bg-white h-full" style={{ width: "70%" }}></div>
              </div>
            </div>

            {/* Users Card */}
            <div className="bg-blue-600 rounded-2xl shadow-lg p-8 text-white">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-blue-100 text-sm font-semibold mb-1">TOTAL USERS</p>
                  <p className="text-5xl font-bold">{stats.users || 0}</p>
                </div>
                <div className="text-5xl">👥</div>
              </div>
              <div className="bg-blue-500 bg-opacity-30 h-2 rounded-full overflow-hidden">
                <div className="bg-white h-full" style={{ width: "60%" }}></div>
              </div>
            </div>

            {/* Volunteers Card */}
            <div className="bg-blue-700 rounded-2xl shadow-lg p-8 text-white">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-blue-100 text-sm font-semibold mb-1">TOTAL VOLUNTEERS</p>
                  <p className="text-5xl font-bold">{stats.volunteers || 0}</p>
                </div>
                <div className="text-5xl">🤝</div>
              </div>
              <div className="bg-blue-600 bg-opacity-30 h-2 rounded-full overflow-hidden">
                <div className="bg-white h-full" style={{ width: "50%" }}></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="text-6xl mb-4">📊</div>
            <p className="text-gray-600 text-lg">No statistics available.</p>
          </div>
        )}

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-5xl mb-4">➕</div>
            <h3 className="text-2xl font-bold text-blue-800 mb-2">Add Animal</h3>
            <p className="text-gray-700 mb-4">Register new animals to the system</p>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
              Add Now
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-5xl mb-4">📋</div>
            <h3 className="text-2xl font-bold text-blue-800 mb-2">View Adoptions</h3>
            <p className="text-gray-700 mb-4">Check pending adoption requests</p>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
              View All
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-2xl font-bold text-blue-800 mb-2">Manage Users</h3>
            <p className="text-gray-700 mb-4">Oversee user accounts and roles</p>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
              Manage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}