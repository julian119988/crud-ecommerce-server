export const mainVariants = {
    initial: {
        opacity: 0,
        size: 0,
    },
    animate: {
        opacity: 1,
        size: 1,
        transition: {
            staggerChildren: 2,
            delayChildren: 1,
        },
    },
    exit: {
        opacity: 0,
        size: 0,
    },
};

export const formVariants = {
    initial: {
        y: "-100vh",
    },
    animate: {
        y: "0vh",
    },
    exit: {
        y: "60vh",
    },
};
