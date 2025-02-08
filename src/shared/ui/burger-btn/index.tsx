import React, { HTMLAttributes } from 'react'
import s from './index.module.scss'
import classNames from 'classnames'

interface Props extends HTMLAttributes<HTMLButtonElement> {
    opened: boolean
}

export const BurgerBtn: React.FC<Props> = ({ opened, className, ...props }) => {
    return (
        <button
            className={classNames(s.burger, { [s.opened]: opened }, className)}
            {...props}
        >
            <span />
            <span />
            <span />
        </button>
    )
}
