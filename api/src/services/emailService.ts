import nodemailer from "nodemailer";

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  // Configure your email service provider here
  service: "Gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-password",
  },
});

// Send email verification link
const sendVerificationEmail = async (toEmail: string, token: string) => {
  // Compose the email
  const mailOptions = {
    from: "your-email@gmail.com",
    to: toEmail,
    subject: "Email Verification",
    html: `
      <p>Click the link below to verify your email:</p>
      <a href="http://your-app-url/api/auth/email-verification/verify/${token}">Verify Email</a>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Verification email sent");
  } catch (error) {
    console.error("Email sending failed:", error);
  }
};

export default sendVerificationEmail;
