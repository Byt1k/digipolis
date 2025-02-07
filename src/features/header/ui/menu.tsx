'use client'

import React from 'react'
import s from '@/features/header/ui/header.module.scss'
import { Link } from 'react-scroll/modules'

const Menu: React.FC = () => {
    return (
        <nav className={s.menu}>
            <Link to="services" smooth>
                Услуги
            </Link>
            <Link to="advantages" smooth>
                Преимущества
            </Link>
            <Link to="cases" smooth>
                Кейсы
            </Link>
            <Link to="calculator" smooth>
                Калькулятор
            </Link>
        </nav>
    )
}

export default Menu
