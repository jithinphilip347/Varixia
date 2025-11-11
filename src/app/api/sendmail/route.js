import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();
  const { name, email, phone, subject, message } = body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Enquiry From Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Send to your inbox
      subject: `New Enquiry: ${subject || "No Subject"}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service Interested:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.log("Email send error:", error);
    return Response.json({ success: false, error });
  }
}
