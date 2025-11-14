import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/animals", label: "Animals" },
    { path: "/login", label: "Login" },
    { path: "/register", label: "Register" },
    { path: "/profile", label: "Profile" },
    { path: "/volunteer", label: "Volunteer" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b-4 border-blue-600">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        {/* Left: PawHaven Header */}
        <Link to="/" className="flex items-center gap-3">
          <span className="text-5xl">🐾</span>
          <span className="text-4xl font-bold text-blue-600">Paw Haven</span>
        </Link>

        {/* Right: Navigation Buttons */}
        <div className="flex gap-3">
          {navItems.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`px-5 py-2 rounded-lg font-bold text-lg transition ${
                pathname === path
                  ? "bg-blue-800 text-white shadow-lg"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}