import React , {useContext} from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    return(
         <nav className="bg-blue-500 p-3 text-white flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Link to="/" className="hover:underline">Home</Link>
      </div>

      <div className="flex items-center gap-4">
        {user ? (
          <>
            <span>Hi, {user.name}</span>
            <button
              onClick={logout}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/register" className="hover:underline">Register</Link>
          </>
        )}
      </div>
    </nav>
    )
}
export default Navbar;