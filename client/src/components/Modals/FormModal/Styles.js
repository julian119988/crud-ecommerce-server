import styled from "styled-components";
import { motion } from "framer-motion";

export const Main = styled(motion.div)`
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    top: 0;
    z-index: 100;
`;

export const Form = styled(motion.form)`
    display: flex;
    flex-direction: column;
    width: 60vw;
    height: auto;
    background-color: white;
    border-radius: 10px;
    padding: 5%;
    max-width: 600px;
`;

export const Title = styled(motion.h2)`
    font-size: 2.5rem;
    margin: 0;
    margin-bottom: 1vh;
    font-family: "Rubik", sans-serif;
`;

export const Input = styled(motion.input)`
    margin-top: 1vh;
    margin-bottom: 1vh;
    font-size: 1.5rem;
    font-family: "Rubik", sans-serif;
`;

export const SubmitButton = styled(motion.input)`
    margin-top: 1.5vh;
    font-size: 1.7rem;
    font-family: "Rubik", sans-serif;
    width: 200px;
    height: 35px;
    margin-left: auto;
    margin-right: auto;
    border: none;
    outline: none;
    background-color: #333;
    color: #d5d5d5;
    border-radius: 10px;
    cursor: pointer;
`;

export const Label = styled(motion.label)`
    font-size: 1.5rem;
    margin-top: 5px;
`;
