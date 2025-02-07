import React, { HTMLProps } from 'react'
import classNames from 'classnames'
import s from './index.module.scss'
import { svgIcons } from '@/shared'

interface Props extends Omit<HTMLProps<HTMLInputElement>, 'onChange'> {
    children?: React.ReactNode
    onChange?: (value: boolean) => void
}

export const Checkbox: React.FC<Props> = ({
    children,
    onChange,
    className,
    ...props
}) => {
    return (
        <label className={classNames(s.checkbox, className)}>
            <label className={s.label}>
                <input
                    type="checkbox"
                    onChange={e => onChange?.(e.target.checked)}
                    {...props}
                />
                {svgIcons.inputs.check}
            </label>
            {children}
        </label>
    )
}
