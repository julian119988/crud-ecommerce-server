import { ProductsDiv } from "./Styles";
import { UserContext } from "../../../App";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import framerVariants from "./framerVariants";
import ProductListItem from "./ProductListItem/ProductListItem";

const ProductListOrGrid = ({ grid }) => {
    const [products, setProducts] = useState([]);
    const user = useContext(UserContext);
    useEffect(() => {
        getProducts();
    }, []);
    const getProducts = async () => {
        try {
            const { data } = await axios.get(
                "http://localhost:8080/api/products"
            );
            setProducts(data);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <ProductsDiv
            grid={grid}
            variants={framerVariants}
            animate={grid ? "grid" : "column"}
        >
            {!products ? (
                <div>No product is available</div>
            ) : (
                products.map((product, index) => (
                    <ProductListItem
                        product={product}
                        key={index + "products"}
                        grid={grid}
                    />
                ))
            )}
        </ProductsDiv>
    );
};
export default ProductListOrGrid;
