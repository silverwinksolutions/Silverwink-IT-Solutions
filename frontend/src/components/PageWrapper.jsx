import { motion } from "framer-motion";

const transition = {
    duration: 0.3, // faster animation
    ease: [0.25, 1, 0.5, 1],
};

const variants = {
    initial: {
        opacity: 0,
        filter: "blur(50px)",
    },
    in: {
        opacity: 1,
        filter: "blur(0px)",
        transition: {
            ...transition,
            delay: 0.05, // faster entry
        },
    },
    out: {
        opacity: 0,
        filter: "blur(10px)",
        transition: {
            ...transition,
            duration: 0.1, // quick exit
        },
    },
};

export default function PageWrapper({ children }) {
    return (
        <motion.div
            className="min-h-screen bg-white"
            initial="initial"
            animate="in"
            exit="out"
            variants={variants}
            style={{
                willChange: "opacity, filter",
                transform: "translateZ(0)",
                overflow: "hidden",
                backfaceVisibility: "hidden",
                background: "rgba(255, 255, 255, 0.72)",
                backdropFilter: "blur(12px)",
            }}
        >
            {children}
        </motion.div>
    );
}
