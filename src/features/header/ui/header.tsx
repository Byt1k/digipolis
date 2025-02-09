'use client'

import React, { useEffect, useState } from 'react'
import { BurgerBtn, Button, Container, svgIcons } from '@/shared'
import Link from 'next/link'
import { scroller } from 'react-scroll'
import Image from 'next/image'
import Menu from './menu'
import { SocialMedia } from './social-media'
import s from './header.module.scss'
import classNames from 'classnames'

export const Header: React.FC = () => {
    const [isOpenedMobileMenu, setIsOpenedMobileMenu] = useState(false)

    useEffect(() => {
        if (isOpenedMobileMenu) {
            document.body.classList.add('overflow-hidden')
        } else {
            document.body.classList.remove('overflow-hidden')
        }
    }, [isOpenedMobileMenu])

    return (
        <header className={s.header}>
            <div className={s.top}>
                <Container className={s.topContainer}>
                    <a href="tel:+78122191009">+7 (812) 219 10 09</a>
                    <a href="mailto:digi@polis.com">digi@polis.com</a>
                </Container>
            </div>
            <Container className={s.bottomContainer}>
                <BurgerBtn
                    opened={isOpenedMobileMenu}
                    onClick={() => setIsOpenedMobileMenu(prev => !prev)}
                    className={s.burgerBtn}
                />
                <Link href="/" className={s.logo}>
                    <Image
                        src="/logo.svg"
                        alt="Digipolis"
                        width={250}
                        height={53}
                    />
                </Link>
                <Menu className={s.topMenu} />
                <div className={s.actions}>
                    <SocialMedia className={s.media} />
                    <Button
                        className={s.mailBtn}
                        onClick={() =>
                            scroller.scrollTo('form', { smooth: true })
                        }
                    >
                        <span>Написать нам</span>
                        {svgIcons.button.comment}
                    </Button>
                </div>
            </Container>

            {/* Мобильное меню */}
            <div
                className={classNames(s.mobileMenu, {
                    [s.opened]: isOpenedMobileMenu,
                })}
            >
                <Container className="flex flex-col grow">
                    <Menu
                        className={s.mobileMenuList}
                        onClickLink={() => setIsOpenedMobileMenu(false)}
                    />
                    <div className={s.contacts}>
                        <div>
                            <a href="tel:+79999199009">+7 (999) 919-90-09</a>
                            <span>Ежедневно с 9:00 до 20:00</span>
                        </div>
                        <div>
                            <a href="mailto:digi@polis.com">digi@polis.com</a>
                        </div>
                    </div>
                    <SocialMedia />
                </Container>
            </div>
        </header>
    )
}
