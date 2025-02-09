'use client'

import s from './index.module.scss'
import { Button } from '@/shared'
import React, { useState } from 'react'
import { setCookieAction } from '@/shared'

export const CookieConsent: React.FC<{ consent: boolean }> = ({ consent }) => {
    const [visible, setVisible] = useState(!consent)

    if (visible) {
        return (
            <div className={s.wrapper}>
                <p>Мы используем файлы cookie для улучшения работы нашего сайта и персонализации вашего опыта. Продолжая использование сайта, вы соглашаетесь с использованием файлов cookie.</p>
                <Button
                    variant="secondary"
                    onClick={async () => {
                        await setCookieAction('digipolis_cookie_consent', 'true')
                        setVisible(false)
                    }}
                >
                    Понятно
                </Button>
            </div>
        )
    }

    return null
}