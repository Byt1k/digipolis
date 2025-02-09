'use client'

import React from 'react'
import { Button, Container, services } from '@/shared'
import s from './index.module.scss'
import { Element, scroller } from 'react-scroll'
import { selectService, useAppDispatch } from '@/shared/client'

export const Services: React.FC = () => {
    const dispatch = useAppDispatch()

    const onClickOrder = (serviceName: string) => {
        dispatch(selectService(serviceName))
        scroller.scrollTo('form', { smooth: true })
    }

    return (
        <Element name="services" className={s.services}>
            <Container className={s.container}>
                {services.map((column, columnIndex) => (
                    <div key={columnIndex} className={s.column}>
                        {column.map(service => (
                            <div key={service.name} className={s.sector}>
                                <div className={s.title}>
                                    <h3>{service.name}</h3>
                                    <Button
                                        variant="secondary"
                                        className={s.btn}
                                        onClick={() =>
                                            onClickOrder(service.name)
                                        }
                                    >
                                        Заказать
                                    </Button>
                                </div>
                                {service.items.map(item => (
                                    <div key={item.name} className={s.item}>
                                        <div className={s.icon}>
                                            {item.icon}
                                        </div>
                                        <p>{item.name}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ))}
            </Container>
        </Element>
    )
}
