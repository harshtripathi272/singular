"use client";

import { AnimatedSection, AnimatedChild } from "./AnimatedSection";

const layers = [
    {
        number: "01",
        title: "Perception",
        description: "Understanding context at scale. Extracting meaning from noise across modalities — text, structure, signal."
    },
    {
        number: "02",
        title: "Reasoning",
        description: "Drawing connections across domains. Logical inference that respects uncertainty and acknowledges limits."
    },
    {
        number: "03",
        title: "Memory",
        description: "Persistent, structured knowledge. Not just retrieval, but integration — building understanding over time."
    },
    {
        number: "04",
        title: "Decision",
        description: "Weighted, transparent choices. Every output traces back to evidence, every path is auditable."
    },
    {
        number: "05",
        title: "Action",
        description: "Precise, controlled execution. Intervention only when necessary, with clear boundaries and reversibility."
    }
];

export function SystemLayers() {
    return (
        <section id="architecture" className="section">
            <div className="container">
                <AnimatedSection>
                    <div className="section-header">
                        <span className="text-caption section-label">Architecture</span>
                        <h2 className="headline-section">
                            Five layers of<br />deliberate intelligence
                        </h2>
                    </div>
                </AnimatedSection>

                <AnimatedSection stagger>
                    <div className="layers-grid">
                        {layers.map((layer) => (
                            <AnimatedChild key={layer.number}>
                                <div className="layer-item">
                                    <span className="layer-number">{layer.number}</span>
                                    <div className="layer-content">
                                        <h3 className="headline-subsection">{layer.title}</h3>
                                        <p>{layer.description}</p>
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
