import { useContext, useEffect, useState } from "react";
import {
    Container,
    ImageThumbnail,
    BrandLogo,
    MediaDiv,
    TextAndPriceDiv,
    Title,
    Price,
    EditButton,
    DeleteButton,
    AdminButtonsDiv,
} from "./Styles";
import {
    adminButtonsVariant,
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
import { defineUriByEnviroment } from "../../config";
import { UserContext } from "../../App";
import FormModal from "../Modals/FormModal/FormModal";
import { LoadProductContext } from "../../App";

const ProductListItem = ({ grid, product, index }) => {
    const [brandInfo, setBrandInfo] = useState();
    const [showModal, setShowModal] = useState(false);
    const [isBrandLogoLoaded, setIsBrandLogoLoaded] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const user = useContext(UserContext);
    const { getProducts } = useContext(LoadProductContext);
    const isSmall = useIsSmall();

    const editProductBody = [
        {
            type: "text",
            name: "name",
            placeholder: "T-shirt",
            required: true,
            defaultValue: product.name,
        },
        {
            type: "test",
            name: "description",
            placeholder:
                "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
            required: true,
            defaultValue: product.description,
        },
        {
            type: "text",
            name: "image_url",
            placeholder: "https://myimage/product.png",
            required: true,
            defaultValue: product.image_url,
        },
        {
            type: "number",
            name: "price",
            placeholder: "1000",
            required: true,
            defaultValue: parseInt(product.price),
        },
    ];

    const toggleModal = (event) => {
        if (event.target.tagName !== "BUTTON") setShowModal(!showModal);
    };

    useEffect(() => {
        getItemBrand(); // eslint-disable-next-line
    }, []);
    useEffect(() => {
        if (user?.admin) {
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
        }
    }, [user]);

    const getItemBrand = async () => {
        if (product) {
            try {
                const { data } = await axios.get(
                    `${defineUriByEnviroment()}/api/brand/${product.brand_id}`
                );
                setBrandInfo(data);
            } catch (err) {
                console.log(err);
            }
        }
    };
    const deleteProduct = async () => {
        try {
            const { data } = await axios.delete(
                `${defineUriByEnviroment()}/api/products/${product.id}`,
                {
                    headers: {
                        authorization: `Bearer ${user.accessToken}`,
                    },
                }
            );
            console.log(data);
        } catch (error) {}
    };
    const handleDeleteProduct = async () => {
        await deleteProduct();
        await getProducts();
    };

    const handleEditProduct = async (body) => {
        await putProduct(body);
        await getProducts();
    };

    const toggleEditModal = () => {
        setShowEditModal(!showEditModal);
    };

    const putProduct = async (body) => {
        try {
            const { data } = await axios.put(
                `${defineUriByEnviroment()}/api/products/${product.id}`,
                body,
                {
                    headers: {
                        authorization: `Bearer ${user.accessToken}`,
                    },
                }
            );
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <AnimatePresence>
            {!product ? (
                <div key={7772 * (index + 1)}>Loading...</div>
            ) : (
                <Container
                    key={7771 * (index + 1)}
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
                        key={7774 * (index + 1)}
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
                    />

                    <MediaDiv
                        key={7775 * (index + 1)}
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
                            key={7776 * (index + 1)}
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
                            <Title key={7777 * (index + 1)}>
                                {product.name}
                            </Title>
                            <Price
                                key={7778 * (index + 1)}
                            >{`$ ${product.price}`}</Price>
                        </TextAndPriceDiv>
                        {!brandInfo && !isBrandLogoLoaded ? (
                            <div>Loading...</div>
                        ) : (
                            <BrandLogo
                                key={7779 * (index + 1)}
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
                    {isAdmin && (
                        <AdminButtonsDiv
                            variants={adminButtonsVariant}
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
                            <EditButton
                                whileHover={{ opacity: 1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={toggleEditModal}
                            >
                                Edit
                            </EditButton>
                            <DeleteButton
                                whileHover={{ opacity: 1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={handleDeleteProduct}
                            >
                                Delete
                            </DeleteButton>
                        </AdminButtonsDiv>
                    )}
                </Container>
            )}
            <ProductModal
                show={showModal}
                toggleModal={toggleModal}
                key={77777 * (index + 1)}
                brand={brandInfo}
                product={product}
            />
            <FormModal
                isVisible={showEditModal}
                toggleModal={toggleEditModal}
                title="Edit product"
                getFormData={handleEditProduct}
                submitButtonText="Edit"
                body={editProductBody}
            />
        </AnimatePresence>
    );
};
export default ProductListItem;
