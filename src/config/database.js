module.exports = {
    username: process.env.DB_USER,
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    define: {
        timestamps: true,
    },
    JWT_KEY: process.env.JWT_KEY
};



