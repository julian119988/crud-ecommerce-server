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
    position: relative;
    z-index: 1;
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

export const AdminButtonsDiv = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: absolute;
`;
export const EditButton = styled(motion.button)`
    width: 40px;
    height: 30px;
    background: #2f2fff;
    opacity: 0.6;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 1.3rem;
    @media (min-width: 480px) {
        height: 35px;
        width: 50px;
        font-size: 1.5rem;
    }
`;
export const DeleteButton = styled(motion.button)`
    height: 30px;
    width: 40px;
    background: #ff2323;
    opacity: 0.8;
    border-radius: 10px;
    cursor: pointer;
    border: none;
    color: white;
    font-size: 1.3rem;
    @media (min-width: 480px) {
        height: 35px;
        width: 50px;
        font-size: 1.5rem;
    }
`;
