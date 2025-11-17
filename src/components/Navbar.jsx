// import { cn } from "@/lib/utils";
// import { Menu, X } from "lucide-react";
// import { useEffect, useState } from "react";

// const navItems = [
//   { name: "Home", href: "#hero" },
//   { name: "About", href: "#about" },
//   { name: "Skills", href: "#skills" },
//   { name: "Projects", href: "#projects" },
//   { name: "Contact", href: "#contact" },
// ];

// export const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={cn(
//         "fixed w-full z-40 transition-all duration-300",
//         isScrolled
//           ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
//           : "py-5"
//       )}
//     >
//       <div className="container flex items-center justify-between">
        
//         {/* --- LOGO --- */}
//         <a
//           className="text-xl font-bold text-primary flex items-center gap-2"
//           href="#hero"
//         >
//           <span className="relative z-10 text-glow text-foreground tracking-wide">
//             Jyoti
//           </span>
//           <span className="opacity-80">Portfolio</span>
//         </a>

//         {/* --- DESKTOP NAV --- */}
//         <div className="hidden md:flex space-x-10 ml-5">
//           {navItems.map((item, key) => (
//             <a
//               key={key}
//               href={item.href}
//               className="relative text-foreground/80 hover:text-primary transition-colors duration-300 group"
//             >
//               {item.name}
//               {/* underline hover effect */}
//               <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
//             </a>
//           ))}
//         </div>

//         {/* --- MOBILE MENU BUTTON --- */}
//         <button
//           onClick={() => setIsMenuOpen((prev) => !prev)}
//           className="md:hidden p-2 text-foreground z-50"
//           aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
//         >
//           {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>

//         {/* --- MOBILE MENU PANEL --- */}
//         <div
//           className={cn(
//             "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
//             "transition-all duration-300 md:hidden",
//             isMenuOpen
//               ? "opacity-100 pointer-events-auto translate-y-0"
//               : "opacity-0 pointer-events-none translate-y-4"
//           )}
//         >
//           <div className="flex flex-col space-y-8 text-xl">
//             {navItems.map((item, key) => (
//               <a
//                 key={key}
//                 href={item.href}
//                 className="text-foreground/80 hover:text-primary transition-colors duration-300"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item.name}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };



import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/60 backdrop-blur-xl border-b border-white/10 shadow-md"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">

        {/* --- LOGO --- */}
        <a
          href="#hero"
          className="text-xl font-semibold flex items-center gap-1 tracking-wide"
        >
          <span className="text-primary font-bold drop-shadow">
            Jyoti
          </span>
          <span className="text-foreground/70">Portfolio</span>
        </a>

        {/* --- DESKTOP NAVIGATION --- */}
        <div className="hidden md:flex space-x-10 ml-5">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-foreground/80 hover:text-primary transition-all duration-300 group text-sm font-medium tracking-wide"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* --- MOBILE MENU BUTTON --- */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
          className="md:hidden p-2 text-foreground"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* --- MOBILE MENU --- */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-xl md:hidden transition-all duration-300 flex flex-col items-center justify-center",
            isMenuOpen
              ? "opacity-100 pointer-events-auto translate-y-0"
              : "opacity-0 pointer-events-none translate-y-5"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">

            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground/90 hover:text-primary transition-all duration-300 font-medium tracking-wide"
                style={{
                  animation: isMenuOpen
                    ? `fadeIn 0.3s ease forwards ${index * 0.1}s`
                    : "none",
                }}
              >
                {item.name}
              </a>
            ))}

          </div>
        </div>

      </div>

      {/* --- Small fade animation for mobile links --- */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};
