'use client'

import React, { useCallback, useState } from 'react'
import { Button, cases, Container, svgIcons } from '@/shared'
import s from './index.module.scss'
import { Element } from 'react-scroll'
import classNames from 'classnames'

export const Cases: React.FC = () => {
    const [selected, setSelected] = useState<number[]>([])

    const toggleSelected = useCallback((selected: number[], index: number) => {
        if (selected.some(i => i === index)) {
            setSelected(prev => prev.filter(i => i !== index))
        } else {
            setSelected(prev => [index, ...prev])
        }
    }, [])

    return (
        <Element name="cases" className={s.cases}>
            <Container>
                <h2>Кейсы</h2>
                <div className={s.wrapper}>
                    {cases.map((name, i) => (
                        <div
                            key={i}
                            className={classNames(s.item, {
                                [s.selected]: selected.some(
                                    index => i === index,
                                ),
                            })}
                        >
                            <div className={s.number}>{i + 1}</div>
                            <div className={s.content}>
                                <p>{name}</p>
                                <Button>Оставить заявку</Button>
                            </div>
                            <button
                                className={s.selectBtn}
                                onClick={() => toggleSelected(selected, i)}
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
