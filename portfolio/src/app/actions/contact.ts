"use server";

import nodemailer from "nodemailer";

export async function handleContact(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "All fields are required." };
  }

  // Configure Nodemailer
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // Use your email provider's SMTP server (e.g., smtp.gmail.com, smtp.office365.com)
    port: Number(process.env.SMTP_PORT), // Common SMTP port
    secure: true, // Use TLS (false for 587, true for 465)
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Construct the email message
  const mailOptions = {
    from: "contact@khairislama.com", // Your email (sender)
    to: "contact@khairislama.com", // Your email (receiver)
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `
      <p><strong>Name:</strong> ${name}</p><br/>
      <p><strong>Email:</strong> ${email}</p><br/>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, name };
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return { success: false, error: "Failed to send email." };
  }
}
