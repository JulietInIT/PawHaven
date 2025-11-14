import { useEffect, useState } from "react";
import { request } from "../api";
import AnimalCard from "../components/AnimalCard";

export default function Animals() {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadAnimals = async () => {
      try {
        const data = await request("/animals");
        setAnimals(data);
        setError("");
      } catch (err) {
        console.error(err);
        setError("Failed to load animals");
      } finally {
        setLoading(false);
      }
    };
    loadAnimals();
  }, []);

  return (
    <div className="min-h-screen bg-blue-100 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-blue-800 mb-4">
            🐾 Meet Our Animals
          </h1>
          <p className="text-2xl text-blue-700">Find your perfect companion waiting for a loving home</p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center py-20">
            <div className="text-center">
              <div className="inline-block animate-spin text-8xl mb-6">🐾</div>
              <p className="text-gray-600 text-2xl">Loading our furry friends...</p>
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-6 rounded-lg mb-8 text-center text-lg">
            {error}
          </div>
        )}

        {/* Animals Grid */}
        {!loading && animals.length > 0 ? (
          <div className="grid grid-cols-4 gap-8">
            {animals.map(a => (
              <AnimalCard key={a._id} animal={a} />
            ))}
          </div>
        ) : !loading && (
          <div className="text-center py-20">
            <div className="text-8xl mb-6">😿</div>
            <p className="text-gray-600 text-2xl">No animals available right now. Please check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}