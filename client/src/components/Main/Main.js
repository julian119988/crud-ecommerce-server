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
import ProductsDiv from "../ProductListOrGrid/ProductListOrGrid";
import { UserContext } from "../../App";
import FormModal from "../Modals/FormModal/FormModal";
import { LoadProductContext } from "../../App";
import axios from "axios";
import BrandBar from "../BrandBar/BrandBar";

const Main = () => {
    const [layout, setLayout] = useState("column");
    const [isAdmin, setIsAdmin] = useState(false);
    const [showNewProductForm, setShowNewProductForm] = useState(false);
    const [brands, setBrands] = useState();
    const user = useContext(UserContext);
    const { getProducts } = useContext(LoadProductContext);
    useEffect(() => {
        if (user) {
            setIsAdmin(user.admin);
        }
        getBrands();
    }, [user]);
    const getBrands = async () => {
        const { data } = await axios.get("http://localhost:8080/api/brands");
        if (data) setBrands(data);
    };
    const handleNewProduct = async (product) => {
        try {
            await axios.post("http://localhost:8080/api/products", product, {
                headers: {
                    authorization: `Bearer ${user.accessToken}`,
                },
            });
            getProducts();
        } catch (err) {
            console.log(err.message);
        }
    };

    const toggleNewProductForm = () => {
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
                            />
                            <SwitchLabel
                                right
                                htmlFor="grid"
                                animate={
                                    layout === "grid" ? "active" : "static"
                                }
                                variants={labelVariants}
                                whileHover={layout === "grid" ? "" : "hover"}
                            >
                                Grid
                            </SwitchLabel>
                            <SwitchInput
                                type="radio"
                                value="grid"
                                id="grid"
                                name="layout-selector"
                                onChange={() => setLayout("grid")}
                            />
                        </SwitchInputDiv>
                    </TitleAndLayoutSelector>
                    {isAdmin && <BrandBar />}
                    <ProductsDiv grid={layout === "grid" ? true : false} />
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
