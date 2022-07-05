import React, { FC } from 'react'
import styles from './Select.module.scss'
import { ISelect } from './selectTypes'

export const Select: FC<ISelect> = (
    {
        selectName,
        labelText,
        options,
        onChange,
        onBlur
    }) => {

    return (
        <>
            {
                labelText && (
                    <label
                        className={styles.Label}
                        htmlFor={selectName}
                    >{labelText}</label>
                )
            }
            <select
                className={styles.Select}
                name={selectName}
                id={selectName}
                onChange={onChange}
                onBlur={onBlur}
            >{
                options.map((item: string, index: number) => <option key={`${index}-${item.length}`} value={item}>{item}</option>)
            }</select>
        </>
    )
}
