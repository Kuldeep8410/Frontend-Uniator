import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; 
import { NavLink } from "react-router-dom";
import Logout from "./Logout";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { isAuthenticated } = useAuth0();  
  const [isOpen, setIsOpen] = useState(false);
//
  const localData = localStorage.getItem("UserData");
  let data = localData ? JSON.parse(localData) : {}; // Ensure `data` is an object
   
  console.log("local data",data)
  console.log("success res",data.success)
  console.log("data type", typeof(data.success))
  // Ensure `data.success` is always a boolean
  if (typeof data.success !== "boolean") {
    data.success = false;
  }

  return (
    <nav className="sticky top-0 z-10 bg-black backdrop-blur-lg text-black font-medium">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <span className="bg-gradient-to-tl from-yellow-500 to-red-600 bg-clip-text text-transparent text-3xl opacity-80 font-bold font-mono p-2 rounded-2xl">
            <NavLink to="/">Uniator</NavLink>
          </span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-5 bg-gradient-to-br from-yellow-500 to-red-600 bg-clip-text text-transparent text-lg font-bold">
            <NavLink to="/" className="hover:text-white hover:opacity-100 hover:scale-120 hover:border-b-2 hover:font-bold hover:border-blue-400">Home</NavLink>
            <NavLink to="/user-home" className="hover:text-white hover:opacity-100 hover:scale-120 hover:border-b-2 hover:font-bold hover:border-blue-400">User-Access</NavLink>
            <NavLink to="/discussion" className="hover:text-white hover:opacity-100 hover:scale-120 hover:border-b-2 hover:font-bold hover:border-blue-400">Community</NavLink>

            {data.success || isAuthenticated ? (
              <Logout />
            ) : (
              <NavLink to="/login" className="hover:text-white hover:opacity-100 hover:scale-120 hover:border-b-2 hover:font-bold hover:border-blue-400">
                Login
              </NavLink>
            )}
          </div>

          <button 
            className="md:hidden text-white text-2xl focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/5 text-white flex flex-col items-center space-y-4 py-4">
          <NavLink to="/user-home" className="opacity-70 hover:opacity-100 hover:text-lg hover:font-bold">Dashboard</NavLink>
          {data.success || isAuthenticated ? (
            <Logout />
          ) : (
            <NavLink to="/login" className="opacity-70 hover:opacity-100 hover:text-lg hover:font-bold">
              Login
            </NavLink>
          )}
          <NavLink to="/discussion" className="opacity-70 hover:opacity-100 hover:text-lg hover:font-bold">Community</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
