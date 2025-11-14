import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-100">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-32 text-center">
        <h1 className="text-7xl font-bold text-blue-800 mb-6">
          Welcome to Paw Haven 🐾
        </h1>
        <p className="text-2xl text-blue-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          Find your perfect furry companion. Adopt, volunteer, or donate to support animal welfare.
        </p>
        
        <div className="flex gap-6 justify-center">
          <Link
            to="/animals"
            className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 hover:shadow-lg transition transform hover:scale-105"
          >
            Browse Animals
          </Link>
          <Link
            to="/register"
            className="border-3 border-blue-600 text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition"
          >
            Join Us
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-3 gap-12">
          {/* Adopt */}
          <div className="bg-white p-12 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <div className="text-8xl mb-6">🏡</div>
            <h3 className="text-3xl font-bold text-blue-600 mb-4">Adopt</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Find your perfect pet from our collection of animals waiting for a loving home.
            </p>
          </div>

          {/* Volunteer */}
          <div className="bg-white p-12 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <div className="text-8xl mb-6">🤝</div>
            <h3 className="text-3xl font-bold text-blue-600 mb-4">Volunteer</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Make a difference by helping care for animals and supporting our mission.
            </p>
          </div>

          {/* Donate */}
          <div className="bg-white p-12 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <div className="text-8xl mb-6">💝</div>
            <h3 className="text-3xl font-bold text-blue-600 mb-4">Donate</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Support our cause and help provide better care for animals in need.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-24 mt-16">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to help?</h2>
          <p className="text-xl mb-10 opacity-95 max-w-2xl mx-auto">Join our community and make a real difference in animals' lives.</p>
          <Link
            to="/register"
            className="inline-block bg-white text-blue-600 px-12 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}