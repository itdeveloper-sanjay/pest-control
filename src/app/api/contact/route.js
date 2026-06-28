import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { siteData } from '@/config/siteData';
import connectToDatabase from '@/lib/mongoose';
import Contact from '@/models/Contact';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    try {
      await connectToDatabase();
      await Contact.create({ name, email, phone, message });
    } catch (dbError) {
      console.error('Database Error:', dbError);
      // Even if DB fails, we can optionally proceed to send the email, 
      // but returning an error might be safer if DB storage is mandatory.
      // return NextResponse.json({ error: 'Failed to save to database' }, { status: 500 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Professionalz PMS <onboarding@resend.dev>',
      to: ['sanjay@prpwebs.in'],
      reply_to: email,
      subject: `New Lead from ${name} - Website Contact Form`,
      html: `
        <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto; border: 1px solid #eaeaea; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #2E7D32; padding: 20px; text-align: center; color: white;">
            <h2 style="margin: 0;">New Lead Received!</h2>
          </div>
          <div style="padding: 20px; background-color: #f9f9f9;">
            <p style="margin-bottom: 10px;"><strong>Name:</strong> ${name}</p>
            <p style="margin-bottom: 10px;"><strong>Email:</strong> ${email}</p>
            <p style="margin-bottom: 10px;"><strong>Phone:</strong> ${phone}</p>
            <div style="margin-top: 20px; padding: 15px; background-color: white; border-radius: 6px; border: 1px solid #eaeaea;">
              <p style="margin-top: 0; color: #666; font-size: 14px; text-transform: uppercase;">Message</p>
              <p style="margin-bottom: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
