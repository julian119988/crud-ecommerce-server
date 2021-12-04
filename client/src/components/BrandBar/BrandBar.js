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
        const wasSuccessfull = await postBrand(data, user.accessToken);
        if (wasSuccessfull) {
            refreshProducts();
            return true;
        } else {
            return false;
        }
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
        const wasSuccessful = await putBrand(data, user.accessToken);
        if (wasSuccessful) {
            refreshProducts();
            return true;
        } else {
            return false;
        }
    };

    const toggleShowModalDeleteBrand = () => {
        if (!showModalDeleteBrand) handleGetBrands();
        setShowModalDeleteBrand(!showModalDeleteBrand);
    };
    const handleDeleteBrand = async (data) => {
        const wasSuccessfull = await deleteBrand(data, user.accessToken);
        if (wasSuccessfull) {
            refreshProducts();
            return true;
        } else {
            return false;
        }
    };

    return (
        <AnimatePresence>
            <BrandDiv key={55412}>
                <Title key={55413}>Brands</Title>
                <ButtonsDiv key={55414}>
                    <NewBrand
                        key={55415}
                        whileHover={{
                            opacity: 0.5,
                        }}
                        onClick={toggleShowModalAddBrand}
                    >
                        Add a brand
                    </NewBrand>
                    <EditBrand
                        key={55416}
                        whileHover={{
                            opacity: 0.5,
                        }}
                        onClick={toggleShowModalEditBrand}
                    >
                        Edit a brand
                    </EditBrand>
                    <DeleteBrand
                        key={55417}
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
                key={55418}
                isVisible={showModalAddBrand}
                toggleModal={toggleShowModalAddBrand}
                title="New Brand"
                getFormData={handleAddBrand}
                submitButtonText="Add Brand"
                body={brandBody}
            />
            <FormModal
                key={55419}
                isVisible={showModalEditBrand}
                toggleModal={toggleShowModalEditBrand}
                title="Edit a Brand"
                getFormData={handleEditBrand}
                submitButtonText="Edit"
                body={brandBody}
                options={brands}
            />
            <FormModal
                key={55420}
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
