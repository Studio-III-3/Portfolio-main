import nodemailer from "nodemailer";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    // Validate request data
    const data = await req.json();
    const { name, email, message } = data;
    
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Missing required fields. Please provide name, email, and message." 
        }), 
        { status: 400 }
      );
    }

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "abkbhi13@gmail.com",
        pass: "udgf jmzb psct vakb",
      },
    });

    // Send email with proper formatting
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <abkbhi13@gmail.com>`,
      replyTo: email,
      to: "abkbhi13@gmail.com",
      subject: `New Contact Form Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `,
    });

    return new Response(JSON.stringify({ 
      success: true,
      message: "Your message has been sent. We'll contact you soon!"
    }), { status: 200 });
    
  } catch (error) {
    console.error("Email sending error:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: "There was a problem sending your message. Please try again later." 
      }), 
      { status: 500 }
    );
  }
}
