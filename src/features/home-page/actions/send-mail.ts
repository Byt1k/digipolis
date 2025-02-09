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
        // @ts-ignore
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: Boolean(process.env.SMTP_SECURE),
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
