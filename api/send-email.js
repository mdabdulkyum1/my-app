const nodemailer = require('nodemailer');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        // Set up transporter
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL, // Your email address
                pass: process.env.EMAIL_PASSWORD, // Your email password
            },
        });

        // Set up email data
        let mailOptions = {
            from: email,
            to: process.env.EMAIL, // Your email address
            subject: `Message from ${name}`,
            text: message,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error sending email', error });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
