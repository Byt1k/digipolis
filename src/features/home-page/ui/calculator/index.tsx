'use client'

import React, { useEffect, useState } from 'react'
import { Button, calculatorServices, Container } from '@/shared'
import s from './index.module.scss'
import { Element, scroller } from 'react-scroll'
import classNames from 'classnames'
import { Checkbox } from '@/shared/ui/checkbox'
import {
    changeCalcServices,
    useAppDispatch,
    useAppSelector,
} from '@/shared/client'

export const Calculator: React.FC = () => {
    const dispatch = useAppDispatch()
    const { calculatorServices: selectedServices } = useAppSelector(
        state => state.homePage,
    )
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const res = selectedServices.reduce((acc, { price }) => acc + price, 0)
        setTotal(res)
    }, [selectedServices])

    return (
        <Element name="calculator" className={s.calculator}>
            <Container>
                <h2>Калькулятор</h2>
                <div className={s.grid}>
                    <div className={s.list}>
                        <h4>Выберите услуги</h4>
                        {calculatorServices.map(service => (
                            <div key={service.name} className={s.item}>
                                <Checkbox
                                    checked={selectedServices.some(
                                        s => s.name === service.name,
                                    )}
                                    onChange={() =>
                                        dispatch(changeCalcServices(service))
                                    }
                                    className={s.checkbox}
                                />
                                <p className={s.title}>{service.name}</p>
                                <p
                                    className={s.price}
                                >{`от ${service.price.toLocaleString()} ₽`}</p>
                            </div>
                        ))}
                    </div>
                    <div
                        className={classNames(s.total, { [s.active]: !!total })}
                    >
                        <div>
                            <span>Итого</span>
                            <p
                                className={classNames({
                                    'opacity-0 pointer-events-none': !total,
                                })}
                            >
                                от {total} ₽
                            </p>
                        </div>
                        <Button
                            className={s.btn}
                            disabled={!total}
                            onClick={() =>
                                scroller.scrollTo('form', { smooth: true })
                            }
                        >
                            Оставить заявку
                        </Button>
                    </div>
                    <div
                        className={s.image}
                        style={{
                            backgroundImage: 'url(/home-page/calculator.png)',
                        }}
                    />
                </div>
            </Container>
        </Element>
    )
}
