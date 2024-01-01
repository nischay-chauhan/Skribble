import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    service:'gmail',
    auth : {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    },
});

const sendResetEmail = ({ to, resetLink }) => {
    const mailOptions = {
        from: `Scribble <${process.env.SMTP_USER}>`,
        to,
        subject: 'Password Reset Link',
        text: `Click the link to reset your password: ${resetLink}`
    };

    return transport.sendMail(mailOptions);
};


export {sendResetEmail};