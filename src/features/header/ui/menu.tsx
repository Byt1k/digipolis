'use client'

import React from 'react'
import s from '@/features/header/ui/header.module.scss'
import { Link } from 'react-scroll/modules'
import classNames from 'classnames'

const Menu: React.FC<{ className?: string; onClickLink?: () => void }> = ({
    className,
    onClickLink,
}) => {
    return (
        <nav className={classNames(s.menu, className)}>
            <Link to="services" smooth onClick={onClickLink}>
                Услуги
            </Link>
            <Link to="advantages" smooth onClick={onClickLink}>
                Преимущества
            </Link>
            <Link to="cases" smooth onClick={onClickLink}>
                Кейсы
            </Link>
            <Link to="calculator" smooth onClick={onClickLink}>
                Калькулятор
            </Link>
        </nav>
    )
}

export default Menu
