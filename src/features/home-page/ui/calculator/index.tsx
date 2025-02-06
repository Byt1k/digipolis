'use client'

import React, {useCallback, useEffect, useState} from "react";
import {Button, calculatorServices, Container, ICalculatorService} from "@/shared";
import s from "./index.module.scss";
import {Element} from "react-scroll";
import classNames from "classnames";
import {Checkbox} from "@/shared/ui/checkbox/checkbox";

interface SelectedCalculatorService extends ICalculatorService {
    index: number
}

export const Calculator: React.FC = () => {
    const [selected, setSelected] = useState<SelectedCalculatorService[]>([])
    const [total, setTotal] = useState(0)

    const toggleSelected = useCallback((selected: SelectedCalculatorService[], newService: SelectedCalculatorService) => {
        if (selected.some(s => s.index === newService.index)) {
            setSelected(prev => prev.filter(s => s.index !== newService.index))
        } else {
            setSelected(prev => [newService, ...prev])
        }
    }, [])

    useEffect(() => {
        const res = selected.reduce((acc, { price }) => acc + price, 0)
        setTotal(res)
    }, [selected])

    return (
        <Element name="calculator" className={s.calculator}>
            <Container>
                <h2>Калькулятор</h2>
                <div className={s.grid}>
                    <div className={s.list}>
                        <h4>Выберите тариф</h4>
                        {calculatorServices.map((service, i) => (
                            <div key={i} className={s.item}>
                                <Checkbox
                                    checked={selected.some(s => s.index === i)}
                                    onChange={() => toggleSelected(selected, { ...service, index: i})}
                                />
                                <p className={s.title}>{service.name}</p>
                                <p className={s.price}>{`от ${service.price.toLocaleString()} ₽`}</p>
                            </div>
                        ))}
                    </div>
                    <div className={classNames(s.total, { [s.active]: !!total })}>
                        <div>
                            <span>Итого</span>
                            <p>{total} ₽</p>
                        </div>
                        <Button className={s.btn} disabled={!total}>Оставить заявку</Button>
                    </div>
                    <div className={s.image} style={{ backgroundImage: 'url(/home-page/calculator.png)' }} />
                </div>
            </Container>
        </Element>
    );
};
