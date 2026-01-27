"use client";

import { AnimatedSection, AnimatedChild } from "./AnimatedSection";

const trustPillars = [
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        title: "Transparency",
        description: "Every decision has a trace. Every output can be explained. No black boxes, no hidden logic."
    },
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" />
            </svg>
        ),
        title: "Control",
        description: "Human oversight at every critical juncture. Adjustable autonomy levels. Clear intervention points."
    },
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
        ),
        title: "Reliability",
        description: "Consistent behavior under pressure. Graceful degradation. Built for the long term."
    },
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
        ),
        title: "Security",
        description: "End-to-end protection. Data isolation. Auditable access logs. Enterprise-grade safeguards."
    }
];

export function Trust() {
    return (
        <section id="trust" className="section section-dark">
            <div className="container">
                <AnimatedSection>
                    <div className="section-header">
                        <span className="text-caption section-label">Trust</span>
                        <h2 className="headline-section">
                            Intelligence you<br />can depend on
                        </h2>
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={0.1}>
                    <div className="section-text text-body" style={{ marginBottom: '32px' }}>
                        <p>
                            Power without control is liability. Singular is built from first
                            principles of accountability — ensuring that advanced capability
                            never comes at the cost of human oversight.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection stagger>
                    <div className="trust-grid">
                        {trustPillars.map((pillar, index) => (
                            <AnimatedChild key={index}>
                                <div className="trust-card">
                                    <div className="trust-icon">
                                        {pillar.icon}
                                    </div>
                                    <h3>{pillar.title}</h3>
                                    <p>{pillar.description}</p>
                                </div>
                            </AnimatedChild>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
