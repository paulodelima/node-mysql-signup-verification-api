module.exports = {
    development: {
        database: {
            host: 'localhost',
            port: 3306,
            user: 'soulplusdb',
            password: '@SoulPlus4589@',
            database: 'soulplus'
        },
        secret: '1C3C7E1694F1E9DAD939399E87E5FFB5DF06B2327CA31B409CB3'
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        },
        secret: process.env.JWT_SECRET
    }
};