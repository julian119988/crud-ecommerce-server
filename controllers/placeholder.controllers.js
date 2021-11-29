const { tables } = require("../models/index");
const { Products, Brands } = tables;
const path = require("path");
const axios = require("axios");

module.exports = {
    hardcodeDB: async (req, res) => {
        const commonPath = path.join(__dirname, "..", "public");
        const adidas = path.join(commonPath, "adidas.jpg");
        const gucci = path.join(commonPath, "gucci.png");
        const levis = path.join(commonPath, "levis.png");
        const underArmour = path.join(commonPath, "underArmour.png");
        const zara = path.join(commonPath, "sara.svg");

        try {
            const brands = await Brands.bulkCreate([
                {
                    name: "Adidas",
                    logo_url: adidas,
                },
                {
                    name: "Gucci",
                    logo_url: adidas,
                },
                {
                    name: "Levis",
                    logo_url: levis,
                },
                {
                    name: "Under Armour",
                    logo_url: underArmour,
                },
                {
                    name: "Zara",
                    logo_url: zara,
                },
                {
                    name: "Gucci",
                    logo_url: gucci,
                },
            ]);

            const { data } = await axios.get(
                "https://fakestoreapi.com/products"
            );

            const allBrands = await Brands.findAll();
            const totalBrands = allBrands.length - 1;
            data.forEach(async ({ title, description, image, price }) => {
                const product = await Products.create({
                    name: title,
                    description: description.substring(0, 120),
                    image_url: image,
                    brand_id: randomBrandId(totalBrands, allBrands),
                    price,
                });
            });
            res.send(data);
        } catch (err) {
            res.status(400).send(err.message);
        }
    },
};

function randomBrandId(max, allBrands) {
    const randomNumber = Math.floor(Math.random() * (max - 0 + 1) + 0);
    return allBrands[randomNumber]?.id;
}
