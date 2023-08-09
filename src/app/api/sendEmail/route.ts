// api/sendEmail.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export  async function POST(request:Request) {
  const body = await request.json() // res now contains body


  const { name, email, message } = body;
  console.log("body==>",body)

  // Validate the data (you can add more validation if needed)
  if (name=='' || email=='' || message=='') {
    console.log("i am under water",body)
    return NextResponse.json({status:400 , error: 'Name, email, and message are required' });
  }

  try {
    // Use environment variables for SMTP configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.NODEMAILER_PW,
      },
    });
    const html = `
      <html>

      
        <body>
        <div className="flex justify-center bg-slate-400 items-center">
         <tr>
            <th style="border: 1px solid black; padding: 8px; background-color: #f2f2f2;">Name</th>
            <th style="border: 1px solid black; padding: 8px; background-color: #f2f2f2;" >Email</th>
            <th style="border: 1px solid black; padding: 8px; background-color: #f2f2f2;" >Message</th>
          </tr>
          <tr>
            <td style="border: 1px solid black; padding: 8px;" >${name}</td>
            <td  style="border: 1px solid black; padding: 8px;">${email}</td>
            <td  style="border: 1px solid black; padding: 8px;" >${message}</td>
          </tr>
        </div>
          
        </body>
      </html>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_USER, // Your email address
      to: email, // The email address where you want to receive the contact form data
      subject: 'New Contact Form Submission',
      // text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: html,
    });

    return NextResponse.json({ status:200 , message: 'Email sent successfully' });
  } catch (error) {
    return NextResponse.json({status:500, error: 'Something went wrong, please try again later' });
  }
}
