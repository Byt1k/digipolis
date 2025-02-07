import React from 'react'
import s from './container.module.scss'
import classNames from 'classnames'

export function Container({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) {
    return <div className={classNames(s.container, className)}>{children}</div>
}
