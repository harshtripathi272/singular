"use client";

import { AnimatedSection, AnimatedChild } from "./AnimatedSection";

const capabilities = [
    {
        title: "Pattern Synthesis",
        description: "Ingesting vast unstructured datasets to identify latent correlations that evade human detection."
    },
    {
        title: "Predictive Dynamics",
        description: "Modeling future states of complex systems with probabilistic accuracy, allowing for proactive intervention."
    },
    {
        title: "Semantic Reasoning",
        description: "Going beyond keywords to understand intent, context, and nuance in every interaction."
    },
    {
        title: "Real-time Adaptation",
        description: "Learning from every input cycle. The system evolves its understanding with every millisecond of data."
    }
];

export function Capabilities() {
    return (
        <section id="capabilities" className="section">
            <div className="container">
                <AnimatedSection>
                    <div className="section-header">
                        <span className="text-caption section-label">Capabilities</span>
                        <h2 className="headline-section">
                            Beyond simple<br />computation
                        </h2>
                    </div>
                </AnimatedSection>
                
                <AnimatedSection stagger>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mt-16">
                        {capabilities.map((cap, index) => (
                            <AnimatedChild key={index}>
                                <div className="capability-item group">
                                    <h3 className="text-xl font-medium text-white mb-4 group-hover:text-[var(--accent)] transition-colors duration-300">
                                        {cap.title}
                                    </h3>
                                    <p className="text-body text-[var(--text-secondary)] leading-relaxed">
                                        {cap.description}
                                    </p>
                                    <div className="h-px w-full bg-white/5 mt-8 group-hover:bg-[var(--accent)]/30 transition-colors duration-500" />
                                </div>
                            </AnimatedChild>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
