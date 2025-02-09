'use client'

import React from 'react'
import { Button, Container } from '@/shared'
import s from './index.module.scss'
import Image from 'next/image'
import { scroller } from 'react-scroll'
import classNames from 'classnames'

export const MainScreen: React.FC = () => {
    const isMainScreenDark = process.env.NEXT_PUBLIC_MAIN_SCREEN === 'dark'

    return (
        <section
            className={classNames(s.main, { [s.darkScreen]: isMainScreenDark })}
        >
            <Container className={s.container}>
                <div className={s.offer}>
                    <h1>
                        Продвинутые технологии для <span>вашего бизнеса</span>
                    </h1>
                    <p>
                        Более 20 лет мы оттачивали мастерство в создании сайтов
                        и IT-систем, опираясь на реальный бизнес-опыт. Мы готовы
                        помочь вам получить высококлассный продукт, экономя ваше
                        время и ресурсы
                    </p>
                    <Button
                        className={s.btn}
                        onClick={() =>
                            scroller.scrollTo('form', { smooth: true })
                        }
                    >
                        Получить бесплатную консультацию
                    </Button>
                </div>
                <Image
                    src="/home-page/main-img-1.svg"
                    className={s.main__illustration}
                    alt="main"
                    width={690}
                    height={5210}
                />
            </Container>
        </section>
    )
}
