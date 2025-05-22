import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();
  const { firstname, lastname, email, phone, service, message } = body;

  try {
    await resend.emails.send({
      from: 'Nahom Portfolio <onboarding@resend.dev>', // or your verified domain
      to: 'nahomgebre73@gmail.com',
      subject: `📩 New Contact from ${firstname} ${lastname}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>New Contact Submission</h2>
          <p><strong>Name:</strong> ${firstname} ${lastname}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Message:</strong><br>${message}</p>
          <hr />
          <p style="font-size: 12px; color: gray;">This message was sent via your portfolio website.</p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
