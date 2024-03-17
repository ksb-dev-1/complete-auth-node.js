const nodemailer = require("nodemailer");
const nodemailerConfig = require("./nodeMailerConfig");

const sendEmail = async ({ to, subject, html }) => {
  const transporter = nodemailer.createTransport(nodemailerConfig);

  return transporter.sendMail({
    from: '"Kedar B" <kedarb@gmail.com>',
    to,
    subject,
    html,
  });
};

module.exports = sendEmail;
