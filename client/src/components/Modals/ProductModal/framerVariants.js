export const imageContainerVariants = {
    transition: {
        type: "tween",
        staggerChildren: 0.5,
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
        staggerChildren: 0.5,
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
