import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white mt-20">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-4 gap-16 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold mb-4">🐾 Paw Haven</h3>
            <p className="text-blue-200 text-lg">Connecting hearts with paws since 2024.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-xl">Quick Links</h4>
            <ul className="space-y-3 text-lg text-blue-200">
              <li><Link to="/" className="hover:text-white transition font-medium">Home</Link></li>
              <li><Link to="/animals" className="hover:text-white transition font-medium">Animals</Link></li>
              <li><Link to="/volunteer" className="hover:text-white transition font-medium">Volunteer</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-6 text-xl">Company</h4>
            <ul className="space-y-3 text-lg text-blue-200">
              <li><a href="#" className="hover:text-white transition font-medium">About Us</a></li>
              <li><a href="#" className="hover:text-white transition font-medium">Contact</a></li>
              <li><a href="#" className="hover:text-white transition font-medium">Privacy</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-6 text-xl">Follow Us</h4>
            <div className="flex gap-6 text-4xl">
              <a href="#" className="hover:text-blue-300 transition">f</a>
              <a href="#" className="hover:text-blue-300 transition">𝕏</a>
              <a href="#" className="hover:text-blue-300 transition">📷</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-700 pt-10 text-center text-blue-300 text-lg">
          <p>© {new Date().getFullYear()} Paw Haven. All rights reserved. Made with ❤️ for animals.</p>
        </div>
      </div>
    </footer>
  );
}