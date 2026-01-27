"use client";

import { AnimatedSection } from "./AnimatedSection";

export function Philosophy() {
    return (
        <section id="philosophy" className="section section-philosophy">
            <div className="container container-narrow">
                <AnimatedSection>
                    <div className="section-header">
                        <span className="text-caption section-label">Philosophy</span>
                        <h2 className="headline-section">
                            Thinking at the<br />level of systems
                        </h2>
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={0.1}>
                    <div className="section-text text-body">
                        <p>
                            Most intelligence is narrow. It solves one problem, in one domain,
                            under fixed conditions. Singular is different. It operates at the
                            level of systems — understanding not just patterns, but the
                            relationships between patterns.
                        </p>
                        <p>
                            This isn&apos;t artificial intelligence designed to mimic. It&apos;s
                            architecture designed to reason. Every decision flows through
                            structured layers of perception, memory, and deliberation —
                            creating outputs that are not just accurate, but explainable.
                        </p>
                        <p>
                            The goal was never to build something that feels intelligent.
                            It was to build something that actually thinks.
                        </p>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
