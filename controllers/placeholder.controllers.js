const { tables } = require("../models/index");
const { Products, Brands } = tables;
const axios = require("axios");

module.exports = {
    hardcodeDB: async (req, res) => {
        try {
            await Brands.bulkCreate([
                {
                    name: "Adidas",
                    logo_url:
                        "https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/sites/4/2020/04/the-4th-logo-1024x862.jpg",
                },
                {
                    name: "Gucci",
                    logo_url:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Gucci_logo.svg/1993px-Gucci_logo.svg.png",
                },
                {
                    name: "Levis",
                    logo_url:
                        "https://turbologo.com/articles/wp-content/uploads/2020/01/levis-primary-logo.png",
                },
                {
                    name: "Under Armour",
                    logo_url:
                        "https://logoeps.com/wp-content/uploads/2012/11/under-armour-black-vector-logo.png",
                },
                {
                    name: "Zara",
                    logo_url:
                        "https://i.blogs.es/5b1edc/captura-de-pantalla-2020-04-01-a-las-17.53.58/1366_2000.png",
                },
            ]);
            const { data } = await axios.get(
                "https://fakestoreapi.com/products"
            );
            const allBrands = await Brands.findAll();
            const totalBrands = allBrands.length - 1;
            data.forEach(async ({ title, description, image, price }) => {
                const product = await Products.create({
                    name: title.substring(0, 30),
                    description: description.substring(0, 120),
                    image_url: image,
                    brand_id: randomBrandId(totalBrands, allBrands),
                    price,
                });
                product.save();
            });
            res.send({ message: "Data created successfully" });
        } catch (err) {
            res.status(400).send(err.message);
        }
    },
};

function randomBrandId(max, allBrands) {
    const randomNumber = Math.floor(Math.random() * (max - 0 + 1) + 0);
    return allBrands[randomNumber]?.id;
}
