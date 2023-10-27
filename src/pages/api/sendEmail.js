// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { name, phoneNumber, email, message } = req.body;

      // Create a Nodemailer transporter to send the email from 'aravth@gmail.com'
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'ieact23@gmail.com',
          pass: 'anaya2019', // Replace with the password for 'aravth@gmail.com'
        },
      });

      // Define the email data
      const mailData = {
        from: 'ieact23@gmail.com',
        to: 'aravinthrajk96@gmail.com',
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nPhone Number: ${phoneNumber}\nEmail: ${email}\nMessage: ${message}`,
      };

      // Send the email
      await transporter.sendMail(mailData);

      res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};
