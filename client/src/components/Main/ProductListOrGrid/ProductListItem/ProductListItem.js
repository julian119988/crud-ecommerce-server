import { useEffect } from "react";
import { Container, ImageThumbnail } from "./Styles";
import { containerVariants } from "./framerVariants";
import { useIsSmall } from "../../../../hooks/useMediaQuery";
import axios from "axios";

const ProductListItem = ({ grid, product }) => {
    const isSmall = useIsSmall();
    useEffect(() => {
        getItemBrand();
        console.log(grid, product);
    }, []);
    useEffect(() => {
        console.log(isSmall);
    });

    const getItemBrand = async () => {
        if (product) {
            const { data } = await axios.get(
                `http://localhost:8080/api/brand/${product.brand_id}`
            );
            console.log(data);
        }
    };
    return (
        <Container
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
        >
            <ImageThumbnail />
        </Container>
    );
};
export default ProductListItem;
