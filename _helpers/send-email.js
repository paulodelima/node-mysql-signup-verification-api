const nodemailer = require('nodemailer');

const environment = process.env.ENV || 'development';
const config = require('../config/config')[environment];

//const config = require('config.json');

module.exports = sendEmail;

async function sendEmail({ to, subject, html, from = config.emailFrom }) {
    console.log('Envio de email');
    const transporter = nodemailer.createTransport(config.smtpOptions);
    await transporter.sendMail({ from, to, subject, html });
}