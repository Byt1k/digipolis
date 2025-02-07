'use client'

import React from 'react'
import { Container } from '@/shared'
import s from './index.module.scss'
import { Element } from 'react-scroll'
import Image from 'next/image'

export const Advantages: React.FC = () => {
    return (
        <Element name="advantages" className={s.advantages}>
            <Container>
                <div className={s.title}>
                    <div>
                        <span>преимущества</span>
                        <h2>
                            Цели и ценности <br />
                            компании
                        </h2>
                    </div>
                    <p>
                        Оказываем профессиональные консультации, направленные на
                        достижение наилучших результатов для наших клиентов.
                    </p>
                </div>
                <div className={s.wrapper}>
                    <div className={s.item}>
                        <div className={s.icon}>
                            <Image
                                src="/home-page/advantages-icon-1.svg"
                                alt="icon"
                                width={50}
                                height={50}
                            />
                        </div>
                        <div>
                            <h4>Индивидуальный подход</h4>
                            <p>
                                Внимательно выслушиваем каждого клиента и
                                находим уникальные решения его задач.
                            </p>
                        </div>
                    </div>
                    <div className={s.item}>
                        <div className={s.icon}>
                            <Image
                                src="/home-page/advantages-icon-2.svg"
                                alt="icon"
                                width={50}
                                height={50}
                            />
                        </div>
                        <div>
                            <h4>Гибкость и адаптация</h4>
                            <p>
                                Готовы к изменениям и быстро адаптируется к
                                новым запросам рынка и клиентов.
                            </p>
                        </div>
                    </div>
                    <div className={s.item}>
                        <div className={s.icon}>
                            <Image
                                src="/home-page/advantages-icon-3.svg"
                                alt="icon"
                                width={50}
                                height={50}
                            />
                        </div>
                        <div>
                            <h4>Прозрачность и честность</h4>
                            <p>
                                являются основой нашего взаимодействия. Наша
                                политика честного подхода включает в себя
                                прозрачное формирование цен и открытое общение,
                                что обеспечивает доверие и долгосрочные
                                отношения.
                            </p>
                        </div>
                    </div>
                    <div className={s.item}>
                        <div className={s.icon}>
                            <Image
                                src="/home-page/advantages-icon-4.svg"
                                alt="icon"
                                width={50}
                                height={50}
                            />
                        </div>
                        <div>
                            <h4>Профессиональные консультации</h4>
                            <p>
                                Оказываем профессиональные консультации,
                                направленные на достижение наилучших результатов
                                для наших клиентов.
                            </p>
                        </div>
                    </div>
                    <div className={s.item}>
                        <div className={s.icon}>
                            <Image
                                src="/home-page/advantages-icon-5.svg"
                                alt="icon"
                                width={50}
                                height={50}
                            />
                        </div>
                        <div>
                            <h4>Приносим пользу</h4>
                            <p>
                                Производим продукцию, которой можно гордиться и
                                которая приносит настоящую пользу нашим
                                клиентам.
                            </p>
                        </div>
                    </div>
                    <div className={s.item}>
                        <div className={s.icon}>
                            <Image
                                src="/home-page/advantages-icon-6.svg"
                                alt="icon"
                                width={50}
                                height={50}
                            />
                        </div>
                        <div>
                            <h4>Гарантия высокого качества</h4>
                            <p>
                                Гарантируем высокое качество каждой услуги и
                                продукта, поставляемого нашей компанией, с
                                акцентом на долговечность и надежность.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </Element>
    )
}
