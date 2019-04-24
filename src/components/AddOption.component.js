import React from 'react';
import Button from './button.component';

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onFormSubmit(e) {
        e.preventDefault();
        const { addOptions } = this.props;
        let option = e.target.option.value;
        option = option.trim();
        if (!option && option.trim().length === 0) {
            return console.log('empty')
        }
        addOptions(option)
        e.target.option.value = '';
    }
    render(){
        return(
            <React.Fragment>
            <form onSubmit = {this.onFormSubmit} className='add-option'>
            <input type ='text' placeholder='Make a decision?' name='option' data-action = 'option' className='add-option-input'/>
            <Button name='add option' class='button'/>
             </form>
            </React.Fragment>
        );
    }
}
export default AddOption;