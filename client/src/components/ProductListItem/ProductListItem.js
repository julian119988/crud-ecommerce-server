import { useEffect, useState } from "react";
import {
    Container,
    ImageThumbnail,
    BrandLogo,
    MediaDiv,
    TextAndPriceDiv,
    Title,
    Price,
} from "./Styles";
import {
    brandLogoVariant,
    containerVariants,
    imageThumbnailVariants,
    mediaDivVariants,
    textAndPriceDivVariants,
} from "./framerVariants";
import { useIsSmall } from "../../hooks/useMediaQuery";
import axios from "axios";
import { AnimatePresence } from "framer-motion";
import ProductModal from "../Modals/ProductModal/ProductModal";

const ProductListItem = ({ grid, product }) => {
    const [brandInfo, setBrandInfo] = useState();
    const [showModal, setShowModal] = useState(false);
    const [isThumbnailLoaded, setIsThumbnailLoaded] = useState(false);
    const [isBrandLogoLoaded, setIsBrandLogoLoaded] = useState(false);
    const isSmall = useIsSmall();

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    useEffect(() => {
        getItemBrand(); // eslint-disable-next-line
    }, []);

    const getItemBrand = async () => {
        if (product) {
            const { data } = await axios.get(
                `http://localhost:8080/api/brand/${product.brand_id}`
            );
            setBrandInfo(data);
        }
    };
    return (
        <AnimatePresence>
            {!product && !isThumbnailLoaded ? (
                <div key={77777772}>Loading...</div>
            ) : (
                <Container
                    key={77777771}
                    onClick={toggleModal}
                    variants={containerVariants}
                    animate={
                        grid
                            ? !isSmall
                                ? "smallGrid"
                                : "bigGrid"
                            : !isSmall
                            ? "smallColumn"
                            : "bigColumn"
                    }
                    whileHover={{ scale: 1.05 }}
                >
                    <ImageThumbnail
                        key={77777773}
                        src={product.image_url}
                        alt={product.name}
                        variants={imageThumbnailVariants}
                        animate={
                            grid
                                ? !isSmall
                                    ? "smallGrid"
                                    : "bigGrid"
                                : !isSmall
                                ? "smallColumn"
                                : "bigColumn"
                        }
                        onLoad={() => setIsThumbnailLoaded(true)}
                    />
                    <MediaDiv
                        key={77777774}
                        variants={mediaDivVariants}
                        animate={
                            grid
                                ? !isSmall
                                    ? "smallGrid"
                                    : "bigGrid"
                                : "column"
                        }
                    >
                        <TextAndPriceDiv
                            key={77777775}
                            variants={textAndPriceDivVariants}
                            animate={
                                grid
                                    ? !isSmall
                                        ? "smallGrid"
                                        : "bigGrid"
                                    : !isSmall
                                    ? "smallColumn"
                                    : "bigColumn"
                            }
                        >
                            <Title key={77777776}>{product.name}</Title>
                            <Price key={77777777}>{`$ ${product.price}`}</Price>
                        </TextAndPriceDiv>
                        {!brandInfo && !isBrandLogoLoaded ? (
                            <div>Loading...</div>
                        ) : (
                            <BrandLogo
                                key={77777778}
                                variants={brandLogoVariant}
                                animate={
                                    grid
                                        ? !isSmall
                                            ? "smallGrid"
                                            : "bigGrid"
                                        : !isSmall
                                        ? "smallColumn"
                                        : "bigColumn"
                                }
                                src={brandInfo.logo_url}
                                alt={brandInfo.name}
                                onLoad={() => setIsBrandLogoLoaded(true)}
                            />
                        )}
                    </MediaDiv>
                </Container>
            )}
            <ProductModal
                show={showModal}
                toggleModal={toggleModal}
                key={77777779}
                brand={brandInfo}
                product={product}
            />
        </AnimatePresence>
    );
};
export default ProductListItem;
