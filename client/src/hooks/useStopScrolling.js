import { useEffect } from "react";

const useStopScrolling = (show) => {
    useEffect(() => {
        if (show) {
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [show]);
};

export default useStopScrolling;
