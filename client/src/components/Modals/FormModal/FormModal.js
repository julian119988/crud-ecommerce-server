import { Main, Form, Title, Input, SubmitButton } from "./Styles";
import { AnimatePresence } from "framer-motion";
import { mainVariants, formVariants } from "./framerVariants";
import { useRef } from "react";

const FormModal = ({
    isVisible,
    toggleModal,
    body,
    params,
    url,
    headers,
    getFormData,
    title,
    submitButtonText,
}) => {
    const mainRef = useRef();
    const checkClick = (event) => {
        if (event.target === mainRef.current) toggleModal();
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        getFormData(retreiveData(event.target.childNodes));
    };

    const retreiveData = (childrenList) => {
        var obj = {};
        childrenList.forEach(({ tagName, type, value, name }) => {
            if (tagName === "INPUT") {
                if (type !== "submit") {
                    var key = name;
                    obj[key] = value;
                }
            }
        });
        return obj;
    };
    return (
        <AnimatePresence>
            {isVisible && (
                <Main
                    ref={mainRef}
                    onClick={checkClick}
                    variants={mainVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <Form
                        variants={formVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        onSubmit={handleSubmit}
                    >
                        <Title>{title}</Title>
                        {body.map(
                            ({ type, name, placeholder, required }, index) => (
                                <Input
                                    type={type}
                                    name={name}
                                    placeholder={placeholder}
                                    required={required}
                                    key={index}
                                />
                            )
                        )}
                        <SubmitButton type="submit" value={submitButtonText} />
                    </Form>
                </Main>
            )}
        </AnimatePresence>
    );
};
export default FormModal;
