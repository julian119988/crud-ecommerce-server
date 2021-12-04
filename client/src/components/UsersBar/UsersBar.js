import { AnimatePresence } from "framer-motion";
import {
    ButtonsDiv,
    DeleteUser,
    NewAdminUser,
    Title,
    UsersDiv,
} from "./Styles";
import { UserContext } from "../../App";
import FormModal from "../Modals/FormModal/FormModal";
import { useContext, useEffect, useState } from "react";
import { deleteUser, getAllUsers, postAdminUser } from "../../helper/api";

const UsersBar = () => {
    const [showNewUserModal, setShowNewUserModal] = useState(false);
    const [showDeleteUserModal, setShowDeleteUserModal] = useState(false);
    const [isUser, setIsUser] = useState(null);
    const [allUsers, setAllUsers] = useState([]);
    const user = useContext(UserContext);
    useEffect(() => {
        setIsUser(user);
    }, [user]);

    const toggleShowNewUserModal = () => {
        setShowNewUserModal(!showNewUserModal);
    };
    const toggleShowDeleteUserModal = async () => {
        setShowDeleteUserModal(!showDeleteUserModal);
        const users = await getAllUsers(isUser.accessToken);
        setAllUsers(users);
    };
    const handleNewUser = async (data) => {
        const wasSuccessfull = await postAdminUser(data, user.accessToken);
        if (wasSuccessfull) return true;
        return false;
    };
    const handleDeleteUser = async (body) => {
        const wasSuccessfull = await deleteUser(
            body,
            isUser.accessToken,
            isUser.email
        );
        if (wasSuccessfull) return true;
        return false;
    };

    return (
        <AnimatePresence>
            <UsersDiv key={44390}>
                <Title key={44391}>Users</Title>
                <ButtonsDiv key={44392}>
                    <NewAdminUser
                        key={44393}
                        whileHover={{
                            opacity: 0.5,
                        }}
                        onClick={toggleShowNewUserModal}
                    >
                        Create admin user
                    </NewAdminUser>
                    <DeleteUser
                        key={44394}
                        whileHover={{
                            opacity: 0.5,
                        }}
                        onClick={toggleShowDeleteUserModal}
                    >
                        Delete an user
                    </DeleteUser>
                </ButtonsDiv>
            </UsersDiv>
            <FormModal
                key={44395}
                isVisible={showNewUserModal}
                toggleModal={toggleShowNewUserModal}
                title="New admin user"
                getFormData={handleNewUser}
                submitButtonText="Create"
                body={signUpBody}
            />
            <FormModal
                key={44396}
                isVisible={showDeleteUserModal}
                toggleModal={toggleShowDeleteUserModal}
                title="Delete an User"
                getFormData={handleDeleteUser}
                submitButtonText="Delete"
                options={allUsers}
            />
        </AnimatePresence>
    );
};
export default UsersBar;

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
