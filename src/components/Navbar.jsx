import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">

      <nav className="mx-auto mt-4 max-w-6xl px-5">

        <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/60 px-5 py-3 backdrop-blur-xl">

          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-bold tracking-tight"
          >
            SK<span className="text-white/30">.</span>
          </a>


          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 md:flex">

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-white/50 transition hover:text-white"
              >
                {item.name}
              </a>
            ))}

          </div>


          {/* Desktop Button */}
          <a
            href="#contact"
            className="hidden rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition hover:scale-105 md:block"
          >
            Let's Talk
          </a>


          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-full border border-white/10 p-2 md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>


        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-2 rounded-3xl border border-white/10 bg-black/90 p-5 backdrop-blur-xl md:hidden"
            >

              <div className="flex flex-col gap-5">

                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-white/60 transition hover:text-white"
                  >
                    {item.name}
                  </a>
                ))}

              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </nav>

    </header>
  );
}

export default Navbar;