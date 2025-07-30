import React, { useEffect, useState } from "react";
import { Clock, MapPin, Users, Zap, Shield, Globe } from "lucide-react";

const Footer = () => {
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState({
    temp: null,
    description: "",
    icon: "",
    city: "",
  });

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Fetch weather data on mount
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = "YOUR_API_KEY"; 
        const city = "Katra J&K"; 
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${Jammu}&units=metric&appid=${0}`
        );
        const data = await response.json();
        if (data?.main?.temp && data?.weather?.[0]) {
          setWeather({
            temp: Math.round(data.main.temp),
            description: data.weather[0].description,
            icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
            city: data.name,
          });
        }
      } catch (error) {
        console.error("Weather fetch error:", error);
        // Fallback data for demo
        setWeather({
          temp: 22,
          description: "clear sky",
          icon: "https://openweathermap.org/img/wn/01d@2x.png",
          city: "Katra J&K",
        });
      }
    };

    fetchWeather();
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true });
  };

  const footerLinks = [
    { label: "About", icon: Users },
    { label: "Help", icon: Shield },
    { label: "Press", icon: Globe },
    { label: "API", icon: Zap },
    { label: "Jobs", icon: Users },
    { label: "Privacy", icon: Shield },
    { label: "Terms", icon: Globe },
    { label: "Locations", icon: MapPin },
  ];

  const dashboardLinks = [
    { label: "OTP Verification", href: "/otpvarification", gradient: "from-purple-500 to-pink-500" },
    { label: "QR Scanner", href: "/qrscanner", gradient: "from-blue-500 to-cyan-500" },
    { label: "QR Generator", href: "/qrgenerator", gradient: "from-green-500 to-emerald-500" },
    { label: "Teacher Dashboard", href: "/admin-dashboard", gradient: "from-orange-500 to-red-500" },
    { label: "Teacher Login", href: "/admin-login", gradient: "from-violet-500 to-purple-500" },
    { label: "User Home", href: "/user-home", gradient: "from-indigo-500 to-blue-500" },
    { label: "Make Posts", href: "/discussion/makepost", gradient: "from-pink-500 to-rose-500" },
    { label: "Image Upload", href: "/upload", gradient: "from-teal-500 to-green-500" },
    { label: "Administrator Dashboard", href: "/administrator", gradient: "from-amber-500 to-orange-500" },
    { label: "Administrator Login", href: "/administrator-login", gradient: "from-red-500 to-pink-500" },
  ];

  return (
    <footer className="relative w-full overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-base-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent)] animate-pulse"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-bounce" style={{animationDelay: '0s', animationDuration: '6s'}}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-bounce" style={{animationDelay: '2s', animationDuration: '8s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-2xl animate-spin" style={{animationDuration: '20s'}}></div>
      </div>

      <div className="relative z-10 text-white py-16 mt-12">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Weather & Time Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center space-x-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl">
              {/* Weather */}
              <div className="flex items-center space-x-4 group">
                {weather.icon && (
                  <div className="relative">
                    <img 
                      src={weather.icon} 
                      alt={weather.description} 
                      className="w-16 h-16 drop-shadow-lg group-hover:scale-110 transition-transform duration-300" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  </div>
                )}
                <div className="text-left">
                  <div className="flex items-center space-x-2 text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span>{weather.city || "Loading..."}</span>
                  </div>
                  <div className="capitalize text-gray-300 text-lg">{weather.description || "Fetching weather..."}</div>
                </div>
                {weather.temp !== null && (
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    {weather.temp}°C
                  </div>
                )}
              </div>

              {/* Divider */}
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

              {/* Time */}
              <div className="flex items-center space-x-3 group">
                <Clock className="w-8 h-8 text-emerald-400 group-hover:rotate-12 transition-transform duration-300" />
                <div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">Current Time</div>
                  <div className="font-mono text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                    {formatTime(time)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {footerLinks.map((link, idx) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={idx}
                  href="#"
                  className="group flex items-center space-x-2 px-4 py-2 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <IconComponent className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {link.label}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Dashboard Navigation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {dashboardLinks.map(({ label, href, gradient }, idx) => (
              <a
                key={idx}
                href={href}
                className="group relative overflow-hidden bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-2xl p-4 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className="text-white font-medium text-center group-hover:text-white transition-colors duration-300">
                    {label}
                  </div>
                  <div className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r ${gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                </div>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {new Date().getFullYear()}</span>
              <span className="font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent text-lg">
                smvDeX
              </span>
              <span>- Crafted with passion</span>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-8 left-8 w-2 h-2 bg-purple-500 rounded-full animate-ping"></div>
          <div className="absolute top-16 right-16 w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute bottom-12 left-20 w-1.5 h-1.5 bg-pink-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;