import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
    border-radius: 10px;
    box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.3);
    background-color: rgb(255, 255, 255);
    margin-left: auto;
    margin-right: auto;
    display: flex;
    cursor: pointer;
`;

export const ImageThumbnail = styled(motion.img)`
    object-fit: contain;
`;

export const MediaDiv = styled(motion.div)`
    display: flex;
    flex-direction: row;
    height: 100%;
`;

export const TextAndPriceDiv = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const BrandLogo = styled(motion.img)`
    margin-top: 20px;
    margin-right: 5px;
    margin-bottom: 20px;
    width: 50px;
    object-fit: contain;
`;

export const Title = styled(motion.h3)`
    font-size: 1.3rem;
    text-align: center;
    font-family: "Rubik", sans-serif;
    margin: 0;
    margin-bottom: auto;
    @media (min-width: 480px) {
        font-size: 1.8rem;
    }
`;

export const Price = styled(motion.h2)`
    text-align: center;
    font-size: 1.8rem;
    margin: 0;
    margin-top: auto;
    @media (min-width: 480px) {
        font-size: 2.5rem;
    }
`;
