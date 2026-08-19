import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}))
    const { name, email, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address format. Please enter a valid email address." },
        { status: 400 }
      )
    }

    const recipientEmail = "faheemali3724@gmail.com"
    const emailSubject = subject?.trim() ? subject.trim() : `New Portfolio Inquiry from ${name}`

    // Provider 1: Direct Gmail SMTP via Nodemailer
    if (
      process.env.GMAIL_USER &&
      process.env.GMAIL_APP_PASS &&
      process.env.GMAIL_APP_PASS !== "your_gmail_app_password_here" &&
      !process.env.GMAIL_APP_PASS.includes("your_")
    ) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASS,
          },
        })

        await transporter.sendMail({
          from: `"${name} (via Portfolio)" <${process.env.GMAIL_USER}>`,
          to: recipientEmail,
          replyTo: email,
          subject: `[Portfolio Inquiry] ${emailSubject}`,
          text: `Name: ${name}\nEmail: ${email}\nSubject: ${emailSubject}\n\nMessage:\n${message}`,
          html: `
            <div style="font-family: Arial, sans-serif; padding: 24px; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff;">
              <h2 style="color: #0f172a; border-bottom: 2px solid #cbd5e1; padding-bottom: 12px; margin-top: 0;">New Portfolio Contact Message</h2>
              <p style="margin: 8px 0;"><strong>Sender Name:</strong> ${name}</p>
              <p style="margin: 8px 0;"><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
              <p style="margin: 8px 0;"><strong>Subject:</strong> ${emailSubject}</p>
              <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-left: 4px solid #0f172a; border-radius: 8px;">
                <p style="white-space: pre-wrap; margin: 0; font-size: 14px; line-height: 1.6; color: #334155;">${message}</p>
              </div>
              <footer style="margin-top: 30px; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 12px;">
                Sent automatically via Faheem Ali's Portfolio Website.
              </footer>
            </div>
          `,
        })

        return NextResponse.json({ success: true, message: "Email sent directly to your Gmail inbox!" })
      } catch (nodemailerErr) {
        console.error("Nodemailer failed, trying next provider:", nodemailerErr)
      }
    }

    // Provider 2: Resend API
    if (process.env.RESEND_API_KEY) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "Faheem Ali Portfolio <onboarding@resend.dev>",
            to: recipientEmail,
            reply_to: email,
            subject: `[Portfolio Inquiry] ${emailSubject}`,
            html: `
              <div style="font-family: Arial, sans-serif; padding: 24px; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff;">
                <h2 style="color: #0f172a; border-bottom: 2px solid #cbd5e1; padding-bottom: 12px; margin-top: 0;">New Portfolio Contact Message</h2>
                <p style="margin: 8px 0;"><strong>Sender Name:</strong> ${name}</p>
                <p style="margin: 8px 0;"><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
                <p style="margin: 8px 0;"><strong>Subject:</strong> ${emailSubject}</p>
                <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-left: 4px solid #0f172a; border-radius: 8px;">
                  <p style="white-space: pre-wrap; margin: 0; font-size: 14px; line-height: 1.6; color: #334155;">${message}</p>
                </div>
                <footer style="margin-top: 30px; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 12px;">
                  Sent automatically via Faheem Ali's Portfolio Website.
                </footer>
              </div>
            `,
          }),
        })

        if (resendRes.ok) {
          return NextResponse.json({ success: true, message: "Email sent directly to your Gmail inbox via Resend!" })
        }
      } catch (resendErr) {
        console.error("Resend API error:", resendErr)
      }
    }

    // Provider 3: Web3Forms API
    const web3AccessKey = process.env.WEB3FORMS_ACCESS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
    if (web3AccessKey) {
      try {
        const web3res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
          },
          body: JSON.stringify({
            access_key: web3AccessKey,
            name: name,
            email: email,
            subject: `[Portfolio Inquiry] ${emailSubject}`,
            message: message,
            from_name: `${name} (Portfolio)`,
          }),
        })

        const textResp = await web3res.text()
        let web3data: any = null
        try {
          web3data = JSON.parse(textResp)
        } catch {
          console.warn("Web3Forms response was not JSON:", textResp)
        }

        if (web3res.ok && web3data?.success) {
          return NextResponse.json({ success: true, message: "Email sent directly to your Gmail inbox via Web3Forms!" })
        }

        if (web3data?.message) {
          return NextResponse.json(
            { error: web3data.message },
            { status: web3res.status || 400 }
          )
        }
      } catch (err) {
        console.error("Web3Forms error:", err)
      }
    }

    // Fallback: Return structured error advising user or direct email link
    return NextResponse.json(
      {
        error: "Email delivery service key unavailable. Please use the direct email link to send to faheemali3724@gmail.com.",
      },
      { status: 503 }
    )
  } catch (error) {
    console.error("Error sending contact email:", error)
    return NextResponse.json({ error: "Failed to process message." }, { status: 500 })
  }
}

