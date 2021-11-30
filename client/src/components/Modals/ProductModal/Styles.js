import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    @media (orientation: landscape) {
        flex-direction: row;
    }
`;

export const ImageContainer = styled(motion.img)`
    height: 50vh;
    width: 100vw;
    background-color: #ffffff;
    padding: 10vh 15vw 10vh 15vw;
    object-fit: contain;
    @media (orientation: landscape) {
        height: 100%;
        width: 50%;
        padding: 20vh 15vw 20vh 15vw;
    }
`;
export const InfoContainer = styled(motion.div)`
    background-color: #333;
    height: 50vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10vw;
    @media (orientation: landscape) {
        height: 100%;
        width: 50%;
    }
`;

export const Title = styled(motion.h1)`
    color: #ececec;
    font-size: 3em;
    margin-top: 0;
`;

export const Description = styled(motion.p)`
    color: #ececec;
    font-size: 1.5em;
`;

export const Price = styled(motion.h2)`
    color: #ececec;
    font-size: 2.5em;
    margin-left: auto;
`;

export const AddOne = styled(motion.button)`
    color: #ececec;
    border-radius: 50%;
    font-size: 3rem;
    background-color: #333;
    border: 1px solid #ececec;
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const RemoveOne = styled(motion.button)`
    padding-bottom: 7px;
    color: #ececec;
    border-radius: 50%;
    font-size: 3rem;
    background-color: #333;
    border: 1px solid #ececec;
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    ${(props) =>
        props.quantity === 1 &&
        `cursor: not-allowed;
        border: 1px solid #716e6e;
        color: #716e6e;
    `}
`;
export const Quantity = styled(motion.h4)`
    margin: 0;
    margin-left: 15px;
    margin-right: 15px;
    color: #ececec;
    font-size: 2.2rem;
`;

export const PriceAndQuantityDiv = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const AddToCartAndLogoDiv = styled(motion.div)`
    display: flex;
    flex-direction: row;
`;
