export const imageContainerVariants = {
    transition: {
        type: "tween",
    },
    portraitStart: {
        y: "-100vh",
        x: "0vw",
    },
    landscapeStart: {
        y: "0vh",
        x: "-100vw",
    },
    portraitEnd: {
        y: "0vh",
        x: "0vw",
    },
    landscapeEnd: {
        y: "0vh",
        x: "0vw",
    },
};
export const infoContainerVariants = {
    transition: {
        type: "tween",
    },
    portraitStart: {
        y: "100vh",
        x: "0vw",
    },
    landscapeStart: {
        y: "0vh",
        x: "100vw",
    },
    portraitEnd: {
        y: "0vh",
        x: "0vw",
    },
    landscapeEnd: {
        y: "0vh",
        x: "0vw",
    },
};

export const brandImageVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.4,
        },
    },
    exit: {
        opacity: 0,
    },
};
