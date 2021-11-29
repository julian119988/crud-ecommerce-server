const router = require("express").Router();
const {
    getBrands,
    postBrand,
    getProducts,
    postProduct,
    putProduct,
    deleteProduct,
    putBrand,
    deleteBrand,
    getOneBrand,
} = require("../controllers/api.controllers");
const { isAuthorized } = require("../middlewares/auth.middlewares");

router.get("/products", getProducts);
router.post("/products", isAuthorized, postProduct);
router.put("/products/:id", isAuthorized, putProduct);
router.delete("/products/:id", isAuthorized, deleteProduct);

router.get("/brands", getBrands);
router.get("/brand/:id", getOneBrand);
router.post("/brands", isAuthorized, postBrand);
router.put("/brands/:id", isAuthorized, putBrand);
router.delete("/brands/:id", isAuthorized, deleteBrand);

module.exports = router;
