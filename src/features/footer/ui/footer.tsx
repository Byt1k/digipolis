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
                <div>
                    <Link href="/" className={s.logo}>
                        <Image
                            src="/logo.svg"
                            alt="Digipolis"
                            width={250}
                            height={53}
                        />
                    </Link>
                    <p className="mt-5">ООО &#34;ДИДЖИПОЛИС&#34; - работаем по всему миру</p>
                </div>

                <div>
                    <p className={s.address}>
                        Юридический адрес: <br/>г. Раменское, ул. Москворецкая, д.1Б, офис 2 <br/>(встречи по
                        предварительной записи)
                    </p>

                    <p></p>

                    <div className={s.requisites}>
                        <p>ИНН/КПП: 5040194369/504001001</p>
                        <p>ОГРН: 1255000001145</p>
                    </div>
                </div>

                <div>
                    <div className={s.contact}>
                        <a href="tel:+79060110234">+7 (906) 011 0234</a>
                        {/*<span>Ежедневно с 9:00 до 20:00</span>*/}
                    </div>
                    <div className={s.contact}>
                        <a href="mailto:digipolis.lab@gmail.com">digipolis.lab@gmail.com</a>
                    </div>
                </div>
            </Container>

            <Container className={classNames(s.grid, s.bottom)}>
                <p>© DIGIPOLIS 2025</p>
                <a
                    href="https://digipolis.tech/c/doc/DigiPolis_Privacy_Policy.pdf"
                    target="_blank"
                    rel="noreferrer"
                >
                    Политика конфиденциальности и обработки персональных данных
                </a>
            </Container>
        </footer>
    )
}
