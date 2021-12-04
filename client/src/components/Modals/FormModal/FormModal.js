import { Main, Form, Title, Input, SubmitButton, Label } from "./Styles";
import { AnimatePresence } from "framer-motion";
import { mainVariants, formVariants } from "./framerVariants";
import { useRef, useState } from "react";
import useStopScrolling from "../../../hooks/useStopScrolling";
import Loader from "react-loader-spinner";
import { errorHandler } from "../../../helper/api.messagesHandler";

const FormModal = ({
    isVisible,
    toggleModal,
    body,
    getFormData,
    title,
    submitButtonText,
    options,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const mainRef = useRef();
    useStopScrolling(isVisible);

    const checkClick = (event) => {
        if (event.target === mainRef.current) toggleModal();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setIsLoading(true);
            const wasSuccessfull = await getFormData(
                retreiveData(event.target.childNodes)
            );
            setIsLoading(false);
            if (wasSuccessfull) toggleModal();
        } catch ({ message }) {
            errorHandler("error", "Error", message);
            setIsLoading(false);
            return false;
        }
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
                    if (selectedOptions[0] !== undefined) {
                        const brand_id = parseInt(selectedOptions[0].id);
                        let key = "brand_id";
                        obj[key] = brand_id;
                    } else {
                        throw new Error("No option selected/avialable");
                    }
                }
            }
        );
        return obj;
    };
    const capitalize = (string) => {
        if (typeof string !== "string") return "";
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <Main
                    key={9867890}
                    ref={mainRef}
                    onClick={checkClick}
                    variants={mainVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <Form
                        key={9867891}
                        variants={formVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        onSubmit={handleSubmit}
                    >
                        <Title key={9867892}>{title}</Title>
                        {isLoading ? (
                            <Loader
                                type="ThreeDots"
                                color="#333"
                                height={160}
                                width={160}
                            />
                        ) : (
                            <>
                                {body &&
                                    body.map(
                                        (
                                            {
                                                type,
                                                name,
                                                placeholder,
                                                required,
                                                defaultValue,
                                            },
                                            index
                                        ) => (
                                            <>
                                                <Label key={9867893}>
                                                    {capitalize(name)}
                                                </Label>
                                                <Input
                                                    type={type}
                                                    name={name}
                                                    placeholder={placeholder}
                                                    required={required}
                                                    key={index + 986789412}
                                                    defaultValue={
                                                        defaultValue
                                                            ? defaultValue
                                                            : ""
                                                    }
                                                />
                                            </>
                                        )
                                    )}

                                {options && (
                                    <select
                                        key={98678958}
                                        style={{
                                            fontSize: "1.5rem",
                                            marginTop: "10px",
                                            marginBottom: "10px",
                                            fontFamily: "'Rubik',sans-serif",
                                        }}
                                    >
                                        {options.map((item, index) => (
                                            <option
                                                key={index + 456765}
                                                id={item.id}
                                                style={{ fontSize: "1.3rem" }}
                                            >
                                                {item.name || item.email}
                                            </option>
                                        ))}
                                    </select>
                                )}
                                <SubmitButton
                                    key={98678982}
                                    type="submit"
                                    value={submitButtonText}
                                    whileHover={{ opacity: 0.8 }}
                                />
                            </>
                        )}
                    </Form>
                </Main>
            )}
        </AnimatePresence>
    );
};
export default FormModal;
