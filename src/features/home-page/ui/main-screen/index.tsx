import React from 'react'
import { Button, Container } from '@/shared'
import s from './index.module.scss'
import Image from 'next/image'

export const MainScreen: React.FC = () => {
    return (
        <section className={s.main}>
            <Container className={s.container}>
                <div className={s.offer}>
                    <h1>Продвинутые технологии для вашего бизнеса</h1>
                    <p>
                        Более 20 лет мы оттачивали мастерство в создании сайтов
                        и IT-систем, опираясь на реальный бизнес-опыт. Мы готовы
                        помочь вам получить высококлассный продукт, экономя ваше
                        время и ресурсы
                    </p>
                    <Button className={s.btn}>
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
