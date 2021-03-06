import styled from "styled-components";
import { motion } from "framer-motion";

export const BrandDiv = styled(motion.div)`
    display: flex;
    flex-direction: column;
    background-color: #d5d5d5;
    padding-left: 5vw;
    padding-right: 5vw;
    padding-top: 2vh;
    padding-bottom: 2vh;
    border-radius: 0px;
    box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.3);
    margin-bottom: 3vh;
    max-width: 700px;
    align-items: center;
    @media (min-width: 500px) {
        flex-direction: row;
    }
    @media (min-width: 700px) {
        width: 700px;
        border-radius: 5px;
        margin-right: auto;
        margin-left: auto;
    }
`;
export const Title = styled(motion.h3)`
    font-size: 2.5rem;
    color: #333;
    margin: 0;
    margin-right: auto;
`;

export const NewBrand = styled(motion.button)`
    background: #d5d5d5;
    border: 2px solid #333;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 26px -10px rgba(0, 0, 0, 0.88);
    border-radius: 10px;
    font-size: 1.5rem;
    padding: 8px 10px;
    margin-right: 10px;
    cursor: pointer;
    height: 50px;
`;

export const DeleteBrand = styled(motion.button)`
    background: #d5d5d5;
    border: 2px solid #333;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 26px -10px rgba(0, 0, 0, 0.88);
    border-radius: 10px;
    font-size: 1.5rem;
    padding: 8px 10px;
    margin-right: 10px;
    cursor: pointer;
    height: 50px;
    display: flex;
    align-items: center;
`;

export const ButtonsDiv = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min-content, 100px));
    justify-content: center;
    max-width: 310px;
    align-items: center;
    grid-gap: 5px;
    margin-top: 20px;
    @media (min-width: 500px) {
        margin-left: auto;
        margin-top: 0px;
    }
`;
export const EditBrand = styled(motion.button)`
    background: #d5d5d5;
    border: 2px solid #333;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 26px -10px rgba(0, 0, 0, 0.88);
    border-radius: 10px;
    font-size: 1.5rem;
    padding: 8px 10px;
    margin-right: 10px;
    cursor: pointer;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
