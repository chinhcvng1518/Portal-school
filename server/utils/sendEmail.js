const nodemailer = require('nodemailer')
const nodeMailerConfig = require('./nodeMailerConfig')
// const sgMail = require('@sendgrid/mail')

const sendEmail = async ({ to, subject, html }) => {
  let testAccount = await nodemailer.createTestAccount()

  const transporter = nodemailer.createTransport(nodeMailerConfig)

  return transporter.sendMail({
    from: process.env.EMAIL_USERNAME,
    to,
    subject,
    html,
  })
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  // const options = {
  //   to: to, // Change to your recipient
  //   from: process.env.EMAIL_USERNAME, // Change to your verified sender
  //   subject: subject,
  //   html: html,
  // }
  // return transporter.sendEmail(options)
}

module.exports = sendEmail
