import React from 'react'
import classes from './Input.module.css'
const Input = (props) => {
    let inputElement = null;
    const classesInput = [classes.Input]
    if (!props.isValid && props.shouldValidate && props.touched) {
        classesInput.push(classes.Invalid)
    }
    switch (props.elementtype) {
        case 'input':
            inputElement = <input onChange={props.clicked}
                className={classesInput.join(' ')}
                value={props.value}
                {...props.elementconfig}
            />
            break;
        case 'textarea':
            inputElement = <textarea onChange={props.clicked}
                className={classesInput.join(' ')}
                value={props.value}
                {...props.elementconfig}
            />
            break;
        case 'select':
            inputElement = <select onChange={props.clicked}
                className={classesInput.join(' ')}
            >
                {props.elementconfig.options.map(element => (
                    <option key={element.value} value={element.value}>
                        {element.displayValue}
                    </option>
                ))}
            </select>
            break;
        default:
            inputElement = <input className={classes.InputElement} {...props} />
            break;
    }
    return (
        <div className={classes.Input}>
            <label className={classes.label}>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default Input