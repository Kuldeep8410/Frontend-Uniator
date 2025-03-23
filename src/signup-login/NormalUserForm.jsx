import { useContext, useState, useEffect } from "react";
import './From.css';
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AppContext } from "../ContextApi/FisrtContext";
import { ToastContainer, toast } from 'react-toastify';
import { NavLink, useNavigate } from "react-router-dom";
import LoginButton from "../Google Auth/Login";
import { useAuth0 } from "@auth0/auth0-react";

function Normaluser() {
    const navigate = useNavigate();
    const googleAuth = useAuth0();

    const [showpass, SetShowpass] = useState(false);
    const [confshowpass, SetconfShowpass] = useState(false);
    const [IsPassMatch, SetMatch] = useState(true);

    const { SendDataSignLogin } = useContext(AppContext);

    const [NormaluserData, setNormalUserData] = useState({
        username: "",
        email: "",
        password: "",
        confirmpass: "",
        role: "normal-user",
    });

    // Load email from localStorage on component mount
    useEffect(() => {
        const storedEmail = localStorage.getItem("useremail");
        if (storedEmail) {
            setNormalUserData(prevData => ({ ...prevData, email: storedEmail }));
        }
    }, []);

    // Handle input changes
    const changeHandler = (event) => {
        const { name, value } = event.target;
        setNormalUserData(prevData => ({
            ...prevData,
            [name]: value,
        }));
        SetMatch(true);
    };

    // Save email to localStorage when it changes
    useEffect(() => {
        if (NormaluserData.email) {
            localStorage.setItem("useremail", NormaluserData.email);
        }
    }, [NormaluserData.email]);

    // Handle form submission
    const submitHandler = async (e) => {
        e.preventDefault();

        if (NormaluserData.password === NormaluserData.confirmpass) {
            localStorage.setItem("useremail", NormaluserData.email); // Ensure email is saved before redirecting

            const signupresponse = await SendDataSignLogin('signup', SignUpData);

            if (signupresponse.error) {
                toast.error(signupresponse.error);
            } else {
                toast.success(signupresponse.message);
                setTimeout(() => {
                    navigate("/otpvarication");
                }, 1000);
            }
        } else {
            SetMatch(!IsPassMatch);
            toast.warning("Password not match");
        }
    };

    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <label htmlFor="name">Student Name</label>
                <input type="text" id="name" name="username" value={NormaluserData.username} onChange={changeHandler} required />

                <label htmlFor="email">Student Email</label>
                <input type="email" id="email" name="email" value={NormaluserData.email} onChange={changeHandler} required />

                <label htmlFor="pass">Password
                    <input type={showpass ? "text" : "password"} id="pass" name="password" value={NormaluserData.password} onChange={changeHandler} required />
                    <span onClick={() => SetShowpass(!showpass)} className="flex items-center cursor-pointer">
                        {showpass ? <FaRegEye /> : <FaEyeSlash />}
                    </span>
                </label>

                <label htmlFor="con-pass">Confirm Password
                    <input type={confshowpass ? "text" : "password"} id="con-pass" name="confirmpass" value={NormaluserData.confirmpass} onChange={changeHandler} required style={IsPassMatch ? {} : { borderColor: "red", backgroundColor: "red" }} />
                    <span onClick={() => SetconfShowpass(!confshowpass)} className="flex items-center cursor-pointer">
                        {confshowpass ? <FaRegEye /> : <FaEyeSlash />}
                    </span>
                </label>

                <button type="submit">Sign Up</button>
                <span className="border rounded-md p-2 ml-2 text-red-500">
                    Already have an account?
                    <NavLink to="/login" className="ml-2 text-white bg-green-600 px-2 py-1 rounded-md">Login</NavLink>
                </span>

                <span className="flex items-center justify-center border-2 border-blue-700 rounded-md p-2 mt-2 text-white hover:bg-blue-800 cursor-pointer">
                    <FcGoogle size={30} /> <h2><LoginButton /></h2>
                </span>
            </form>
            <ToastContainer />
        </div>
    );
}

export default Normaluser;
