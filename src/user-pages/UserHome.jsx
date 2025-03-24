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

    const clickHandler = (props) => {
        setClickType((prevType) => {
            const newType = prevType === props ? null : props;
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
                    await SendDataSignLogin("google-login-data", userUpdatedData);
                } catch (error) {
                    console.error("Error sending user data:", error);
                }
            }
        };

        sendUserData();
    }, []);

    const dataFromLocalStorage = localStorage.getItem("UserData");
    let userInfo = dataFromLocalStorage ? JSON.parse(dataFromLocalStorage) : null;
    let G_User2 = G_user ? JSON.parse(G_user) : null;

    if (!userInfo && G_User2) {
        userInfo = G_User2;
    }

    const leftEditor = {
        url: "/all-classes-student",
        head: "Monaic Code",
        para: "Real-time code collaboration using VS Code",
        name: "Go To All",
    };

    const logout = {
        url: "/logout",
        head: "Logout",
        para: "Want to logout?",
        name: "Logout",
    };

    const AvailableClasses = {
        url: "/all-classes",
        head: "All Available",
        para: "View all scheduled classes",
        name: "Go To All",
    };

    const attendance = {
        url: "/all-classes-student",
        head: "Mark Your Attendance",
        para: "Mark attendance subject-wise",
        name: "Mark Attendance",
    };

    const QRComponent = {
        url: "/qrscanner",
        head: "G1/G2 Entries",
        para: "Scan QR for university gate entry",
        name: "Scan QR",
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-900 text-white">
            {/* Header Section */}
            <div className="flex flex-col items-center text-center py-10 px-5 bg-gray-800">
                <h1 className="text-3xl md:text-5xl font-bold">
                    <span className="text-red-500">Hello!</span>{" "}
                    <span className="text-yellow-400">Student</span> 👋
                </h1>
                <h2 className="text-xl md:text-2xl mt-3">Your <span className="text-red-400">Ultimate</span> Utility Hub!</h2>
                <p className="mt-4 max-w-2xl text-gray-400">
                    Welcome to <span className="text-yellow-300 font-semibold">Uniator</span> – an all-in-one platform
                    for students! Enjoy real-time code collaboration, secure QR gate entry, attendance tracking, an advanced to-do list, and community discussions.
                </p>
            </div>

            {/* Main Layout */}
            <div className="flex flex-col md:flex-row gap-6 p-5">
                {/* Left Sidebar */}
                <div className="w-full md:w-1/5 bg-gray-800 p-5 rounded-lg">
                    <UserProfile props={userInfo} />
                    <LeftDivComp props={leftEditor} />
                    <LeftDivComp props={userInfo} />
                    <LeftDivComp props={logout} />
                </div>

                {/* Middle Section */}
                <div className="w-full md:w-3/5 bg-gray-800 p-5 rounded-lg flex flex-col gap-6">
                    {/* Upper Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Middle_upper props={QRComponent} color={"#13180f"} />
                        <Middle_upper props={attendance} color={"#13180f"} />
                        <Middle_upper props={AvailableClasses} color={"#13180f"} />
                    </div>

                    {/* Middle Content */}
                    <div className="flex justify-center items-center gap-4">
                        <MiddlemiddleComp />
                        <MiddlemiddleComp />
                    </div>

                    {/* Recent Activities */}
                    <div className="bg-black p-5 rounded-lg text-center">
                        <h2 className="text-lg font-semibold">Your Recent Activities</h2>
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="w-full md:w-1/5 bg-gray-800 p-5 rounded-lg">
                    <Todo_Page />
                    <CommunityForum />
                    <RightDivComp props={userInfo} />
                </div>
            </div>

            {/* Social Media Section */}
            <div className="text-center py-10 bg-gray-900">
                <h1 className="text-2xl md:text-4xl font-bold">Connect With Our Community!</h1>
                <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-6 justify-center">
                    {[
                        { img: X, name: "Twitter", link: "#" },
                        { img: Git, name: "GitHub", link: "#" },
                        { img: Linked, name: "LinkedIn", link: "#" },
                        { img: Insta, name: "Instagram", link: "#" },
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-300">
                            <img src={item.img} alt={item.name} className="w-16 h-16 rounded-lg" />
                            <a href={item.link} className="mt-3 text-white hover:underline">{item.name}</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default UserHome;
