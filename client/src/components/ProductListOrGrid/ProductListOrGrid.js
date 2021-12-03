import { ProductsDiv } from "./Styles";
import { useContext, useEffect, useState } from "react";
import { framerVariants } from "./framerVariants";
import ProductListItem from "../ProductListItem/ProductListItem";
import { useIsSmall } from "../../hooks/useMediaQuery";
import { LoadProductContext } from "../../App";

const ProductListOrGrid = ({ grid }) => {
    const [loadedProducts, setLoadedProducts] = useState(null);
    const { products } = useContext(LoadProductContext);
    const isSmall = useIsSmall();

    useEffect(() => {
        if (products) {
            setLoadedProducts(products);
        } else {
            setLoadedProducts(null);
        }
    }, [products]);
    return (
        <ProductsDiv
            grid={grid}
            variants={framerVariants}
            animate={grid ? (!isSmall ? "smallGrid" : "bigGrid") : "column"}
        >
            {!loadedProducts ? (
                <div>No product is available</div>
            ) : (
                <div>asd</div> /* 
                loadedProducts.map((product, index) => (
                    <ProductListItem
                        product={product}
                        key={index + 100}
                        grid={grid}
                        index={index}
                    />
                ))*/
            )}
        </ProductsDiv>
    );
};
export default ProductListOrGrid;
