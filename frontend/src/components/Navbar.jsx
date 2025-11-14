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
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-semibold tracking-wide">🐾 PawHaven</h1>

        <ul className="flex gap-6">
          {navItems.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={`hover:text-yellow-200 transition ${
                  pathname === path ? "font-bold underline" : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}