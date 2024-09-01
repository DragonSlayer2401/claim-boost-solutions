import nodemailer from 'nodemailer';

export default async function sendEmail(from, subject, text, attachments) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT, 10), // Parse the port as a base 10 integer
    secure: process.env.EMAIL_SECURE === 'true', // Parse the secure option as a boolean
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from,
    to: process.env.EMAIL_USER,
    subject,
    text,
    attachments,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    throw new Error(`Failed to send email: ${error.message}`);
  }
}
