import React from 'react'
import s from './footer.module.scss'
import { Container } from '@/shared'
import Link from 'next/link'
import classNames from 'classnames'
import Image from 'next/image'

export const Footer: React.FC = () => {
    return (
        <footer className={s.footer}>
            <Container className={classNames(s.grid, s.top)}>
                <Link href="/" className={s.logo}>
                    <Image
                        src="/logo.svg"
                        alt="Digipolis"
                        width={250}
                        height={53}
                    />
                </Link>

                <div>
                    <p className={s.address}>
                        192019, г. Санкт-Петербург, ул. набережная Обводного
                        канала, д. 28 ст. 1 офис 56
                    </p>

                    <div className={s.requisites}>
                        <p>ИНН 43443443423</p>
                        <p>ОГРН 4344344342332</p>
                    </div>
                </div>

                <div>
                    <div className={s.contact}>
                        <a href="tel:+79999199009">+7 (999) 919-90-09</a>
                        <span>Ежедневно с 9:00 до 20:00</span>
                    </div>
                    <div className={s.contact}>
                        <a href="mailto:digi@polis.com">digi@polis.com</a>
                    </div>
                </div>
            </Container>

            <Container className={classNames(s.grid, s.bottom)}>
                <p>© DIGIPOLIS 2025</p>
                <a href="#">Политика обработки персональных данных</a>
                <a href="#">Политика конфиденциальности</a>
            </Container>
        </footer>
    )
}
