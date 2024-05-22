import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");


export async function POST(request: { json: () => any; }) {
    const formData = await request.json();
    const name = formData.name;
    const phone = formData.phone;
    const email = formData.email;
    const destination = formData.destination;
    const date = formData.date;

    console.log("this is the form Data", formData);

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        tls: {
            rejectUnauthorized: true,
            minVersion: "TLSv1.2",
        },

        auth: {
            user: 'sreetejadusi.dev@gmail.com',
            pass: 'Sree@2005',
        },
    });

    try {
        const mail = await transporter.sendMail({
            from: 'sreetejadusi.dev@gmail.com',
            to: 'sreetejadusi@gmail.com',
            replyTo: 'sreetejadusi.dev@gmail.com',
            subject: `Website activity`,
            html: `
        <p>Name: ${name} </p>
        <p>Phone: ${phone} </p>
        <p>Email: ${email} </p>
        <p>Destination: ${destination} </p>
        <p>Date: ${date} </p>
        `,
        });

        return NextResponse.json({ message: "Success: email was sent" });
    } catch (error) {
        console.log(error);
        // NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" });
    }
}