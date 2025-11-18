import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

 useEffect(() => {
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme === "dark" || !storedTheme) {
    // Default to dark if nothing is stored
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    setIsDarkMode(true);
  } else {
    document.documentElement.classList.remove("dark");
    setIsDarkMode(false);
  }
}, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
  onClick={toggleTheme}
  className={cn(
    "fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg bg-white/20 dark:bg-black/20 backdrop-blur-md",
    "hover:scale-105 transition-all duration-300 border border-white/20"
  )}
>
  {isDarkMode ? (
    <Sun className="h-6 w-6 text-yellow-300" />
  ) : (
    <Moon className="h-6 w-6 text-blue-900" />
  )}
</button>

  );
};