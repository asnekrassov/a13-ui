export const DAYS_ON_PICKER_COUNT = 35

export const THIS_YEAR = +(new Date().getFullYear())

export const THIS_MONTH = +(new Date().getMonth()) + 1

export const WEEK_DAYS = {
    Synday: "Sun",
    Monday: "Mon",
    Tuesday: "Tue",
    Wednesday: "Wed",
    Thursday: "Thu",
    Friday: "Fri",
    Saturday: "Sat"
}

export const CALENDAR_MONTHS = {
    January: "Jan",
    February: "Feb",
    March: "Mar",
    April: "Apr",
    May: "May",
    June: "Jun",
    July: "Jul",
    August: "Aug",
    September: "Sep",
    October: "Oct",
    November: "Nov",
    December: "Dec"
}

export const CALENDAR_WEEKS = 6

export const zeroPad = (value: number, length: number) => {
    return `${value}`.padStart(length, '0')
}

export const getMonthDays = (month = THIS_MONTH, year = THIS_YEAR) => {
    const months30 = [4, 6, 9, 11];
    const leapYear = year % 4 === 0;
    return month === 2
        ? leapYear
            ? 29
            : 28
        : months30.includes(month)
            ? 30
            : 31
}


