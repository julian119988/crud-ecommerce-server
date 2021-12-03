import axios from "axios";
import { defineUriByEnviroment } from "../config";

export const getProducts = async () => {
    try {
        const { data } = await axios.get(
            `${defineUriByEnviroment()}/api/products`
        );
        return data;
    } catch (err) {
        console.log(err);
    }
};
export const postProducts = async (product, accessToken) => {
    try {
        const { data } = await axios.post(
            `${defineUriByEnviroment()}/api/products`,
            product,
            {
                headers: {
                    authorization: `Bearer ${accessToken}`,
                },
            }
        );
        return data;
    } catch (err) {
        console.log(err);
    }
};
export const getBrands = async () => {
    try {
        const { data } = await axios.get(
            `${defineUriByEnviroment()}/api/brands`
        );
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const postBrand = async (body, accessToken) => {
    try {
        const { data } = await axios.post(
            `${defineUriByEnviroment()}/api/brands`,
            body,
            {
                headers: {
                    authorization: `Bearer ${accessToken}`,
                },
            }
        );
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const putBrand = async (body, accessToken) => {
    try {
        const { data } = await axios.put(
            `${defineUriByEnviroment()}/api/brands/${body.brand_id}`,
            body,
            {
                headers: {
                    authorization: `Bearer ${accessToken}`,
                },
            }
        );
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const deleteBrand = async (body, accessToken) => {
    try {
        const { response } = await axios.delete(
            `${defineUriByEnviroment()}/api/brands/${body.brand_id}`,
            {
                headers: {
                    authorization: `Bearer ${accessToken}`,
                },
            }
        );
        return response;
    } catch (err) {
        console.log(err);
    }
};

export const logIn = async (body) => {
    try {
        const { data } = await axios.post(
            `${defineUriByEnviroment()}/auth/loginUser`,
            body
        );
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
};

export const signUp = async (body) => {
    try {
        const response = await axios.post(
            `${defineUriByEnviroment()}/auth/signUp`,
            body
        );
        return response;
    } catch (err) {
        console.log(err);
        return null;
    }
};

export const getItemBrand = async (product) => {
    try {
        const { data } = await axios.get(
            `${defineUriByEnviroment()}/api/brand/${product.brand_id}`
        );
        return data;
    } catch (err) {
        console.log(err);
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
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const putProduct = async (body, product, accessToken) => {
    try {
        const { data } = await axios.put(
            `${defineUriByEnviroment()}/api/products/${product.id}`,
            body,
            {
                headers: {
                    authorization: `Bearer ${accessToken}`,
                },
            }
        );
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const deleteUser = async (body, accessToken) => {
    try {
        const { data } = await axios.delete(
            `${defineUriByEnviroment()}/auth/user/${body.brand_id}`,
            {
                headers: {
                    authorization: `Bearer ${accessToken}`,
                },
            }
        );
        return data;
    } catch (err) {
        console.log(err);
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
        return data;
    } catch (err) {
        console.log(err);
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
    } catch (err) {
        console.log(err);
    }
};
