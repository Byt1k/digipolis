'use client'

import React, { useEffect, useState } from 'react'
import { Button, cases, Container, svgIcons } from '@/shared'
import s from './index.module.scss'
import { Element, scroller } from 'react-scroll'
import classNames from 'classnames'
import { useAppDispatch, useAppSelector, changeCases } from '@/shared/client'

export const Cases: React.FC = () => {
    const dispatch = useAppDispatch()
    const { cases: selectedCases } = useAppSelector(state => state.homePage)

    const [maxIndex, setMaxIndex] = useState(0)

    useEffect(() => {
        let max = 0

        for (const item of selectedCases) {
            if (item.index > max) {
                max = item.index
            }
        }

        setMaxIndex(max)
    }, [selectedCases])

    return (
        <Element name="cases" className={s.cases}>
            <Container>
                <h2>Кейсы</h2>
                <div className={s.wrapper}>
                    {cases.map((item, index) => (
                        <div
                            key={index}
                            className={classNames(s.item, {
                                [s.selected]: selectedCases.some(
                                    c => c.index === index,
                                ),
                            })}
                        >
                            <div className={s.number}>{index + 1}</div>
                            <div className={s.content}>
                                <p>{item}</p>
                                <Button
                                    className={classNames({
                                        [s.active]: index === maxIndex,
                                    })}
                                    onClick={() =>
                                        scroller.scrollTo('form', {
                                            smooth: true,
                                        })
                                    }
                                >
                                    Оставить заявку
                                </Button>
                            </div>
                            <button
                                className={s.selectBtn}
                                onClick={() =>
                                    dispatch(changeCases({ name: item, index }))
                                }
                            >
                                {svgIcons.check}
                            </button>
                        </div>
                    ))}
                </div>
            </Container>
        </Element>
    )
}
