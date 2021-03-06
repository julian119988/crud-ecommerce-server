import styled from "styled-components";
import { motion } from "framer-motion";
import bgImage from "../../assets/bg.png";

export const MainDiv = styled(motion.main)`
    background-image: url(${bgImage});
    background-color: rgb(247, 247, 247);
    background-position-x: 0%;
    background-position-y: 0%;
    background-repeat: repeat;
    background-attachment: scroll;
    background-size: auto;
    background-origin: padding-box;
    background-clip: border-box;
    min-height: 76vh;
`;

export const ProductSection = styled(motion.div)`
    display: flex;
    flex-direction: column;

    width: 100%;
`;
export const Title = styled(motion.h3)`
    font-size: 2.5rem;
    color: #333;
    margin: 0;
    margin-right: auto;
`;
export const TitleAndLayoutSelector = styled(motion.div)`
    display: flex;
    flex-direction: row;
    margin-top: 5vh;
    background-color: #d5d5d5;
    padding-left: 5vw;
    padding-right: 5vw;
    padding-top: 2vh;
    padding-bottom: 2vh;
    border-radius: 0px;
    box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.3);
    margin-bottom: 3vh;
    max-width: 700px;
    @media (min-width: 700px) {
        width: 700px;
        border-radius: 5px;
        margin-right: auto;
        margin-left: auto;
    }
`;

export const SwitchInputDiv = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const SwitchInput = styled(motion.input)`
    position: absolute !important;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    width: 1px;
    border: 0;
    overflow: hidden;
    margin: 10px;
`;

export const SwitchLabel = styled(motion.label)`
    padding: 10px;
    border-radius: 5px 0 0 5px;
    ${(props) => props.right && "border-radius: 0 5px 5px 0;"}
    font-size: 1.5rem;
`;

export const NewProductButton = styled(motion.button)`
    background: #d5d5d5;
    border: 2px solid #333;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 26px -10px rgba(0, 0, 0, 0.88);
    border-radius: 10px;
    font-size: 1.5rem;
    padding: 8px 10px;
    margin-right: 10px;
    cursor: pointer;
`;
