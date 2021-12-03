import {
    Title,
    BrandDiv,
    DeleteBrand,
    NewBrand,
    EditBrand,
    ButtonsDiv,
} from "./Styles";
import { AnimatePresence } from "framer-motion";
import { useContext, useState } from "react";
import { UserContext } from "../../App";
import FormModal from "../Modals/FormModal/FormModal";
import { LoadProductContext } from "../../App";
import { deleteBrand, getBrands, postBrand, putBrand } from "../../helper/api";
const BrandBar = () => {
    const [showModalAddBrand, setShowModalAddBrand] = useState(false);
    const [showModalEditBrand, setShowModalEditBrand] = useState(false);
    const [showModalDeleteBrand, setShowModalDeleteBrand] = useState(false);
    const [brands, setBrands] = useState([]);
    const { refreshProducts } = useContext(LoadProductContext);
    const user = useContext(UserContext);

    const handleAddBrand = async (data) => {
        await postBrand(data, user.accessToken);
        refreshProducts();
    };

    const toggleShowModalAddBrand = () => {
        setShowModalAddBrand(!showModalAddBrand);
    };

    const handleGetBrands = async () => {
        const data = await getBrands();
        if (data) setBrands(data);
    };

    const toggleShowModalEditBrand = () => {
        if (!showModalEditBrand) handleGetBrands();
        setShowModalEditBrand(!showModalEditBrand);
    };
    const handleEditBrand = async (data) => {
        await putBrand(data, user.accessToken);
        await refreshProducts();
    };

    const toggleShowModalDeleteBrand = () => {
        if (!showModalDeleteBrand) handleGetBrands();
        setShowModalDeleteBrand(!showModalDeleteBrand);
    };
    const handleDeleteBrand = async (data) => {
        await deleteBrand(data, user.accessToken);
        await refreshProducts();
    };

    return (
        <AnimatePresence>
            <BrandDiv>
                <Title>Brands</Title>
                <ButtonsDiv>
                    <NewBrand
                        whileHover={{
                            opacity: 0.5,
                        }}
                        onClick={toggleShowModalAddBrand}
                    >
                        Add a brand
                    </NewBrand>
                    <EditBrand
                        whileHover={{
                            opacity: 0.5,
                        }}
                        onClick={toggleShowModalEditBrand}
                    >
                        Edit a brand
                    </EditBrand>
                    <DeleteBrand
                        whileHover={{
                            opacity: 0.5,
                        }}
                        onClick={toggleShowModalDeleteBrand}
                    >
                        Delete a brand
                    </DeleteBrand>
                </ButtonsDiv>
            </BrandDiv>
            <FormModal
                isVisible={showModalAddBrand}
                toggleModal={toggleShowModalAddBrand}
                title="New Brand"
                getFormData={handleAddBrand}
                submitButtonText="Add Brand"
                body={brandBody}
            />
            <FormModal
                isVisible={showModalEditBrand}
                toggleModal={toggleShowModalEditBrand}
                title="Edit a Brand"
                getFormData={handleEditBrand}
                submitButtonText="Edit"
                body={brandBody}
                options={brands}
            />
            <FormModal
                isVisible={showModalDeleteBrand}
                toggleModal={toggleShowModalDeleteBrand}
                title="Delete a Brand"
                getFormData={handleDeleteBrand}
                submitButtonText="Delete"
                options={brands}
            />
        </AnimatePresence>
    );
};
export default BrandBar;
const brandBody = [
    {
        type: "text",
        name: "name",
        placeholder: "Gucci",
        required: true,
    },
    {
        type: "text",
        name: "logo_url",
        placeholder: "http://my_logo_image.com/t-shirt.jpg",
        required: true,
    },
];
