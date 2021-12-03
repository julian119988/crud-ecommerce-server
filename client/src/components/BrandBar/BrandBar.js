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
import axios from "axios";
import { defineUriByEnviroment } from "../../config";
import { LoadProductContext } from "../../App";
const BrandBar = () => {
    const [showModalAddBrand, setShowModalAddBrand] = useState(false);
    const [showModalEditBrand, setShowModalEditBrand] = useState(false);
    const [showModalDeleteBrand, setShowModalDeleteBrand] = useState(false);
    const [brands, setBrands] = useState([]);
    const { getProducts } = useContext(LoadProductContext);
    const user = useContext(UserContext);

    const handleAddBrand = (data) => {
        postBrand(data);
        getProducts();
    };

    const toggleShowModalAddBrand = () => {
        setShowModalAddBrand(!showModalAddBrand);
    };

    const getBrands = async () => {
        const { data } = await axios.get(
            `${defineUriByEnviroment()}/api/brands`
        );
        if (data) setBrands(data);
    };
    const postBrand = async (body) => {
        try {
            await axios.post(`${defineUriByEnviroment()}/api/brands`, body, {
                headers: {
                    authorization: `Bearer ${user.accessToken}`,
                },
            });
        } catch (err) {
            console.log(err);
        }
    };

    const putBrand = async (body) => {
        try {
            await axios.put(
                `${defineUriByEnviroment()}/api/brands/${body.brand_id}`,
                body,
                {
                    headers: {
                        authorization: `Bearer ${user.accessToken}`,
                    },
                }
            );
        } catch (err) {
            console.log(err);
        }
    };
    const toggleShowModalEditBrand = () => {
        if (!showModalEditBrand) getBrands();
        setShowModalEditBrand(!showModalEditBrand);
    };
    const handleEditBrand = async (data) => {
        await putBrand(data);
        await getProducts();
    };

    const toggleShowModalDeleteBrand = () => {
        if (!showModalDeleteBrand) getBrands();
        setShowModalDeleteBrand(!showModalDeleteBrand);
    };
    const handleDeleteBrand = async (data) => {
        await deleteBrand(data);
        await getProducts();
    };
    const deleteBrand = async (body) => {
        try {
            await axios.delete(
                `${defineUriByEnviroment()}/api/brands/${body.brand_id}`,
                {
                    headers: {
                        authorization: `Bearer ${user.accessToken}`,
                    },
                }
            );
        } catch (err) {
            console.log(err);
        }
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
