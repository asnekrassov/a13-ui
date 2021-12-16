import * as React from 'react'
import IA13Button from '../../interfaces/IA13ButtonProps'

const A13Button: React.FunctionComponent<IA13Button> = ({
    children,
    color,
    ...props
}) => {
    return (
        <button {...props} style={{color}}>
            {children}
        </button>
    )
}

export default A13Button