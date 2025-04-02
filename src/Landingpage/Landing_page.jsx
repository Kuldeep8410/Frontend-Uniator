import Signup from "../signup-login/Signup";
import Uniator from "../assets/image1.png";
import Connects from "./Connects";
import GridCards from "./GridLayout";

function LandingPage() {
    return (
        <div className="relative flex flex-col bg-black items-center min-h-screen">
            {/* Marquee Banner */}
            <div className="overflow-hidden whitespace-nowrap text-gray-300 py-3 w-full">
                <h1 className="animate-marquee text-base md:text-lg lg:text-xl font-medium tracking-wide">
                    For the best experience, use a laptop.
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
                    animation: marquee 12s linear infinite;
                }
                `}
            </style>

            {/* Hero Section */}
            <div className="flex flex-col items-center text-center px-4 md:px-24">
                <h1 className="text-white text-4xl md:text-7xl font-bold tracking-tight p-8">
                    <span className="text-gray-200">Welcome to</span> <span className="text-teal-300">Uniator</span>
                </h1>
                <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
                    A seamless web platform integrating <span className="text-teal-300">real-time code collaboration</span>,
                    a secure gate pass system with QR scanning, an <span className="text-pink-500">attendance tracker</span>,
                    an <span className="text-green-400">advanced to-do list</span>, and a <span className="text-blue-400">community forum</span>.
                </p>
            </div>

            {/* Glassmorphic Info Card */}
            <div className="mt-20 backdrop-blur-xl bg-white/10 border border-gray-700 rounded-xl p-6 flex flex-col sm:flex-row w-11/12 sm:w-3/4 h-auto sm:h-[140px] justify-center items-center shadow-lg">
                {/* Image */}
                <div className="h-20 sm:h-24 w-20 sm:w-24">
                    <img src={Uniator} className="w-full h-full rounded-2xl object-cover" alt="Uniator" />
                </div>

                {/* Text */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left px-4">
                    <h1 className="text-lg sm:text-xl font-semibold text-white">
                        Elevate Your Learning & Work Seamlessly
                    </h1>
                    <p className="text-gray-300 text-sm sm:text-base">
                        Curated learning, personalized roadmaps, and expert assistance.
                    </p>
                </div>

                {/* Button */}
                <div className="mt-4 sm:mt-0">
                    <a className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-white text-sm sm:text-base transition-all duration-200" href="#">
                        Explore More
                    </a>
                </div>
            </div>

            {/* Features Section */}
            <h1 className="text-white text-5xl mt-20 font-bold">Key Features</h1>
            <GridCards />
            <Signup />
            <Connects />
        </div>
    );
}

export default LandingPage;
