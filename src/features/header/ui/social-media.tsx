import React from 'react'
import { Button, svgIcons } from '@/shared'
import s from './header.module.scss'
import classNames from 'classnames'

export const SocialMedia: React.FC<{ className?: string }> = ({
    className,
}) => {
    return (
        <div className={classNames(s.socialMedia, className)}>
            <Button variant="dark" className={s.btn}>
                {svgIcons.media.vk}
            </Button>
            <Button variant="dark" className={s.btn}>
                {svgIcons.media.telegram}
            </Button>
        </div>
    )
}
