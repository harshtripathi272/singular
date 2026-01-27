"use client";

import { AnimatedSection } from "./AnimatedSection";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    <span className="footer-brand">Singular</span>

                    <div className="footer-links">
                        <a href="#" className="footer-link">Documentation</a>
                        <a href="#" className="footer-link">Research</a>
                        <a href="#" className="footer-link">Careers</a>
                        <a href="#" className="footer-link">Contact</a>
                    </div>

                    <span className="footer-copy">
                        © {currentYear} Singular. All rights reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
}
