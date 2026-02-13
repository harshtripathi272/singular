"use client";

import { AnimatedSection, AnimatedChild } from "./AnimatedSection";

export function Education() {
    return (
        <section className="section bg-white/[0.02]">
            <div className="container">
                <AnimatedSection>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="section-header">
                                <span className="text-caption section-label">Research</span>
                                <h2 className="headline-section mb-6">
                                    Advancing the<br />frontier
                                </h2>
                                <p className="text-body max-w-md">
                                    We don't just build products; we contribute to the fundamental science of intelligence.
                                    Our labs publish regularly on interpretability, alignment, and sparsity.
                                </p>
                            </div>

                            <div className="mt-8 flex gap-4">
                                <button className="btn btn-secondary group">
                                    Read Papers
                                    <svg className="w-4 h-4 btn-arrow group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {[
                                { title: "Sparse Auto-Encoders for Logic", date: "Oct 2025" },
                                { title: "Causal Inference in Large Language Models", date: "Aug 2025" },
                                { title: "The Alignment Gap: A Survey", date: "May 2025" }
                            ].map((paper, i) => (
                                <div key={i} className="group flex items-center justify-between p-6 border border-white/10 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                                    <div>
                                        <h4 className="text-lg text-white group-hover:text-[var(--accent)] transition-colors">{paper.title}</h4>
                                        <span className="text-xs text-[var(--text-muted)] mt-1 block">Internal Research Lab • {paper.date}</span>
                                    </div>
                                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] transition-all">
                                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
