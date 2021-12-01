import { AnimatePresence } from "framer-motion";
import { useIsLandscape } from "../../../hooks/useMediaQuery";
import {
    AddOne,
    AddToCart,
    BrandImage,
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
    brandImageVariants,
    imageContainerVariants,
    infoContainerVariants,
} from "./framerVariants";
import { useEffect, useState } from "react";
import useStopScrolling from "../../../hooks/useStopScrolling";
import CrossIcon from "./CrossIcon";

const ProductModal = ({ show, toggleModal, product, brand }) => {
    const [quantity, setQuantity] = useState(1);
    const [addToCartMO, setAddToCartMO] = useState(false);
    const isLandscape = useIsLandscape();
    useStopScrolling(show);
    const addOne = () => {
        setQuantity(quantity + 1);
    };
    const removeOne = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    useEffect(() => {
        console.log(document.getElementById("crossIcon"));
        // if (isLandscape) {
        //     document.getElementById("crossIcon").style.fill = "#333";
        // } else {
        //     document.getElementById("crossIcon").style.fill = "#ececec";
        // }
    }, [isLandscape]);

    return (
        <>
            <AnimatePresence>
                {!show ? (
                    <></>
                ) : (
                    <Container key={1098652}>
                        <ImageContainer
                            key={109865}
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
                            <BrandImage
                                variants={brandImageVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                src={brand.logo_url}
                                alt={product.name}
                            />
                            <AddToCart
                                disabled
                                onMouseOver={() => setAddToCartMO(true)}
                                onMouseOut={() => setAddToCartMO(false)}
                                addToCartMO={addToCartMO}
                            >
                                Add to Cart
                            </AddToCart>
                        </InfoContainer>
                        <CrossIcon
                            toggleModal={toggleModal}
                            isLandscape={isLandscape}
                            color={isLandscape ? "#ececec" : "#333"}
                        />
                    </Container>
                )}
            </AnimatePresence>
        </>
    );
};
export default ProductModal;
