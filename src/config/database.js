module.exports = {
    username: 'easycaixa',
    dialect: 'mysql',
    // dialect: process.env.DB_DIALECT,
    host: '54.233.123.29',
    password: 'Lucasbg1!',
    database: 'trocavidro',
    port: 3306,
    define: {
        timestamps: true,
    },

    JWT_KEY: process.env.JWT_KEY
};

