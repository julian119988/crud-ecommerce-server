import styled from "styled-components";
import { motion } from "framer-motion";

export const Nav = styled(motion.nav)`
    width: 100%;
    display: flex;
    flex-direction: row;
    height: 12vh;
    background-color: #333;
`;

export const Title = styled(motion.h2)`
    margin-left: 5%;
    font-size: 2.5rem;
    color: #ececec;
    margin-top: auto;
    margin-bottom: auto;
    @media (min-width: 600px) {
        margin-left: 10%;
    }
`;

export const LogInButton = styled(motion.button)`
    margin-left: auto;
    margin-right: 5%;
    font-size: 1.5rem;
    padding-bottom: 0.5vh;
    padding-top: 0.5vh;
    padding-left: 2vw;
    padding-right: 2vw;
    align-self: center;
    text-align: center;
    display: flex;
    background-color: transparent;
    border: 2px solid #ececec;
    border-radius: 10px;
    color: #ececec;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-top: auto;
    margin-bottom: auto;
`;

export const LogOffButton = styled(motion.button)`
    margin-right: 5%;
    font-size: 1.5rem;
    padding-bottom: 0.5vh;
    padding-top: 0.5vh;
    padding-left: 2vw;
    padding-right: 2vw;
    align-self: center;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 2px solid #ececec;
    border-radius: 10px;
    color: #ececec;
    cursor: pointer;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    @media (min-width: 600px) {
        margin-right: 10%;
    }
`;

export const SignUpButton = styled(motion.button)`
    margin-right: 5%;
    font-size: 1.5rem;
    padding-bottom: 0.5vh;
    padding-top: 0.5vh;
    padding-left: 2vw;
    padding-right: 2vw;
    align-self: center;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ececec;
    border: 2px solid #ececec;
    border-radius: 10px;
    color: #333;
    cursor: pointer;
    margin-top: auto;
    margin-bottom: auto;
    @media (min-width: 600px) {
        margin-right: 10%;
    }
`;
