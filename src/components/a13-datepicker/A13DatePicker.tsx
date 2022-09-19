import * as React from 'react'
import A13DatePickerProps from "../../interfaces/a13-datepicker/A13DatePickerProps";
import { CALENDAR_MONTHS, DAYS_ON_PICKER_COUNT } from './datepickerUtilities';
import './A13DatePicker.css'

const dayGrid = (value: number) => {
    return <div
        className='calendar__day'
        key={value + '_day'}
        onClick={() => console.log('test')}
        >
        {value}
    </div>
}

const dayGrids = (countDays: number) => {
    let elements = [] as React.ReactNode[]
    for (let i = 0; i < countDays; i++) {
        elements.push(dayGrid(i))
    }
    return elements
}

const A13DatePicker: React.FunctionComponent<A13DatePickerProps> = ({ }) => {
    return (
        <>
            <div className="calendar__wrapper">
                {
                    dayGrids(DAYS_ON_PICKER_COUNT)
                }
            </div>
        </>
    )
}

export default A13DatePicker