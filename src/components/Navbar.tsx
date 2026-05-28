import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f0f1a]/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => handleClick(e, "top")}
          className="text-white font-bold tracking-tight text-lg"
        >
          Eazy<span className="text-primary">Flow</span>
        </a>
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <a
              href="#ebook"
              onClick={(e) => handleClick(e, "ebook")}
              className="text-white/60 hover:text-white transition-colors"
            >
              Materiais
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
