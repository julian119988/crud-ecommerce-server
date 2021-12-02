module.exports = {
    HOST:
        process.NODE_ENV === "production"
            ? process.env.DB_HOST
            : process.env.DB_HOST_LOCAL,

    USER:
        process.NODE_ENV === "production"
            ? process.env.DB_USER
            : process.env.DB_USER_LOCAL,

    PASSWORD:
        process.NODE_ENV === "production"
            ? process.env.DB_PASS
            : process.env.DB_PASS_LOCAL,

    DB:
        process.NODE_ENV === "production"
            ? process.env.DB_NAME
            : process.env.DB_NAME_LOCAL,

    dialect: "mysql",

    pool: {
        max: 5,

        min: 0,

        acquire: 30000,

        idle: 10000,
    },
};
