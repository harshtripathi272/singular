"use client";

import { AnimatedSection, AnimatedChild } from "./AnimatedSection";

const industries = [
    {
        title: "Finance",
        stat: "99.8%",
        label: "Fraud Detection",
        description: "Reducing false positives while catching anomalies in real-time."
    },
    {
        title: "Logistics",
        stat: "40%",
        label: "Cost Reduction",
        description: "Optimizing routes and supply chains with predictive modeling."
    },
    {
        title: "Healthcare",
        stat: "100x",
        label: "Diagnosis Speed",
        description: "Assisting doctors by correlating symptoms with vast research data instantly."
    }
];

export function Industries() {
    return (
        <section id="use-cases" className="section section-darker">
            <div className="container">
                <AnimatedSection>
                    <div className="section-header">
                        <span className="text-caption section-label">Application</span>
                        <h2 className="headline-section">
                            Intelligence in<br />motion
                        </h2>
                    </div>
                </AnimatedSection>

                <AnimatedSection stagger>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {industries.map((ind, index) => (
                            <AnimatedChild key={index}>
                                <div className="industry-card p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 group relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative z-10">
                                        <div className="text-[var(--accent)] text-lg font-medium mb-1 tracking-wider uppercase opacity-80 group-hover:opacity-100 transition-opacity">
                                            {ind.title}
                                        </div>
                                        <div className="text-4xl md:text-5xl font-light text-white mb-2 py-4">
                                            {ind.stat}
                                        </div>
                                        <div className="text-sm text-white/60 mb-6 uppercase tracking-widest text-[10px]">
                                            {ind.label}
                                        </div>
                                        <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                                            {ind.description}
                                        </p>
                                    </div>
                                </div>
                            </AnimatedChild>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
