import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const ScrollCountUp = ({ end, duration, suffix = "" }) => {
    const [ref, inView] = useInView({ triggerOnce: true });
    const [start, setStart] = useState(false);

    useEffect(() => {
        if (inView) {
            setStart(true);
        }
    }, [inView]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {start && <CountUp end={end} duration={duration} suffix={suffix} />}
        </motion.div>
    );
};

export default ScrollCountUp;
