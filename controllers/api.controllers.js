const { tables } = require("../models/index");
const { Products, Brands } = tables;

module.exports = {
    getBrands: async (req, res) => {
        try {
            const brands = await Brands.findAll();
            res.send(brands);
        } catch (err) {
            res.status(400).send(err);
        }
    },
    postBrand: async (req, res) => {
        const { name, logo_url } = req.body;
        try {
            const newBrand = await Brands.create({
                name: name,
                logo_url: logo_url,
            });
            const newBrandIsSaved = await newBrand.save();
            res.status(200).send(newBrandIsSaved);
        } catch (err) {
            res.status(400).send(err);
        }
    },
    putBrand: async (req, res) => {
        const { id } = req.params;
        const { name, logo_url } = req.body;
        try {
            const updatedBrand = await Brands.update(
                {
                    name,
                    logo_url,
                },
                { where: { id: id } }
            );
            res.send(updatedBrand);
        } catch (err) {
            res.status(400).send(err);
        }
    },
    deleteBrand: async (req, res) => {
        const { id } = req.params;
        try {
            const brandIsDeleted = await Brands.destroy({ where: { id } });
            if (!brandIsDeleted[0]) throw new Error("Brand doesn't exist");
            res.send({ message: "Brand deleted" });
        } catch ({ message }) {
            res.status(400).send({ message });
        }
    },
    getProducts: async (req, res) => {
        try {
            const products = await Products.findAll();
            res.send(products);
        } catch (err) {
            res.status(400).send({ message: "Something went wrong! :(" });
        }
    },
    postProduct: async (req, res) => {
        const { name, description, image_url, price, brand_id } = req.body;
        try {
            if (!name || !description || !image_url || !price || !brand_id)
                throw new Error({ message: "Missing data" });
            const brandExist = await Brands.findAll({
                where: {
                    id: brand_id,
                },
            });
            if (!brandExist)
                throw new Error({ message: "Brand doesn't exists" });
            console.log(brandExist);
            const newProduct = await Products.create({
                name,
                description,
                image_url,
                price,
                brand_id,
            });
            const newProductsIsSaved = await newProduct.save();
            res.status(200).send(newProductsIsSaved);
        } catch ({ message }) {
            res.status(400).send({ message });
        }
    },
    putProduct: async (req, res) => {
        const { name, description, image_url, price, brand_id } = req.body;
        const { id } = req.params;
        try {
            const updatedProduct = await Products.update(
                { name, description, image_url, price, brand_id },
                { where: { id: id } }
            );
            res.status(201).send(updatedProduct);
        } catch (err) {
            res.status(400).send({ message: "Something went wrong" });
        }
    },
    deleteProduct: async (req, res) => {
        const { id } = req.params;
        try {
            const deletedProduct = await Products.destroy({
                where: { id: id },
            });
            if (!deletedProduct[0])
                throw new Error("The product doesn't exist.");
            res.send(deletedProduct);
        } catch (err) {
            res.status(400).send(err);
        }
    },
};
