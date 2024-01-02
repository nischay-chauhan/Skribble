import nodemailer from 'nodemailer';


const sendResetEmail = ({ to, resetLink }) => {
    // var transport = nodemailer.createTransport({
    //     host: "sandbox.smtp.mailtrap.io",
    //     port: 2525,
    //     auth: {
    //       user: "f7d63e7",
    //       pass: "a52ff56"
    //     },
    //     secure: false,
    //     requireTLS: true,
    //   });
      const transport = nodemailer.createTransport({
        service : "Gmail",
        host : "smtp.gmail.com",
        port : 465,
        secure : true,
        auth : {
          user : process.env.SMTP_USER,
          pass : process.env.SMTP_PASS
        }
      })
  const mailOptions = {
    from: "nischay228074@gmail.com",
    to : to,
    subject: 'Password Reset Link',
    text: `Click the link to reset your password: ${resetLink}`,
  };

  transport.sendMail(mailOptions);
};

export { sendResetEmail };
