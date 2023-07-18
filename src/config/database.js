module.exports = {
    username: process.env.NAME,
    dialect: process.env.DIALECT,
    host: process.env.HOST,
    database: process.env.DATABASE,
    define: {
        timestamps: true,
    },

    JWT_KEY: process.env.JWT_KEY
    // JWT_KEY: 'SDSAUDSADUYDG'
};

//     dialect: 'mysql',
//     host: 'localhost',
//     username: 'root',
//     password: '',
//     database: 'trocavidro',
//     define: {
//         timestamps: true,
//     },

//     JWT_KEY: 'SDSAUDSADUYDG'
// };