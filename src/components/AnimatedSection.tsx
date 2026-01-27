"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    stagger?: boolean;
}

const fadeUpVariants: Variants = {
    hidden: { 
        opacity: 0, 
        y: 24 
    },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
        }
    }
};

const staggerContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        }
    }
};

const staggerChildVariants: Variants = {
    hidden: { 
        opacity: 0, 
        y: 20 
    },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
        }
    }
};

export function AnimatedSection({
    children,
    className = "",
    delay = 0,
    stagger = false
}: AnimatedSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        amount: 0.15,
        margin: "-50px"
    });

    if (stagger) {
        return (
            <motion.div
                ref={ref}
                variants={staggerContainerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className={className}
            >
                {children}
            </motion.div>
        );
    }

    return (
        <motion.div
            ref={ref}
            variants={fadeUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function AnimatedChild({
    children,
    className = ""
}: {
    children: ReactNode;
    className?: string
}) {
    return (
        <motion.div variants={staggerChildVariants} className={className}>
            {children}
        </motion.div>
    );
}

export { fadeUpVariants, staggerContainerVariants, staggerChildVariants };
