import { useContext, useEffect, useState } from "react";
import {
    LogInButton,
    LogOffButton,
    Nav,
    Title,
    SignUpButton,
    LoadPlaceholdersButton,
} from "./Styles";
import FormModal from "../Modals/FormModal/FormModal";
import { LoadProductContext, UserContext } from "../../App";
import { logIn, postLoadPlaceholders, signUp } from "../../helper/api";

const Navbar = ({ handleLogOff, handleLogIn }) => {
    const [openLogInModal, setOpenLogInModal] = useState(false);
    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const [isUser, setIsUser] = useState(null);
    const user = useContext(UserContext);
    const { refreshProducts } = useContext(LoadProductContext);
    useEffect(() => {
        setIsUser(user);
    }, [user]);
    const toggleLogInModal = () => {
        setOpenLogInModal(!openLogInModal);
    };
    const handleModalLogIn = async (formData) => {
        const data = await logIn(formData);
        if (data !== null) {
            const { accessToken, email, admin } = data;
            localStorage.setItem("ecommerceToken", accessToken);
            localStorage.setItem(
                "userDataEcommerce",
                JSON.stringify({ email, admin, accessToken })
            );
            handleLogIn({ email, admin, accessToken });
            return true;
        } else {
            return false;
        }
    };

    const handleClickLogOff = async () => {
        handleLogOff();
    };
    const toggleSignUpModal = () => {
        setShowSignUpModal(!showSignUpModal);
    };
    const handleSignUp = async (body) => {
        const response = await signUp(body);
        if (response !== null) {
            const { accessToken, email, admin } = response;
            localStorage.setItem("ecommerceToken", accessToken);
            localStorage.setItem(
                "userDataEcommerce",
                JSON.stringify({ email, admin, accessToken })
            );
            handleLogIn({ accessToken, email, admin });
            return true;
        } else {
            return false;
        }
    };
    const handleLoadPlaceholders = async () => {
        const wasSuccessfull = await postLoadPlaceholders(user.accessToken);
        if (wasSuccessfull) refreshProducts();
    };

    return (
        <Nav key={986789320}>
            <Title key={986789321}>Ecommerce App</Title>
            {isUser ? (
                <>
                    {isUser.admin === true && (
                        <LoadPlaceholdersButton
                            key={9867893242}
                            exit={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            whileHover={{
                                scale: 1.1,
                                boxShadow:
                                    "0px 0px 14px 0px rgba(255,255,255,0.85)",
                            }}
                            onClick={handleLoadPlaceholders}
                        >
                            Load random products
                        </LoadPlaceholdersButton>
                    )}
                    <LogOffButton
                        key={986789322}
                        exit={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        whileHover={{
                            scale: 1.1,
                            boxShadow:
                                "0px 0px 14px 0px rgba(255,255,255,0.85)",
                        }}
                        onClick={handleClickLogOff}
                    >
                        Log off
                    </LogOffButton>
                </>
            ) : (
                <>
                    <LogInButton
                        key={986789323}
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
                        key={986789324}
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
                key={9867899}
                isVisible={openLogInModal}
                toggleModal={toggleLogInModal}
                title="Log in"
                body={logInBody}
                submitButtonText={"Log in"}
                getFormData={handleModalLogIn}
            />
            <FormModal
                key={9867897}
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
