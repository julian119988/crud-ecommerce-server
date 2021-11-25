const express = require("express");
const router = express.Router();
const {
    getBrands,
    postBrand,
    getProducts,
    postProduct,
    putProduct,
    deleteProduct,
    putBrand,
    deleteBrand,
} = require("../controllers/controllers");

router.get("/products", getProducts);
router.post("/products", postProduct);
router.put("/products/:id", putProduct);
router.delete("/products/:id", deleteProduct);

router.get("/brands", getBrands);
router.post("/brands", postBrand);
router.put("/brands/:id", putBrand);
router.delete("/brands/:id", deleteBrand);
module.exports = router;
