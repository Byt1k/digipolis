import React, { HTMLProps, useId } from 'react'
import s from './index.module.scss'
import classNames from 'classnames'

interface Props extends Omit<HTMLProps<HTMLInputElement>, 'id'> {
    // label: string
}

export const Input: React.FC<Props> = ({
    children,
    className,
    // label,
    ...props
}) => {
    const inputId = useId()

    return (
        <div className={classNames(s.wrapper, className)}>
            {/*<label htmlFor={inputId}>{label}</label>*/}
            <input id={inputId} {...props} />
            {!props.required && (
                <span className={s.notRequired}>необязательно</span>
            )}
        </div>
    )
}
