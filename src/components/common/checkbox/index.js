import React, { useState } from 'react';

const Checkbox = props => {
    const [isChecked, setChecked] = useState(false)

    const { label } = props;

    const toggleCheckbox = () => {
        setChecked(!isChecked);
    }

    

    return (
        <div className="checkboxCon">
            <input type="checkbox" className="checkbox" checked={isChecked} value={label} onChange={toggleCheckbox} />
            <span className="checkmark">{label}</span>
            <style jsx>{
                `
            .checkboxCon{
                position: relative;
                position: relative;
                width: 20px;
                height: 20px;
                font-size: 0.8em;
                margin-bottom: 8px;
                margin-right: 8px;
                text-align: center;
                display: inline-block;
            }
            .checkbox {
                position: absolute;
                opacity: 0;
                cursor: pointer;
                z-index: 999;
                left: 0;
                width: 20px;
                height: 20px;
            }
            .checkmark {
                position: absolute;
                top: 0;
                left: 0;
                width: 20px;
                height: 20px;
                font-size: .8em;
                border-radius: 50%;
                text-align: center;
                color: #1b1a20;
                border: 1px solid #D7D7D7;
            }
            input:checked~.checkmark {
                background-color: #1b1a20;
                color: #ececec;
            }
            input:checked ~ .checkmark:after {
                display: block;
              }
            `}</style>
        </div>
    )
}

export default Checkbox
