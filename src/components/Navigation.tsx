"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useEffect(() => {
        const unsubscribe = scrollY.on("change", (y) => {
            setIsScrolled(y > 50);
        });
        return () => unsubscribe();
    }, [scrollY]);

    const navLinks = [
        { label: "Philosophy", href: "#philosophy" },
        { label: "Architecture", href: "#architecture" },
        { label: "Trust", href: "#trust" },
    ];

    return (
        <motion.nav
            className={`nav ${isScrolled ? "scrolled" : ""}`}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
            <div className="nav-inner">
                <a href="#" className="nav-brand">
                    Singular
                </a>

                <div className="nav-links">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="nav-link"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <a href="#explore" className="nav-cta">
                    Explore
                </a>
            </div>
        </motion.nav>
    );
}
