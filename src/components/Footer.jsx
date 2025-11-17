import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-10 px-6 bg-secondary/20 backdrop-blur-lg border-t border-white/10 mt-20">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Brand / Copyright */}
        <p className="text-sm text-muted-foreground tracking-wide">
          © {new Date().getFullYear()} Jyoti Agarwal. All rights reserved.
        </p>

        {/* Back to Top Button */}
        <a
          href="#hero"
          className="p-3 rounded-full bg-primary/10 text-primary border border-primary/20
                     hover:bg-primary/20 hover:border-primary/40 hover:shadow-lg 
                     transition-all duration-300"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </a>
      </div>
    </footer>
  );
};
