import nodemailer from "nodemailer";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const { name, email, message }: ContactForm = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "habeshabytes@gmail.com",
        pass: process.env.GMAIL_APP_PASSWORD, // from .env.local
      },
    });

    await transporter.sendMail({
      from: email,
      to: "habeshabytes@gmail.com",
      subject: `New message from ${name}`,
      text: message,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email sending error:", error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
