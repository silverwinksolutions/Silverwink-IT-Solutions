import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const ScrollReveal = ({ children, delay = 0, className = "", direction = "up" }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [inView]);

    // Direction-wise animation
    const variants = {
        hidden: {
            opacity: 0,
            x: direction === "left" ? 120 : direction === "right" ? -120 : 0,
            y: direction === "up" ? 120 : direction === "down" ? -120 : 0,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut", delay },
        },
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={controls}
            variants={variants}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
