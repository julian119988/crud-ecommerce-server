import styled from "styled-components";
import { motion } from "framer-motion";
const CrossIcon = ({ color, isLandscape, toggleModal }) => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="96"
            height="96"
            viewBox="0 0 96 96"
            fill={color}
            initial={
                isLandscape
                    ? { opacity: 0, x: 1000, y: 0 }
                    : { opacity: 0, x: 0, y: 1000 }
            }
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={
                isLandscape
                    ? { opacity: 0, x: 1000, y: 0 }
                    : { opacity: 0, x: 0, y: 1000 }
            }
            transition={{ type: "tween" }}
            onClick={toggleModal}
            whileHover={{ opacity: 0.5 }}
        >
            <switch>
                <g>
                    <path d="M53.657 48l25.171-25.172a4 4 0 1 0-5.656-5.656L48 42.343 22.829 17.172a4 4 0 0 0-5.657 5.656L42.344 48 17.172 73.172a4 4 0 1 0 5.657 5.656L48 53.657l25.172 25.171C73.953 79.609 74.977 80 76 80s2.048-.391 2.828-1.172a4 4 0 0 0 0-5.656L53.657 48z" />
                </g>
            </switch>
        </Svg>
    );
};
export default CrossIcon;

const Svg = styled(motion.svg)`
    position: absolute;
    top: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    @media (min-width: 1000px) {
        top: 100px;
        right: 100px;
    }
`;
