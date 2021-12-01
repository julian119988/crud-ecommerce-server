import { Main, Form, Title, Input, SubmitButton } from "./Styles";
import { AnimatePresence } from "framer-motion";
import { mainVariants, formVariants } from "./framerVariants";
import { useRef } from "react";
import useStopScrolling from "../../../hooks/useStopScrolling";

const FormModal = ({
    isVisible,
    toggleModal,
    body,
    getFormData,
    title,
    submitButtonText,
    options,
}) => {
    useStopScrolling(isVisible);
    const mainRef = useRef();
    const checkClick = (event) => {
        if (event.target === mainRef.current) toggleModal();
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        await getFormData(retreiveData(event.target.childNodes));
        toggleModal();
    };

    const retreiveData = (childrenList) => {
        var obj = {};
        childrenList.forEach(
            ({ tagName, type, value, name, selectedOptions }) => {
                if (tagName === "INPUT") {
                    if (type !== "submit") {
                        var key = name;
                        obj[key] = value;
                    }
                } else if (tagName === "SELECT") {
                    if (selectedOptions) {
                        const brand_id = parseInt(selectedOptions[0].id);
                        let key = "brand_id";
                        obj[key] = brand_id;
                    }
                }
            }
        );
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

                        {options && (
                            <select>
                                {options.map((item, index) => (
                                    <option key={index + 456765} id={item.id}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        )}

                        <SubmitButton
                            type="submit"
                            value={submitButtonText}
                            whileHover={{ opacity: 0.8 }}
                        />
                    </Form>
                </Main>
            )}
        </AnimatePresence>
    );
};
export default FormModal;
