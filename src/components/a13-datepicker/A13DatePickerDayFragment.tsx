import * as React from 'react'

interface IProps {
    value: number,
    onClick: () => void
}

const A13DatePickerDayFragment: React.FC<IProps> = ({ value }) => {
    // const [active, setActive] = React.useState<boolean>(false)
    // const currentDat = React.useRef()
    
    // const handleClick = () => {
    //     setActive(!active)
    // }
    return (
        <div
            className='calendar__day'
            key={value + '_day'}
            onClick={() => console.log('test')}
        >
            {value}
        </div>
    )
}

export default A13DatePickerDayFragment
