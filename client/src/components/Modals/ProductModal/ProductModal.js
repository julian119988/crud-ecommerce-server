import { AnimatePresence } from "framer-motion";
import { useIsLandscape } from "../../../hooks/useMediaQuery";
import {
    AddOne,
    Container,
    Description,
    ImageContainer,
    InfoContainer,
    Price,
    PriceAndQuantityDiv,
    Quantity,
    RemoveOne,
    Title,
} from "./Styles";
import {
    imageContainerVariants,
    infoContainerVariants,
} from "./framerVariants";
import { useState } from "react";

const ProductModal = ({ show, toggleModal, product, brand }) => {
    const [quantity, setQuantity] = useState(1);
    const isLandscape = useIsLandscape();

    const addOne = () => {
        setQuantity(quantity + 1);
    };
    const removeOne = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    return (
        <>
            <AnimatePresence>
                {!show ? (
                    <></>
                ) : (
                    <Container key={1098652}>
                        <ImageContainer
                            key={109865}
                            onClick={toggleModal}
                            variants={imageContainerVariants}
                            initial={
                                isLandscape ? "landscapeStart" : "portraitStart"
                            }
                            animate={
                                isLandscape ? "landscapeEnd" : "portraitEnd"
                            }
                            exit={
                                isLandscape ? "landscapeStart" : "portraitStart"
                            }
                            transition={"transition"}
                            src={product.image_url}
                            alt={product.name}
                        ></ImageContainer>
                        <InfoContainer
                            key={1098659}
                            variants={infoContainerVariants}
                            initial={
                                isLandscape ? "landscapeStart" : "portraitStart"
                            }
                            animate={
                                isLandscape ? "landscapeEnd" : "portraitEnd"
                            }
                            exit={
                                isLandscape ? "landscapeStart" : "portraitStart"
                            }
                            transition={"transition"}
                        >
                            <Title>{product.name}</Title>
                            <Description>{product.description}</Description>
                            <PriceAndQuantityDiv>
                                <RemoveOne
                                    onClick={removeOne}
                                    quantity={quantity}
                                    disabled={quantity === 1 ? true : false}
                                    whileHover={() => {
                                        if (quantity > 1)
                                            return {
                                                backgroundColor: "#ececec",
                                                color: "#333",
                                            };
                                    }}
                                >
                                    -
                                </RemoveOne>
                                <Quantity>{quantity}</Quantity>
                                <AddOne
                                    onClick={addOne}
                                    whileHover={{
                                        backgroundColor: "#ececec",
                                        color: "#333",
                                    }}
                                >
                                    +
                                </AddOne>
                                <Price>{`$ ${product.price}`}</Price>
                            </PriceAndQuantityDiv>
                        </InfoContainer>
                    </Container>
                )}
            </AnimatePresence>
        </>
    );
};
export default ProductModal;
