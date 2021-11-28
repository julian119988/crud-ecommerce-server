import { useContext, useState } from "react";
import { LogInButton, LogOffButton, Nav, Title, SignUpButton } from "./Styles";
import FormModal from "../Modals/FormModal/FormModal";
import axios from "axios";
import { UserContext } from "../../App";

const Navbar = ({ logOff, logIn }) => {
    const user = useContext(UserContext);
    const [openLogInModal, setOpenLogInModal] = useState(false);
    const toggleLogInModal = () => {
        setOpenLogInModal(!openLogInModal);
    };
    const handleLogIn = async (formData) => {
        try {
            const {
                data: { accessToken, email, admin },
            } = await axios.post(
                "http://localhost:8080/auth/loginUser",
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
    return (
        <Nav>
            <Title>Ecommerce App</Title>
            {user ? (
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
