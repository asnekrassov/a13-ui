import * as React from 'react'
import IA13Button from '../../interfaces/A13ButtonProps'
import './A13Button.css'

const A13Button: React.FunctionComponent<IA13Button> = ({
    children,
    color,
    ...props
}) => {
    const classes = ['a13-button']
    return (
        <button className={classes.join(' ')} {...props} style={{color}}>
            {children}
        </button>
    )
}

export default A13Button