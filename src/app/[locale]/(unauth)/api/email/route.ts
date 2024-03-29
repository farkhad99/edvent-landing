import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import type Mail from 'nodemailer/lib/mailer';

import { type FormData } from '@/components/modal/PartnerFormModal';

const welcomeTemplate = (name: string) => {
  return `
    Email left by ${name || ''},

    Welcome to Edvent, here is the welcome text for the user
    
    Get started https://edvent.com
    
    Best,
    The Edvent team
    
    --------------------------------------------------------------------------------
    
    264, Milliy bog street Toshkent`;
};

const ticketTemplate = (user: FormData) => {
  return `
  Request from ${user.name || ''},
    
  User info:

  Phone: ${user.phone}
`;
};

const partnerTemplate = (user: FormData) => {
  return `
    Request from ${user.name || ''} ${user.lastName || ''},
    
    User info:
    Phone: ${user.phone}
    ${user.companyName ? `Company: ${user.companyName}` : ''}
    ${user.companySector ? `Company sector: ${user.companySector}` : ''}
    ${user.website ? `Website: ${user.website}` : ''}
    ${user.message ? `Message: ${user.message}` : ''}

    --------------------------------------------------------------------------------
    
    264, Milliy bog street Toshkent`;
};

export async function POST(request: NextRequest) {
  const data = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    /* 
      setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  let subject = `Welcome ${data.email}`;
  if (data.name) subject = `New partner request ${data.name} (${data.email})`;
  if (data.ticket) subject = `New ticket request (${data.email})`;

  const text = data.name ? partnerTemplate(data) : welcomeTemplate(data.name);

  const mailOptions: Mail.Options = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    // cc: email,
    subject,
    text: data.ticket ? ticketTemplate(data) : text
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
