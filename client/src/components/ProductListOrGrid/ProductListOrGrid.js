import { ProductsDiv } from "./Styles";
import { useContext } from "react";
import { framerVariants } from "./framerVariants";
import ProductListItem from "../ProductListItem/ProductListItem";
import { useIsSmall } from "../../hooks/useMediaQuery";
import { LoadProductContext } from "../../App";

const ProductListOrGrid = ({ grid }) => {
    const { products } = useContext(LoadProductContext);
    const isSmall = useIsSmall();

    return (
        <ProductsDiv
            grid={grid}
            variants={framerVariants}
            animate={grid ? (!isSmall ? "smallGrid" : "bigGrid") : "column"}
        >
            {!products ? (
                <div>No product is available</div>
            ) : (
                products.map((product, index) => (
                    <ProductListItem
                        product={product}
                        key={index + 100}
                        grid={grid}
                    />
                ))
            )}
        </ProductsDiv>
    );
};
export default ProductListOrGrid;
