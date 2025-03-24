import LeftDivComp from "./Left_div_Comp";
import RightDivComp from "./Right_div_Comp";
import Middle_upper from "./Middle_upper";
import MiddlemiddleComp from "./Middle_middle_comp";
import { AppContext } from "../ContextApi/FisrtContext";
import { useContext, useState, useEffect } from "react";
import UserProfile from "./User_Profile";
import Todo_Page from "./Todo_redir";
import CommunityForum from "./Community_chat";
import X from '../assets/X.png';
import Git from '../assets/Github.png';
import Linked from '../assets/InkedIn.png';
import Insta from '../assets/Instagram.jpeg';

function UserHome() {
    const { SendDataSignLogin } = useContext(AppContext);
    const G_user = localStorage.getItem("userGdata");
    const [clickType, setClickType] = useState(null);
    
    useEffect(() => {
        const buttonType = localStorage.getItem("buttonClickType");
        if (buttonType) {
            setClickType(buttonType);
        }
    }, []);

    useEffect(() => {
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
            SendDataSignLogin("google-login-data", userUpdatedData);
        }
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-gray-900 text-gray-300">
            {/* Header Section */}
            <div className="flex flex-col items-center justify-center p-10 bg-gray-950 text-white">
                <h1 className="text-3xl font-bold">Hello! <span className="text-blue-400">Student</span>, How's Your Class Going?</h1>
                <p className="text-gray-400 mt-4 max-w-2xl text-center">
                    Welcome to <span className="text-blue-400 font-bold">Uniator</span>, a versatile web platform integrating real-time code collaboration, 
                    a secure gate pass system with QR scanning, an attendance tracker, an advanced to-do list with backend support, and a community forum.
                </p>
            </div>

            {/* Main Content */}
            <div className="flex flex-col md:flex-row gap-4 p-4">
                {/* Left Sidebar */}
                <div className="w-full md:w-1/5 bg-gray-800 p-4 rounded-xl">
                    <UserProfile />
                    <LeftDivComp />
                </div>

                {/* Middle Section */}
                <div className="w-full md:w-3/5 bg-gray-850 p-4 rounded-xl flex flex-col gap-4">
                    <Middle_upper />
                    <MiddlemiddleComp />
                </div>

                {/* Right Sidebar */}
                <div className="w-full md:w-1/5 bg-gray-800 p-4 rounded-xl">
                    <Todo_Page />
                    <CommunityForum />
                    <RightDivComp />
                </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col items-center bg-gray-950 p-6 text-white">
                <h1 className="text-2xl">Connect With Our Community</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    {[X, Git, Linked, Insta].map((icon, index) => (
                        <div key={index} className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all">
                            <img src={icon} alt="icon" className="w-10 h-10" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default UserHome;
