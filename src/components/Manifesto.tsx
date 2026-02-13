"use client";

import { AnimatedSection, AnimatedChild } from "./AnimatedSection";

export function Manifesto() {
    return (
        <section className="section">
            <div className="container container-narrow">
                <AnimatedSection>
                    <div className="prose-premium">
                        <h3 className="text-2xl text-white mb-8 border-l-2 border-[var(--accent)] pl-6">
                            We are approaching a threshold where intelligence is no longer
                            constrained by the biological limits of its creators.
                        </h3>

                        <p className="text-body mb-6">
                            For decades, artificial intelligence has been a collection of parlor tricks—impressive
                            at a glance, but hollow at the core. We built calculators that could beat grandmasters,
                            chatbots that could mimic conversation, and generators that could hallucinate art.
                            But we never built a mind.
                        </p>

                        <p className="text-body mb-6">
                            Singular is not an iteration. It is a departure. We rejected the brute-force
                            scaling of static parameters in favor of dynamic, self-organizing systems.
                            We looked at the human cortex not as a blueprint to copy pixel-for-pixel,
                            but as a proof of existence for efficient, general-purpose reasoning.
                        </p>

                        <p className="text-body mb-6">
                            Our architecture privileges <span className="text-white">understanding</span> over prediction.
                            Current LLMs predict the next token based on statistical likelihood. Singular
                            constructs a world model, evaluates causality, and formulates a plan.
                            It doesn't just guess what comes next; it understands <em>why</em> it comes next.
                        </p>

                        <div className="my-12 p-8 bg-white/5 rounded-2xl border border-white/10">
                            <h4 className="text-lg text-white mb-4">The Intelligent Imperative</h4>
                            <p className="text-sm text-[var(--text-muted)] italic">
                                "To build a system that acts without understanding is to build a dangerous tool.
                                To build a system that understands but cannot act is to build a tragedy.
                                We build for the unity of these two states."
                            </p>
                        </div>

                        <p className="text-body">
                            We are building Singular for the critical infrastructure of civilization.
                            For the energy grids that must balance renewables in real-time.
                            For the healthcare systems that must diagnose with certainty.
                            For the financial markets that require stability, not speculation.
                        </p>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
