import Signup from "../signup-login/Signup";

import Uniator from '../assets/image1.png'
import Connects from "./Connects";
import GridCards from "./GridLayout";
import StatsSection from "./Upstash";
import Loader from "../UiComponents/Loader";


function LandingPage() {
    

    return (
             <div className="relative flex flex-col bg-black content-center justify-center items-center h-auto">
             <div className="overflow-hidden whitespace-nowrap text-cyan-400 py-2">
                 <h1 className="animate-marquee text-lg md:text-xl lg:text-2xl font-semibold">
                     For a better experience, use on a laptop.
                 </h1>
             </div>
 
             <style>
                 {`
 @keyframes marquee {
     0% { transform: translateX(100%); }
     100% { transform: translateX(-100%); }
 }
 
 .animate-marquee {
     display: inline-block;
     white-space: nowrap;
     animation: marquee 10s linear infinite;
 }
 `}
             </style>
 {/* Welcome Section */}
 <div className="flex flex-col items-center text-center px-4 md:px-20">
                <h1 className="text-white text-3xl md:text-6xl font-bold p-10">
                    <span className="text-pink-600">Welcome!</span> to 
                    <span className="text-yellow-400 font-bold"> Uniator</span>
                </h1>
                <p className="text-gray-400 text-lg max-w-4xl leading-relaxed">
                    A versatile web platform integrating <span className="text-yellow-400">real-time code collaboration</span>, 
                    a secure gate pass system with QR scanning, an <span className="text-pink-600">attendance tracker</span>, 
                    an <span className="text-green-500">advanced to-do list</span> with backend support, and a 
                    <span className="text-blue-400"> community discussion</span> forum. It streamlines workflow, 
                    enhances security, boosts productivity, and fosters collaboration.
                </p>
            </div>

            {/* Info Card Section */}
            <div className="mt-20 border border-gray-600 rounded-xl p-6 flex flex-col sm:flex-row w-11/12 sm:w-3/4 h-auto sm:h-[130px] justify-center items-center bg-white/10">
                {/* Image */}
                <div className="h-20 sm:h-24 w-20 sm:w-24">
                    <img src={Uniator} className="w-full h-full rounded-2xl object-cover" alt="Uniator" />
                </div>

                {/* Text */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left px-4">
                    <h1 className="text-lg sm:text-xl font-bold text-white">
                        Elevate Your Learning & Entry-Exit Smoothly
                    </h1>
                    <p className="text-gray-300 text-sm sm:text-base">
                        Curated learning, personalized roadmaps, expert doubt assistance, and more!
                    </p>
                </div>

                {/* Button */}
                <div className="mt-4 sm:mt-0">
                    <a className="bg-teal-700 hover:bg-teal-800 px-4 py-2 rounded-lg text-white text-sm sm:text-base transition-all duration-200" href="https://github.com/Kuldeep8410?tab=repositories">
                        Explore Us
                    </a>
                </div>
            </div>

            {/* Features Section */}
            <h1 className="text-white text-5xl mt-20 font-bold">Features At This Application</h1>
            <GridCards />
            <Signup />
            {/* <StatsSection /> */}
            <Connects />
        </div>
    );
}


export default LandingPage;