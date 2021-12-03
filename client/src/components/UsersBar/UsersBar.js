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
        await postAdminUser(data);
    };
    const handleDeleteUser = async (body) => {
        await deleteUser(body, isUser.accessToken);
    };

    return (
        <AnimatePresence>
            <UsersDiv>
                <Title>Users</Title>
                <ButtonsDiv>
                    <NewAdminUser
                        whileHover={{
                            opacity: 0.5,
                        }}
                        onClick={toggleShowNewUserModal}
                    >
                        Create admin user
                    </NewAdminUser>
                    <DeleteUser
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
                isVisible={showNewUserModal}
                toggleModal={toggleShowNewUserModal}
                title="New admin user"
                getFormData={handleNewUser}
                submitButtonText="Create"
                body={signUpBody}
            />

            <FormModal
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
