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
    getProductById,
} = require("../controllers/api.controllers");
const { isAuthorized, isAdmin } = require("../middlewares/auth.middlewares");

router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.post("/products", isAdmin, postProduct);
router.put("/products/:id", isAdmin, putProduct);
router.delete("/products/:id", isAdmin, deleteProduct);

router.get("/brands", getBrands);
router.get("/brand/:id", getOneBrand);
router.post("/brands", isAdmin, postBrand);
router.put("/brands/:id", isAdmin, putBrand);
router.delete("/brands/:id", isAdmin, deleteBrand);

module.exports = router;
