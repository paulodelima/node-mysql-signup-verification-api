module.exports = {
    development: {
        database: {
            host: 'localhost',
            port: 3306,
            user: 'soulplusdb',
            password: '@SoulPlus4589@',
            database: 'testeToken'
        },
        secret: 'SOULPLUS-2021@3719#',
        emailFrom: 'Soul Plus Teste',
        smtpOptions: {
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'jaylen34@ethereal.email',
                pass: 'wQrX8gzBc88MGhuePv'
            }
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        },
        secret: process.env.JWT_SECRET,
        emailFrom: process.env.EMAIL_FROM,
        smtpOptions: {
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        }
    }
};