"use client";

import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <motion.h1
                    className="headline-hero hero-headline"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.4
                    }}
                >
                    Intelligence, distilled.
                </motion.h1>

                <motion.p
                    className="hero-subtext"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.9,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.6
                    }}
                >
                    A foundational system for perception, reasoning, and action —
                    engineered for clarity at scale.
                </motion.p>
            </div>

            <motion.div
                className="hero-scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
            >
                <span>Scroll</span>
                <div className="hero-scroll-line" />
            </motion.div>
        </section>
    );
}
