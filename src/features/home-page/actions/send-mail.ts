'use server'

import nodemailer from 'nodemailer'

export interface SendMailBody {
    service: string
    cases: string
    calculatorServices: string
    name: string
    tel: string
    email: string
    message: string
}

export const sendMail = async ({
    service,
    cases,
    calculatorServices,
    name,
    tel,
    email,
    message,
}: SendMailBody): Promise<void> => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: process.env.SMTP_SECURE !== 'false',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    })

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_RECIPIENT,
        subject: 'Заявка с лендинга',
        text: `Имя: ${name}\nТелефон: ${tel}\nEmail: ${email}\nСообщение: ${message}\n\nВыбранная услуга: ${service}\n\nВыбранные кейсы:\n${cases}\n\nВыбранные услуги в калькуляторе:\n${calculatorServices}`,
    }

    await transporter.sendMail(mailOptions)
}
