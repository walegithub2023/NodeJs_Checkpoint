// email-sender.js
const nodemailer = require("nodemailer");

// Create a transporter using your email service details
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "",
    pass: "",
  },
});

// Define the email options
const mailOptions = {
  from: "",
  to: "",
  subject: "Test Email",
  text: "This is a test email from Node.js",
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
