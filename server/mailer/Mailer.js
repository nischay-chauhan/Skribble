import nodemailer from 'nodemailer';


const sendResetEmail = ({ to, resetLink }) => {
    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "f7d63e706dd814",
          pass: "a5d8ed6e22ff56"
        },
        secure: false,
        requireTLS: true,
      });
      
  const mailOptions = {
    from: "JWt3z@example.com",
    to : to,
    subject: 'Password Reset Link',
    text: `Click the link to reset your password: ${resetLink}`,
  };

  transport.sendMail(mailOptions);
};

export { sendResetEmail };
