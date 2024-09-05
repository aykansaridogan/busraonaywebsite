const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const cors = require('cors');


app.use(cors());

// Body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (e.g., your HTML file)
app.use(express.static('public'));

// Handle form submission and send email
app.post('/send-email', (req, res) => {
    const { name, phone, email, message } = req.body;

    // Create a transporter object using your SMTP service (e.g., Gmail)
    let transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: 587,
        secure: false, // TLS kullanımı için false
        auth: {
            user: 'magiclinedeneme@hotmail.com',
            pass: 'A.s.4345@@'
        }
    });
    

    // Email options
    let mailOptions = {
        from: 'magiclinedeneme@hotmail.com', // Bu adres senin kimlik bilgilerinle eşleşmeli
        to: 'aykansaridogan@hotmail.com',
        subject: `Contact Form Message from ${name}`,
        text: `You have received a new message:\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`
    };
    

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
