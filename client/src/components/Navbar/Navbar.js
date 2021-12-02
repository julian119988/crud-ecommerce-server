import { useContext, useEffect, useState } from "react";
import { LogInButton, LogOffButton, Nav, Title, SignUpButton } from "./Styles";
import FormModal from "../Modals/FormModal/FormModal";
import axios from "axios";
import { UserContext } from "../../App";
import { defineUriByEnviroment } from "../../config";

const Navbar = ({ logOff, logIn }) => {
    const [openLogInModal, setOpenLogInModal] = useState(false);
    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const [isUser, setIsUser] = useState(null);
    const user = useContext(UserContext);
    useEffect(() => {
        setIsUser(user);
    }, [user]);
    const toggleLogInModal = () => {
        setOpenLogInModal(!openLogInModal);
    };
    const handleLogIn = async (formData) => {
        try {
            const {
                data: { accessToken, email, admin },
            } = await axios.post(
                `${defineUriByEnviroment()}/auth/loginUser`,
                formData
            );
            localStorage.setItem("ecommerceToken", accessToken);
            localStorage.setItem(
                "userDataEcommerce",
                JSON.stringify({ email, admin, accessToken })
            );
            logIn({ email, admin, accessToken });
            toggleLogInModal();
        } catch (error) {
            console.log(error);
        }
    };

    const handleLogOff = async () => {
        logOff();
    };
    const toggleSignUpModal = () => {
        setShowSignUpModal(!showSignUpModal);
    };
    const handleSignUp = async (body) => {
        const {
            data: { accessToken, email, admin },
        } = await signUp(body);
        localStorage.setItem("ecommerceToken", accessToken);
        localStorage.setItem(
            "userDataEcommerce",
            JSON.stringify({ email, admin, accessToken })
        );
        logIn({ accessToken, email, admin });
    };

    const signUp = async (body) => {
        try {
            const response = await axios.post(
                `${defineUriByEnviroment()}/auth/signUp`,
                body
            );
            return response;
        } catch (err) {
            console.log(err);
            return null;
        }
    };
    return (
        <Nav>
            <Title>Ecommerce App</Title>
            {isUser ? (
                <>
                    <LogOffButton
                        exit={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        whileHover={{
                            scale: 1.1,
                            boxShadow:
                                "0px 0px 14px 0px rgba(255,255,255,0.85)",
                        }}
                        onClick={handleLogOff}
                    >
                        Log off
                    </LogOffButton>
                </>
            ) : (
                <>
                    <LogInButton
                        whileHover={{
                            scale: 1.1,
                            boxShadow:
                                "0px 0px 14px 0px rgba(255,255,255,0.85)",
                        }}
                        onClick={toggleLogInModal}
                        exit={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                    >
                        Log In
                    </LogInButton>
                    <SignUpButton
                        whileHover={{
                            scale: 1.1,
                            boxShadow:
                                "0px 0px 14px 0px rgba(255,255,255,0.85)",
                        }}
                        exit={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        onClick={toggleSignUpModal}
                    >
                        Sign Up
                    </SignUpButton>
                </>
            )}
            <FormModal
                isVisible={openLogInModal}
                toggleModal={toggleLogInModal}
                title="Log in"
                body={logInBody}
                submitButtonText={"Log in"}
                getFormData={handleLogIn}
            />
            <FormModal
                isVisible={showSignUpModal}
                toggleModal={toggleSignUpModal}
                title="Sign up"
                body={signUpBody}
                submitButtonText={"Sign up"}
                getFormData={handleSignUp}
            />
        </Nav>
    );
};
export default Navbar;
const logInBody = [
    {
        type: "email",
        name: "email",
        placeholder: "email@email.com",
        required: true,
    },
    {
        type: "password",
        name: "password",
        placeholder: "**********",
        required: true,
    },
];
const signUpBody = [
    {
        type: "email",
        name: "email",
        placeholder: "email@email.com",
        required: true,
    },
    {
        type: "password",
        name: "password1",
        placeholder: "********",
        required: true,
    },
    {
        type: "password",
        name: "password2",
        placeholder: "********",
        required: true,
    },
];
