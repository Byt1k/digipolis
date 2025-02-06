import React, {HTMLAttributes} from 'react';
import classNames from "classnames";
import s from './checkbox.module.scss'
import {svgIcons} from "@/shared";

interface Props extends HTMLAttributes<HTMLInputElement> {
    children?: React.ReactNode;
    checked: boolean
}

export const Checkbox: React.FC<Props> = ({ children, checked, onChange, className }) => {
    return (
        <label className={classNames(s.checkbox, className)}>
            <label className={s.label}>
                <input type="checkbox" checked={checked} onChange={onChange}/>
                {svgIcons.inputs.check}
            </label>
            {children}
        </label>
    );
};
