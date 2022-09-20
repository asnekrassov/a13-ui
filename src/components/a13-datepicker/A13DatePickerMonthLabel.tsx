import * as React from 'react'
import { A13DatePickerMonthLabelMode } from '../../interfaces/a13-datepicker/A13DatePickerProps'

interface IProps {
    month: string,
    mode: A13DatePickerMonthLabelMode
}

const A13DatePickerMonthLabel: React.FC<IProps> = ({ month }) => {
    return (
        <>
            <h1>{month}</h1>
        </>
    )
}

export default A13DatePickerMonthLabel