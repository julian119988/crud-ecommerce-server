import axios from "axios";
import { defineUriByEnviroment } from "../config";
import {
    errorHandler,
    successfullOperationHandler,
} from "./api.messagesHandler";

export const getProducts = async () => {
    try {
        const { data } = await axios.get(
            `${defineUriByEnviroment()}/api/products`
        );
        return data;
    } catch ({
        response: {
            data: { message },
        },
    }) {
        errorHandler("error", "Error", message);
        return null;
    }
};
export const postProducts = async (product, accessToken) => {
    try {
        await axios.post(`${defineUriByEnviroment()}/api/products`, product, {
            headers: {
                authorization: `Bearer ${accessToken}`,
            },
        });
        successfullOperationHandler(
            "success",
            "Success",
            "Product added successfully."
        );
        return true;
    } catch ({
        response: {
            data: { message },
        },
    }) {
        errorHandler("error", "Error", message);
        return false;
    }
};
export const getBrands = async () => {
    try {
        const { data } = await axios.get(
            `${defineUriByEnviroment()}/api/brands`
        );
        return data;
    } catch ({
        response: {
            data: { message },
        },
    }) {
        errorHandler("error", "Error", message);
        return null;
    }
};

export const postBrand = async (body, accessToken) => {
    try {
        await axios.post(`${defineUriByEnviroment()}/api/brands`, body, {
            headers: {
                authorization: `Bearer ${accessToken}`,
            },
        });
        successfullOperationHandler(
            "success",
            "Success",
            "Brand added successfully."
        );
        return true;
    } catch ({
        response: {
            data: { message },
        },
    }) {
        errorHandler("error", "Error", message);
        return false;
    }
};

export const putBrand = async (body, accessToken) => {
    try {
        await axios.put(
            `${defineUriByEnviroment()}/api/brands/${body.brand_id}`,
            body,
            {
                headers: {
                    authorization: `Bearer ${accessToken}`,
                },
            }
        );
        successfullOperationHandler(
            "success",
            "Success",
            "Brand edited successfully."
        );
        return true;
    } catch ({
        response: {
            data: { message },
        },
    }) {
        errorHandler("error", "Error", message);
        return false;
    }
};

export const deleteBrand = async (body, accessToken) => {
    try {
        await axios.delete(
            `${defineUriByEnviroment()}/api/brands/${body.brand_id}`,
            {
                headers: {
                    authorization: `Bearer ${accessToken}`,
                },
            }
        );
        successfullOperationHandler(
            "success",
            "Success",
            "Brand deleted successfully."
        );
        return true;
    } catch ({
        response: {
            data: { message },
        },
    }) {
        errorHandler("error", "Error", message);
        return false;
    }
};
export const logIn = async (body) => {
    try {
        const { data } = await axios.post(
            `${defineUriByEnviroment()}/auth/loginUser`,
            body
        );
        return data;
    } catch ({
        response: {
            data: { message },
        },
    }) {
        errorHandler("error", "Error", message);
        return null;
    }
};

export const signUp = async (body) => {
    try {
        const { data } = await axios.post(
            `${defineUriByEnviroment()}/auth/signUp`,
            body
        );
        successfullOperationHandler(
            "success",
            "Success",
            "Account created successfully."
        );
        return data;
    } catch ({
        response: {
            data: { message },
        },
    }) {
        errorHandler("error", "Error", message);
        return null;
    }
};

export const getItemBrand = async (product) => {
    try {
        const { data } = await axios.get(
            `${defineUriByEnviroment()}/api/brand/${product.brand_id}`
        );
        return data;
    } catch ({
        response: {
            data: { message },
        },
    }) {
        errorHandler("error", "Error", message);
        return null;
    }
};
export const deleteProduct = async (product, accessToken) => {
    try {
        const { data } = await axios.delete(
            `${defineUriByEnviroment()}/api/products/${product.id}`,
            {
                headers: {
                    authorization: `Bearer ${accessToken}`,
                },
            }
        );
        successfullOperationHandler(
            "success",
            "Success",
            "Product deleted successfully."
        );
        return data;
    } catch ({
        response: {
            data: { message },
        },
    }) {
        errorHandler("error", "Error", message);
        return null;
    }
};

export const putProduct = async (body, product, accessToken) => {
    try {
        await axios.put(
            `${defineUriByEnviroment()}/api/products/${product.id}`,
            body,
            {
                headers: {
                    authorization: `Bearer ${accessToken}`,
                },
            }
        );
        successfullOperationHandler(
            "success",
            "Success",
            "Product edited successfully."
        );
        return true;
    } catch ({
        response: {
            data: { message },
        },
    }) {
        errorHandler("error", "Error", message);
        return false;
    }
};

export const deleteUser = async (body, accessToken, email) => {
    try {
        const { data } = await axios.delete(
            `${defineUriByEnviroment()}/auth/user/${body.brand_id}`,
            {
                headers: {
                    authorization: `Bearer ${accessToken}`,
                },
                data: {
                    email,
                },
            }
        );
        successfullOperationHandler(
            "success",
            "Success",
            "User deleted successfully."
        );
        return data;
    } catch ({
        response: {
            data: { message },
        },
    }) {
        errorHandler("error", "Error", message);
        return null;
    }
};

export const postAdminUser = async (body, accessToken) => {
    body["admin"] = true;
    try {
        const { data } = await axios.post(
            `${defineUriByEnviroment()}/auth/addAdminUser`,
            body,
            {
                headers: {
                    authorization: `Bearer ${accessToken}`,
                },
            }
        );
        successfullOperationHandler(
            "success",
            "Success",
            "Account created successfully."
        );
        return data;
    } catch ({
        response: {
            data: { message },
        },
    }) {
        errorHandler("error", "Error", message);
        return null;
    }
};

export const getAllUsers = async (accessToken) => {
    try {
        const { data } = await axios.get(
            `${defineUriByEnviroment()}/auth/allUsers`,
            {
                headers: {
                    authorization: `Bearer ${accessToken}`,
                },
            }
        );
        return data;
    } catch ({
        response: {
            data: { message },
        },
    }) {
        errorHandler("error", "Error", message);
        return null;
    }
};

export const postLoadPlaceholders = async (accessToken) => {
    try {
        await axios.post(
            `${defineUriByEnviroment()}/load-placeholders`,
            {},
            {
                headers: {
                    authorization: `Bearer ${accessToken}`,
                },
            }
        );
        successfullOperationHandler(
            "success",
            "Success",
            "Products and brands added successfully."
        );
        return true;
    } catch ({
        response: {
            data: { message },
        },
    }) {
        errorHandler("error", "Error", message);
        return null;
    }
};
