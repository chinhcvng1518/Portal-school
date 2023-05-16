const sendEmail = require('./sendEmail')

const sendQuestion = async ({name, email, token, origin}) => {

    return sendEmail({
        to: email,
        subject: 'Reset Password',
        html: `<h3>Hello, ${name}</h3>
              ${msg}`,
      })
}

module.exports =sendQuestion