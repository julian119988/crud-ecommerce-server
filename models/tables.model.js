module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define(
        "products",
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                required: true,
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false,
                required: true,
            },
            image_url: {
                type: DataTypes.STRING(2083),
                allowNull: false,
                required: true,
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false,
                required: true,
            },
            brand_id: {
                type: DataTypes.INTEGER,
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
                type: DataTypes.STRING,
                allowNull: false,
                required: true,
            },
            logo_url: {
                type: DataTypes.STRING(2083),
                allowNull: false,
                required: true,
            },
        },
        { underscored: true }
    );
    const Users = sequelize.define("users", {
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            required: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true,
        },
        admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0,
        },
    });
    Products.belongsTo(Brands);

    return { Products, Brands, Users };
};
