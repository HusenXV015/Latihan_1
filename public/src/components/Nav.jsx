import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <>
      <nav className="py-3 bg-purple-900 navbar-color">
        <div className="flex-1 flex items-center justify-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-white text-2xl uppercase font-bold">
              Hacktiv Legends
            </span>
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4 align-middle font-bold">
                <Link to="/">
              <a
                href="#"
                className="text-white opacity-80 text-md uppercase hover:opacity-100 px-3 py-2"
              >
                Home
              </a>
              </Link>
              <Link to="/favourite">
              <a
                href="#"
                className="text-white opacity-80 text-md uppercase hover:opacity-100 px-3 py-2"
              >
                Favourites
              </a>
              </Link>
              <a
                href="#"
                className="text-white opacity-80 text-md uppercase hover:opacity-100 px-3 py-2"
                onClick={handleLogout}
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
