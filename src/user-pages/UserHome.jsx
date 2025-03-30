import LeftDivComp from "./Left_div_Comp";
import RightDivComp from "./Right_div_Comp";
import Middle_upper from "./Middle_upper";
import MiddlemiddleComp from "./Middle_middle_comp";
// import { useAuth0 } from "@auth0/auth0-react";
import { AppContext } from "../ContextApi/FisrtContext";
import { useContext, useState } from "react";
import { useEffect } from "react";
import UserProfile from "./User_Profile";
import Todo_Page from "./Todo_redir";
import CommunityForum from "./Community_chat";

import X from '../assets/X.png';
import Git from '../assets/Github.png'
import Linked from '../assets/InkedIn.png';
import Insta from '../assets/Instagram.jpeg';

function UserHome() {
    console.log("user auth home per hai")
    const { SendDataSignLogin } = useContext(AppContext);
    const G_user = localStorage.getItem("userGdata");



    const [clickType, setClickType] = useState(null);
    useEffect(() => {
        const buttonType = localStorage.getItem("buttonClickType");
        if (buttonType) {
            setClickType(buttonType);
        }
    }, []);

    const clickHandler = (props) => {
        setClickType((prevType) => {
            const newType = prevType === props ? null : props; // Toggle logic
            if (newType) {
                localStorage.setItem("buttonClickType", newType);
            } else {
                localStorage.removeItem("buttonClickType");
            }
            return newType;
        });
    };



    useEffect(() => {
        const sendUserData = async () => {

            if (G_user) {
                const parsedUser = JSON.parse(G_user);
                const userUpdatedData = {
                    username: parsedUser.name,
                    email: parsedUser.email,
                    image: parsedUser.picture,
                    nickname: parsedUser.nickname,
                    user_verified: parsedUser.email_verified,
                    role: "normal-user",
                };

                try {
                    const G_user_res = SendDataSignLogin("google-login-data", userUpdatedData);
                    console.log("Response from backend:", G_user_res);
                    console.log("Updated user data:", userUpdatedData);
                } catch (error) {
                    console.error("Error sending user data:", error);
                }
            } else {
                console.log("No user data found in localStorage.");
            }
        };

        sendUserData(); // Call the async function inside useEffect
    }, []);


    const dataFromLocalStorage = localStorage.getItem("UserData");
    let userInfo = dataFromLocalStorage ? JSON.parse(dataFromLocalStorage) : null;
    let G_User2 = G_user ? JSON.parse(G_user) : null

    if (userInfo == null && G_User2 != null) {
        userInfo = G_User2
    }

    // if (userInfo == null || G_User2 == null) {
    //     userInfo = {
    //         name: "",
    //         email: "",
    //         role: "",
    //     }
    // }

    // which data to be displayed 
    const leftEditor = {
        url: "#",
        head: "Monaic code",
        para: "UpComin feature, working on it",
        name: "Disabled"
    }
    const logout = {
        url: '/logout',
        head: 'Logout',
        para: "want to logout ?",
        name: "logout"
    }


    const AvailableClasses = {
        url: "/all-classes",
        head: "All Classess",
        name: "Go To All"
    }
    const attendance = {
        url: "/all-classes-student",
        head: "Mark Attendance",
        name: "Mark Attendance"
    }

    const QRComponent = {
        url: "/qrscanner",
        head: "Gate-1/Gate-2 Entries",
        name: "Scan Qr"
    }



    return (
        <div className="flex flex-col min-h-screen w-full overflow-hidden">
            <div className="flex flex-col relative bg-black items-center justify-center md:p-5 p-10 text-white">
                <h1 className="text-3xl font-bold">
                    <span className="text-red-500">Hello !</span>
                    <span className="text-yellow-300"> Student </span>
                    How's Your class going
                </h1>
                <h1 className="text-2xl font-bold">
                    Your <span className="text-red-500">Ultimate</span> Utility Hub!
                </h1>
                <p className="text-gray-400 p-10 text-center">
                    Welcome to <span className="text-yellow-300">Uniator</span>, A versatile web platform integrating real-time code collaboration, a secure gate pass system with QR scanning, an attendance tracker, an advanced to-do list with backend support, and a community discussion forum.
                </p>
            </div>

            <div className="main flex flex-col md:flex-row bg-black min-h-screen gap-2 p-4 overscroll-none">
                <div className="left-div flex flex-col w-full md:w-1/5 bg-white/15 border-2 pl-1 pr-4 pt-5 rounded-2xl md:h-screen">
                    <UserProfile />
                    <LeftDivComp />
                    <LeftDivComp />
                    <LeftDivComp />
                </div>

                <div className="middle-div flex flex-col items-center justify-center bg-white/10 w-full md:w-3/5 p-2 rounded-2xl gap-4">
                    <div className="middle flex flex-col md:flex-row justify-center border-0 rounded-2xl text-white w-full md:h-[200px] gap-4">
                        <Middle_upper color={"#13180f"} />
                        <Middle_upper color={"#13180f"} />
                        <Middle_upper color={"#13180f"} />
                    </div>
                    <div className="middle flex justify-center rounded-2xl text-white w-full md:h-[200px] md:gap-5">
                        <MiddlemiddleComp />
                        <MiddlemiddleComp />
                    </div>
                    <div className="middle flex justify-center border-0 rounded-2xl border-b-emerald-600 bg-white/10 text-white w-full p-4">
                        <h1>Your Recent Activities</h1>
                    </div>
                </div>

                <div className="right-div bg-white/10 w-full md:w-1/5 p-4 rounded-2xl md:h-screen">
                    <Todo_Page />
                    <CommunityForum />
                    <RightDivComp />
                </div>
            </div>

            <div className="flex flex-col bg-black text-white items-center py-10">
                <h1 className="p-3 text-xl md:text-4xl text-center">Connect With Our Community!</h1>
                <div className="grid grid-cols-2 grid-rows-2 gap-3 md:grid-cols-4 md:grid-rows-1 w-3/4 mt-6">
                    {["Twitter", "GitHub", "LinkedIn", "Instagram"].map((name, index) => (
                        <div key={index} className="flex flex-col items-center justify-center w-full aspect-square bg-white/10 text-white rounded-lg hover:border hover:border-white p-4">
                            <h1>
                                <a href="#" className="hover:underline">{name}</a>
                            </h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default UserHome;

