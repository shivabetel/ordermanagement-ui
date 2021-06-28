/** @jsx jsx */
import { jsx } from "@emotion/core";

const RadioButton = (props) => {


    const classes = ["radioContainer"];
    if (props.checked) {
        classes.push('selected')
    }
    return (
        <div className={classes.join(' ')}>
            <input className="radioButton" type="radio"
                value={props.value}
                name={props.groupName}
                checked={props.checked}
                onChange={() => props.handleOptionChange(props.value)} />
            <span className="checkmark"></span>
            <style jsx>{
                `
                .preloader{
                    position: absolute;
                    right: 20px;
                    top: 4px;
                }
                  .radioContainer {
                      position: relative;
                      
                  }
                  .radioContainer .labelCon{
                    position: relative;
                    display: inline-block;
                    width: 95%
                  }
                
                  .radioContainer.selected{
                    border-bottom: 1px solid #D7D7D7;
                    padding-bottom: 1em;
                  }

                  .radioButton{
                      opacity: 0;
                      width: 20px;
                      height: 20px;
                      position: absolute;
                      right: 0;
                      z-index: 1;
                      cursor: pointer;
                  }

                  .radioContainer .checkmark{
                    border: 1px solid #D7D7D7;
                    border-radius: 50%;
                    width: 20px;
                    height: 20px;
                    position: absolute;
                    right: 0;
                    cursor: pointer;

                  }
                  .radioContainer input:checked~.checkmark{
                    background-color: #000000;
                    color: #ececec;
                  }
                `
            }</style>
        </div>
    )
}


export default RadioButton;