import {
    Title,
    BrandDiv,
    DeleteBrand,
    NewBrand,
    EditBrand,
    ButtonsDiv,
} from "./Styles";
import { AnimatePresence } from "framer-motion";
const BrandBar = () => {
    return (
        <AnimatePresence>
            <BrandDiv>
                <Title>Brands</Title>
                <ButtonsDiv>
                    <NewBrand
                        whileHover={{
                            opacity: 0.5,
                        }}
                    >
                        Add a brand
                    </NewBrand>
                    <EditBrand
                        whileHover={{
                            opacity: 0.5,
                        }}
                    >
                        Edit a brand
                    </EditBrand>
                    <DeleteBrand
                        whileHover={{
                            opacity: 0.5,
                        }}
                    >
                        Delete a brand
                    </DeleteBrand>
                </ButtonsDiv>
            </BrandDiv>
        </AnimatePresence>
    );
};
export default BrandBar;
