import { useEffect } from "react";
import { Container } from "./Styles";

const ProductListItem = ({ grid, product }) => {
    useEffect(() => console.log(grid, product));
    return <Container></Container>;
};
export default ProductListItem;
