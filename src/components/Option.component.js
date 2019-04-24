import React from 'react';
import Button from './button.component';

const Options = (props) => {
    return(
        <div>
        <div className='widget_header'>
        <h3>You Options</h3>
        <Button name='Remove All' event={props.deleteAll} class='button__link'/>
        </div>
        {
            props.options.map((option, index) => (
                <Option 
                key={option}
                optionText = {option}
                count = {index}
                handleDeleteOption = {props.deleteOne}
                />
            ))
        }
        </div>
    );
}
const Option = (props) =>{
    return(
        <div className='option_block'>
        <p className='option_text'> {props.count}. {props.optionText}</p>
         <button 
         onClick={(e) => {
            props.handleDeleteOption(props.optionText);
         }}
         className = 'button button__link'
         >
         Remove
         </button>
        </div>
    );
}

export default Options;
