import { mailOptions, transporter } from "@/config/nodemailer";
import { NextResponse } from "next/server";

export async function POST(
  request: Request
) {
  const body = await request.json()
  const {name, phone, email, message, subject} = body;
  
  if (!name || !phone || !email || !message || !subject) {
    return NextResponse.error();
  }

  try {
    const res = await transporter.sendMail({
      ...mailOptions,
      subject,
      text: "",
      html: "<h1>"+subject+"</h1><p>Nama : "+name+"</p><p>Nomor Telepon : "+phone+"</p><p>Email : "+email+"</p><p> Pesan : "+message+"</p>",
    });
    return NextResponse.json(res)
  } catch (error) {
    console.log(error)
    return NextResponse.error();
  }
}