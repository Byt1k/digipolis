import React from 'react'
import type { Metadata } from 'next'
import './globals.scss'
import { montserrat, phonk_sans } from '@/fonts'
import StoreProvider from '@/app/store-provider'
import { ToastContainer } from 'react-toastify'

export const metadata: Metadata = {
    title: 'Создание сайтов под ключ | DIGIPOLIS - профессиональная веб студия',
    description: 'Закажите разработку веб сайтов и программ у профессионалов. Мы создадим сайт, который привлечет клиентов, и предложим комплексные решения — от уникальной идеи до полноценной поддержки!',
    keywords: [
        'создание сайтов',
        'создания веб сайта',
        'заказать создание сайта',
        'сделать сайт',
        'разработка сайтов',
        'веб разработка',
        'разработка веб сайтов',
        'web разработка',
        'студия веб разработки',
        'веб студия',
        'студия веб дизайна',
        'студия веб разработки',
        'разработка по',
        'разработка программ',
        'лаборатория сайтов',
        'веб лаборатория',
    ],
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${montserrat.variable} ${phonk_sans.variable} antialiased`}
            >
                <ToastContainer position="top-right" />
                <StoreProvider>{children}</StoreProvider>
            </body>
        </html>
    )
}
