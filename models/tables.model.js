module.exports = (sequelize, Sequelize) => {
    const Products = sequelize.define(
        "products",
        {
            name: {
                type: Sequelize.STRING,
                allowNull: false,
                required: true,
            },
            description: {
                type: Sequelize.STRING,
                allowNull: false,
                required: true,
            },
            image_url: {
                type: Sequelize.STRING(2083),
                allowNull: false,
                required: true,
            },
            price: {
                type: Sequelize.INTEGER,
                allowNull: false,
                required: true,
            },
            brand_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                required: true,
            },
        },
        { underscored: true }
    );
    const Brands = sequelize.define(
        "brands",
        {
            name: {
                type: Sequelize.STRING,
                allowNull: false,
                required: true,
            },
            logo_url: {
                type: Sequelize.STRING(2083),
                allowNull: false,
                required: true,
            },
        },
        { underscored: true }
    );
    Brands.hasMany(Products);
    Products.belongsTo(Brands);

    return { Products, Brands };
};
