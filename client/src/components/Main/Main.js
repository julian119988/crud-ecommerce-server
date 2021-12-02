import { useContext, useEffect, useState } from "react";
import {
    MainDiv,
    ProductSection,
    Title,
    TitleAndLayoutSelector,
    SwitchInput,
    SwitchInputDiv,
    SwitchLabel,
    NewProductButton,
} from "./Styles";
import { labelVariants } from "./mainVariants";
import ProductListOrGrid from "../ProductListOrGrid/ProductListOrGrid";
import { UserContext } from "../../App";
import FormModal from "../Modals/FormModal/FormModal";
import { LoadProductContext } from "../../App";
import axios from "axios";
import BrandBar from "../BrandBar/BrandBar";
import { defineUriByEnviroment } from "../../config";
import UsersBar from "../UsersBar/UsersBar";

const Main = () => {
    const [layout, setLayout] = useState("column");
    const [isAdmin, setIsAdmin] = useState(false);
    const [showNewProductForm, setShowNewProductForm] = useState(false);
    const [brands, setBrands] = useState();
    const { getProducts } = useContext(LoadProductContext);
    const user = useContext(UserContext);
    useEffect(() => {
        if (user) {
            setIsAdmin(user.admin);
        } else {
            setIsAdmin(false);
        }
        getBrands();
    }, [user]);
    const getBrands = async () => {
        const { data } = await axios.get(
            `${defineUriByEnviroment()}/api/brands`
        );
        if (data) setBrands(data);
    };
    const handleNewProduct = async (product) => {
        try {
            await axios.post(
                `${defineUriByEnviroment()}/api/products`,
                product,
                {
                    headers: {
                        authorization: `Bearer ${user.accessToken}`,
                    },
                }
            );
            getProducts();
        } catch (err) {
            console.log(err.message);
        }
    };

    const toggleNewProductForm = () => {
        getBrands();
        setShowNewProductForm(!showNewProductForm);
    };
    return (
        <>
            <MainDiv>
                <ProductSection>
                    <TitleAndLayoutSelector>
                        <Title>Products</Title>
                        {isAdmin && (
                            <>
                                <NewProductButton
                                    whileHover={{ opacity: 0.5 }}
                                    onClick={toggleNewProductForm}
                                >
                                    New product
                                </NewProductButton>
                            </>
                        )}
                        <SwitchInputDiv>
                            <SwitchLabel
                                htmlFor="column"
                                animate={
                                    layout === "column" ? "active" : "static"
                                }
                                variants={labelVariants}
                                whileHover={layout === "column" ? "" : "hover"}
                                key={15}
                            >
                                Column
                            </SwitchLabel>
                            <SwitchInput
                                type="radio"
                                value="column"
                                name="layout-selector"
                                defaultChecked
                                id="column"
                                onChange={() => setLayout("column")}
                                key={16}
                            />
                            <SwitchLabel
                                right
                                htmlFor="grid"
                                animate={
                                    layout === "grid" ? "active" : "static"
                                }
                                variants={labelVariants}
                                whileHover={layout === "grid" ? "" : "hover"}
                                key={17}
                            >
                                Grid
                            </SwitchLabel>
                            <SwitchInput
                                type="radio"
                                value="grid"
                                id="grid"
                                name="layout-selector"
                                onChange={() => setLayout("grid")}
                                key={18}
                            />
                        </SwitchInputDiv>
                    </TitleAndLayoutSelector>
                    {isAdmin && <BrandBar />}
                    {isAdmin && <UsersBar />}
                    <ProductListOrGrid
                        grid={layout === "grid" ? true : false}
                    />
                </ProductSection>
            </MainDiv>
            <FormModal
                isVisible={showNewProductForm}
                toggleModal={toggleNewProductForm}
                title="New Product"
                getFormData={handleNewProduct}
                submitButtonText="Add Product"
                body={newProductInBody}
                options={brands}
            />
        </>
    );
};
export default Main;
const newProductInBody = [
    {
        type: "text",
        name: "name",
        placeholder: "T-shirt",
        required: true,
    },
    {
        type: "test",
        name: "description",
        placeholder:
            "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
        required: true,
    },
    {
        type: "text",
        name: "image_url",
        placeholder: "https://myimage/product.png",
        required: true,
    },
    {
        type: "number",
        name: "price",
        placeholder: "1000",
        required: true,
    },
];
