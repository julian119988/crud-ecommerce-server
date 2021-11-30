import { useEffect, useState } from "react";

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => {
            setMatches(media.matches);
        };
        media.addListener(listener);
        return () => media.removeListener(listener);
    }, [matches, query]);

    return matches;
};
export const useIsSmall = () => useMediaQuery("(min-width: 480px)");

export const useIsLandscape = () => useMediaQuery("(orientation: landscape)");
