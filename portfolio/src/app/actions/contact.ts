"use server";

import sgMail from "@sendgrid/mail";

// Initialize SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function handleContact(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "All fields are required." };
  }

  // Construct the email message
  const msg = {
    to: "contact@khairislama.com",
    from: "contact@khairislama.com",
    replyTo: email, // The user's email entered in the contact form
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `
      <p><strong>Name:</strong> ${name}</p><br/>
      <p><strong>Email:</strong> ${email}</p><br/>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    return { success: true, name };
  } catch (error) {
    console.error("SendGrid Error:", error);
    return { success: false, error: "Failed to send email." };
  }
}
