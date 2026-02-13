"use client";

import { AnimatedSection, AnimatedChild } from "./AnimatedSection";

const specs = [
    {
        label: "Context Window",
        value: "Infinite",
        detail: "Dynamic retrieval ensures no loss of memory over time."
    },
    {
        label: "Inference Latency",
        value: "<12ms",
        detail: "Real-time reasoning at the edge or in the cloud."
    },
    {
        label: "Parameter Efficiency",
        value: "94%",
        detail: "Sparse activation means only relevant neurons fire."
    },
    {
        label: "Modality",
        value: "Omni",
        detail: "Native understanding of text, audio, video, and code."
    }
];

export function TechnicalSpecs() {
    return (
        <section className="section bg-black/20">
            <div className="container">
                <AnimatedSection>
                    <div className="section-header mb-16">
                        <span className="text-caption section-label">Specifications</span>
                        <h2 className="headline-section">
                            Engineered for<br />performance
                        </h2>
                    </div>
                </AnimatedSection>

                <AnimatedSection stagger>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {specs.map((spec, index) => (
                            <AnimatedChild key={index}>
                                <div className="p-6 border-t border-white/20 hover:border-[var(--accent)] transition-colors duration-300">
                                    <div className="text-[var(--text-muted)] text-xs uppercase tracking-widest mb-2">
                                        {spec.label}
                                    </div>
                                    <div className="text-3xl text-white font-light mb-3">
                                        {spec.value}
                                    </div>
                                    <div className="text-sm text-[var(--text-secondary)] leading-relaxed">
                                        {spec.detail}
                                    </div>
                                </div>
                            </AnimatedChild>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                    <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h3 className="text-xl text-white mb-6">Neural-Symbolic Integration</h3>
                            <p className="text-body mb-4">
                                Pure neural networks are black boxes. Pure symbolic systems are brittle.
                                Singular merges them. The neural layer handles intuition and pattern recognition,
                                while the symbolic layer handles logic, math, and rule adherence.
                            </p>
                            <p className="text-body">
                                This hybrid approach allows Singular to "show its work." When it makes a decision,
                                it can trace the logical steps it took to get there, providing an audit trail
                                that pure deep learning models simply cannot generate.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl text-white mb-6">Recursive Self-Improvement</h3>
                            <p className="text-body mb-4">
                                Most models are static after training. Singular employs a continuous learning loop.
                                It validates its own predictions against outcomes and adjusts its internal
                                weights in real-time, without full retraining runs.
                            </p>
                            <ul className="space-y-4 mt-6">
                                <li className="flex items-start gap-4">
                                    <span className="text-[var(--accent)] mt-1">01</span>
                                    <span className="text-[var(--text-secondary)]">Active learning from user corrections</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-[var(--accent)] mt-1">02</span>
                                    <span className="text-[var(--text-secondary)]">Autonomous data curation</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-[var(--accent)] mt-1">03</span>
                                    <span className="text-[var(--text-secondary)]">Optimized energy consumption pathing</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
