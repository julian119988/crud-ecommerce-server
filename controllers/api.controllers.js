const { tables } = require("../models/index");
const { Products, Brands } = tables;

module.exports = {
    getBrands: async (req, res) => {
        try {
            const brands = await Brands.findAll();
            res.send(brands);
        } catch (err) {
            res.status(400).send({ message: "Something went wrong!" });
        }
    },
    getOneBrand: async (req, res) => {
        const { id } = req.params;
        try {
            const brand = await Brands.findOne({
                where: {
                    id,
                },
            });
            if (!brand) throw new Error("Brand doesn't exist.");
            res.send(brand);
        } catch ({ message }) {
            res.status(400).send({ message });
        }
    },
    postBrand: async (req, res) => {
        const { name, logo_url } = req.body;
        try {
            const newBrand = await Brands.create({
                name: name,
                logo_url: logo_url,
            });
            await newBrand.save();
            res.status(200).send({ message: "New brand created!" });
        } catch (err) {
            res.status(400).send({ message: "Something went wrong!" });
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
            res.send({ message: "Brand successfully updated!" });
        } catch (err) {
            res.status(400).send({ message: "Something went wrong!" });
        }
    },
    deleteBrand: async (req, res) => {
        const { id } = req.params;
        try {
            const brandIsDeleted = await Brands.destroy({
                where: { id: parseInt(id) },
            });
            if (!brandIsDeleted) throw new Error("Brand doesn't exist");
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
            res.status(400).send({ message: "Something went wrong!" });
        }
    },
    getProductById: async (req, res) => {
        const { id } = req.params;
        try {
            const products = await Products.findOne({ where: { id } });
            if (products !== null) {
                res.send(products);
            } else {
                res.send({ message: "No product with that id" });
            }
        } catch (err) {
            res.status(400).send({ message: "Something went wrong! :(" });
        }
    },
    postProduct: async (req, res) => {
        const { name, description, image_url, price, brand_id } = req.body;
        try {
            if (!name || !description || !image_url || !price || !brand_id)
                throw new Error("Missing data");
            const brandExist = await Brands.findOne({
                where: {
                    id: brand_id,
                },
            });
            if (!brandExist) throw new Error("Brand doesn't exists");
            console.log(brandExist);
            const newProduct = await Products.create({
                name,
                description,
                image_url,
                price,
                brand_id,
            });
            await newProduct.save();
            res.status(200).send({ message: "Product created successfully!" });
        } catch ({ message }) {
            res.status(400).send(message);
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
            if (!deletedProduct) throw new Error("The product doesn't exist.");
            res.send({ message: "Product deleted successfully!" });
        } catch (err) {
            res.status(400).send(err);
        }
    },
};
