import React, { HTMLProps, useId } from 'react'
import s from './index.module.scss'
import classNames from 'classnames'

interface Props extends Omit<HTMLProps<HTMLTextAreaElement>, 'id'> {
    // label: string
}

export const Textarea: React.FC<Props> = ({
    children,
    className,
    // label,
    ...props
}) => {
    const textareaId = useId()

    return (
        <div className={classNames(s.wrapper, className)}>
            {/*<label htmlFor={textareaId}>{label}</label>*/}
            <textarea id={textareaId} {...props} />
            {!props.required && (
                <span className={s.notRequired}>необязательно</span>
            )}
        </div>
    )
}
