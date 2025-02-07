'use client'

import React from 'react'
import { Button, Container, services } from '@/shared'
import s from './index.module.scss'
import { Element, Link } from 'react-scroll'

export const Services: React.FC = () => {
    return (
        <Element name="services" className={s.services}>
            <Container className={s.container}>
                <div className={s.column}>
                    <div className={s.sector}>
                        <div className={s.title}>
                            <h3>Разработка сайтов</h3>
                            <Button variant="secondary" className={s.btn}>
                                <Link to="form" smooth>
                                    Заказать
                                </Link>
                            </Button>
                        </div>
                        {services.webSites.map(service => (
                            <div key={service.name} className={s.item}>
                                <div className={s.icon}>{service.icon}</div>
                                <p>{service.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className={s.sector}>
                        <div className={s.title}>
                            <h3>Дизайн и брендинг</h3>
                            <Button variant="secondary" className={s.btn}>
                                <Link to="form" smooth>
                                    Заказать
                                </Link>
                            </Button>
                        </div>
                        {services.design.map(service => (
                            <div key={service.name} className={s.item}>
                                <div className={s.icon}>{service.icon}</div>
                                <p>{service.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={s.column}>
                    <div className={s.sector}>
                        <div className={s.title}>
                            <h3>Инфраструктура</h3>
                            <Button variant="secondary" className={s.btn}>
                                <Link to="form" smooth>
                                    Заказать
                                </Link>
                            </Button>
                        </div>
                        {services.infrastructure.map(service => (
                            <div key={service.name} className={s.item}>
                                <div className={s.icon}>{service.icon}</div>
                                <p>{service.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className={s.sector}>
                        <div className={s.title}>
                            <h3>
                                Поддержка <br />и обслуживание
                            </h3>
                            <Button variant="secondary" className={s.btn}>
                                <Link to="form" smooth>
                                    Заказать
                                </Link>
                            </Button>
                        </div>
                        {services.support.map(service => (
                            <div key={service.name} className={s.item}>
                                <div className={s.icon}>{service.icon}</div>
                                <p>{service.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </Element>
    )
}
