import React from 'react';
import Button from './button.component';

const Action = (props) => { 
    const { hasAction, handlePick } = props;
    return(
        <Button name='what should i do?' type={hasAction} event={handlePick} class={'big_button'}/>
    );
}

export default Action;