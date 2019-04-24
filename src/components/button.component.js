import React from 'react';

const Button = (props) => {
    return(
        <button disabled={props.type} onClick = {props.event} className={props.class}>{props.name}</button>
    );
};
export default Button;