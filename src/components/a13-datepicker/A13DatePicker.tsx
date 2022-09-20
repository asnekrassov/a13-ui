import * as React from 'react'
import './A13DatePicker.css'
import { A13DatePickerProps } from "../../interfaces/a13-datepicker/A13DatePickerProps";
import { CALENDAR_MONTHS, DAYS_ON_PICKER_COUNT, THIS_MONTH } from './datepickerUtilities';
import DayFragment from './A13DatePickerDayFragment';
import A13DatePickerMonthLabel from './A13DatePickerMonthLabel';

const dayGrids = (countDays: number) => {
    let elements = [] as React.ReactNode[]
    for (let i = 0; i < countDays; i++) {
        elements.push(<DayFragment value={i} onClick={() => { }} />)
    }
    return elements
}

const A13DatePicker: React.FunctionComponent<A13DatePickerProps> = ({ labelMode }) => {
    // const currentMonth = Object.entries(CALENDAR_MONTHS)[THIS_MONTH][0]
    // const [month, setMonth] = React.useState("currentMonth")
    // // const changeMonth = () => {
    // //     setMonth()
    // // }
    return (
        <>
            <A13DatePickerMonthLabel month={"month"} mode={labelMode} />
            <div className="calendar__wrapper">
                {
                    dayGrids(DAYS_ON_PICKER_COUNT)
                }
            </div>
        </>
    )
}

export default A13DatePicker