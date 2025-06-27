import { useEffect, useState, useRef } from "react";
import { SunMoon } from "lucide-react";

function ThemeSelector() {
  const themes = [
    'dark',
    'forest',
    'synthwave',
    'black',
    'business',
    'dracula',
    'night',
    'halloween',
    'luxury',
    'dim',
    'coffee',
    'cmyk'
  ];
  
  const [activeTheme, setActiveTheme] = useState("default");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "default";
    document.body.setAttribute("data-theme", savedTheme);
    setActiveTheme(savedTheme);
  }, []);

  const changeTheme = (theme) => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    setActiveTheme(theme);
    setOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="btn m-1 rounded-4xl bg-base-100"
      >
        <SunMoon color="yellow" size={35} />
      </button>

      {open && (
        <ul className="absolute bg-base-300 rounded-box z-10 w-52 p-2 shadow-2xl text-white">
          {themes.map((theme) => (
            <li key={theme}>
              <button
                className={`w-full btn btn-sm btn-ghost justify-start ${
                  activeTheme === theme ? "bg-primary" : ""
                }`}
                onClick={() => changeTheme(theme)}
              >
                {theme}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ThemeSelector;
