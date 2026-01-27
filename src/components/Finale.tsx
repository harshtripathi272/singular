"use client";

import { AnimatedSection } from "./AnimatedSection";

export function Finale() {
    return (
        <section id="explore" className="section finale">
            <div className="container" style={{ textAlign: 'center' }}>
                <AnimatedSection>
                    <h2 className="headline-section finale-headline">
                        Clarity emerges<br />from depth.
                    </h2>
                </AnimatedSection>

                <AnimatedSection delay={0.1}>
                    <p className="finale-text">
                        Singular represents a new foundation for machine intelligence —
                        one built for understanding, not just performance.
                    </p>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="#" className="btn btn-primary">
                            Explore the system
                            <span className="btn-arrow">→</span>
                        </a>
                        <a href="#" className="btn btn-secondary">
                            View documentation
                        </a>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
