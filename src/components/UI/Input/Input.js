import React from 'react';
import classes from './Input.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];
    let validationError = null;

    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(classes.Invalid);
        validationError = <p className={classes.ValidationError}>Please enter a valid {props.elementconfig.placeholder}!</p>
    }

    switch (props.elementtype) {
        case ('input'):
            inputElement = <input 
            className={inputClasses.join(' ')}  
            {...props.elementconfig} 
            value={props.value} 
            onChange={props.changed}/>;
            break;
        case ('textarea'):
            inputElement = <textarea 
            className={classes.InputElement}  
            {...props.elementconfig} 
            value={props.value} 
            onChange={props.changed}/>;
            break;
        case ('select'):
            inputElement = (
                <select 
                className={classes.InputElement} 
                value={props.value}
                onChange={props.changed}>
                    {
                    props.elementconfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))
                    }
                </select>
            );
            break;
        default:
            inputElement = <input className={classes.InputElement} {...props.elementconfig} value={props.value} onChange={props.changed}/>;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
            {validationError}
        </div>
    );
}

export default input;