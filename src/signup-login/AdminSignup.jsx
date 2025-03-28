import { useContext, useState } from "react";
import { AppContext } from "../ContextApi/FisrtContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Adminuser() {
  const { loading, setLoading, SendDataSignLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const [NormaluserData, setNormalUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpass: "", // ✅ ADDED
    role: "Admin-user",
    FuckltyOf: "",
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setNormalUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const NewObject = {
    name: NormaluserData.username,
    email: NormaluserData.email,
    password: NormaluserData.password,
    role: NormaluserData.role,
    FuckltyOf: NormaluserData.FuckltyOf,
  };

  if (NormaluserData.email) {
    localStorage.setItem("useremail", NormaluserData.email);
  } else {
    console.log("Error: Email is missing in NormaluserData");
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    // ✅ Check if passwords match
    if (NormaluserData.password !== NormaluserData.confirmpass) {
      toast.error("Passwords do not match");
      return;
    }

    const response = await SendDataSignLogin("admin-sign-up", NewObject);
    console.log(response);

    if (response.ok) {
      toast.success(response.message);
      setTimeout(() => {
        navigate("/otpvarification");
      }, 1000);
    } else if (response.message === "User already exists, please login") {
      toast.warn(response.message);
      setTimeout(() => {
        navigate("/admin-login");
      }, 1000);
    } else {
      toast.error(response.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 px-4">
      {loading ? (
        <Loader />
      ) : (
        <div className="w-full max-w-lg bg-gray-800/50 backdrop-blur-lg shadow-lg rounded-lg p-6 md:p-8">
          <form className="flex flex-col" onSubmit={submitHandler}>
            <h1 className="text-2xl font-semibold text-blue-400 border-b-2 pb-2 text-center">
              Admin Signup
            </h1>

            <label htmlFor="name" className="mt-4 text-gray-300">
              Teacher Name
            </label>
            <input
              type="text"
              id="name"
              name="username"
              value={NormaluserData.username}
              onChange={changeHandler}
              required
              className="w-full px-4 py-2 mt-1 bg-gray-700 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <label htmlFor="email" className="mt-4 text-gray-300">
              Teacher Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={NormaluserData.email}
              onChange={changeHandler}
              required
              className="w-full px-4 py-2 mt-1 bg-gray-700 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <label htmlFor="FuckltyOf" className="mt-4 text-gray-300">
              Faculty Of
            </label>
            <select
              id="FuckltyOf"
              name="FuckltyOf"
              value={NormaluserData.FuckltyOf}
              onChange={changeHandler}
              className="w-full px-4 py-2 mt-1 bg-gray-700 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Select An Option</option>
              <option value="CSE">Computer Science & Engineering</option>
              <option value="ECE">Electronic Communication & Engineering</option>
              <option value="EE">Electrical Engineering</option>
              <option value="CE">Civil Engineering</option>
              <option value="MEC">Mechanical Engineering</option>
              <option value="BIOTECH">Biotechnology and Engineering</option>
              <option value="BBA">Bachelors of Business Administration</option>
              <option value="MBA">Masters in Business Administration</option>
            </select>

            <label htmlFor="pass" className="mt-4 text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="pass"
              name="password"
              value={NormaluserData.password}
              onChange={changeHandler}
              required
              className="w-full px-4 py-2 mt-1 bg-gray-700 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <label htmlFor="con-pass" className="mt-4 text-gray-300">
              Confirm Password
            </label>
            <input
              type="password"
              id="con-pass"
              name="confirmpass"
              value={NormaluserData.confirmpass}
              onChange={changeHandler}
              required
              className="w-full px-4 py-2 mt-1 bg-gray-700 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md mt-6 font-semibold transition-all hover:scale-105"
            >
              Sign Up
            </button>
          </form>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default Adminuser;
