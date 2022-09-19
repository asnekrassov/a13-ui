import * as React from 'react'
import A13InputProps from '../../interfaces/A13InputProps'
import './A13Input.css'

const A13Input: React.FC<A13InputProps> = ({ label, placeholder }) => {
    const placeholderValue = placeholder ? placeholder : ''
    const isLabel = label ? label : false

    const classes = ['a13-input']
    return (
        <>
            {
                isLabel && <label>
                    {label}
                    <input
                        className={classes.join(' ')}
                        placeholder={placeholderValue}
                    />
                </label>
            }
            {
                !isLabel && <input
                    className={classes.join(' ')}
                    placeholder={placeholderValue}
                />
            }

        </>
    )
}

export default A13Input