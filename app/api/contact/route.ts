import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email } = await req.json();

        if (!name || !email) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: `"CRINE System" <${process.env.SENDER_EMAIL}>`,
            to: email, // Send to the user who signed up
            subject: `Welcome to the Protocol, ${name}`,
            text: `Welcome to CRINE, ${name}. You have been added to the waitlist. We will notify you when access is granted.`,
            html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&display=swap');
            body { margin: 0; padding: 0; background-color: #050505; font-family: 'Syne', sans-serif; color: #FFFDF7; }
            .container { max-width: 600px; margin: 0 auto; background-color: #111111; border: 3px solid #333; overflow: hidden; }
            .header { background-color: #000; padding: 40px 20px; text-align: center; border-bottom: 3px solid #D4F600; }
            .logo { font-size: 32px; font-weight: 900; letter-spacing: -1px; color: #FFFDF7; text-decoration: none; }
            .logo span { color: #D4F600; }
            .content { padding: 40px 30px; text-align: center; }
            .badge { display: inline-block; background-color: #333; color: #D4F600; padding: 4px 12px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 20px; border: 1px solid #D4F600; }
            h1 { font-size: 36px; line-height: 1.1; margin: 0 0 20px 0; font-weight: 800; color: #FFFDF7; }
            p { font-size: 16px; line-height: 1.6; color: #888; margin-bottom: 30px; }
            .btn { display: inline-block; background-color: #D4F600; color: #000000; padding: 16px 32px; font-weight: 800; text-decoration: none; text-transform: uppercase; letter-spacing: 1px; border: 3px solid #000; box-shadow: 4px 4px 0 #000; }
            .footer { background-color: #000; padding: 20px; text-align: center; font-size: 12px; color: #555; border-top: 1px solid #222; }
            .footer a { color: #555; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">
                CRINE<span>.</span>
              </div>
            </div>
            <div class="content">
              <div class="badge">Access Pending</div>
              <h1>PROTOCOL<br>INITIATED</h1>
              <p>
                Agent <strong>${name}</strong>,<br><br>
                Your request for access has been logged in our secure database. You are now officially on the waitlist for CRINE's elite cybersecurity infrastructure.
              </p>
              <p>
                We process applications in batches to ensure maximum network integrity. You will receive a secure transmission once your clearance is approved.
              </p>
              <br>
              <a href="https://crine.in" class="btn">Return to Base</a>
            </div>
            <div class="footer">
              &copy; 2026 CRINE. All Rights Reserved.<br>
              Critical Response & Infrastructure Network Enforcement.
            </div>
          </div>
        </body>
        </html>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Waitlist confirmation sent' });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send confirmation email' },
            { status: 500 }
        );
    }
}
