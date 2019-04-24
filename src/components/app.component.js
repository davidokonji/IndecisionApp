import React from 'react';
import AddOption from './AddOption.component';
import Header from './Header.component';
import Action from './Action.component';
import Options  from './Option.component';
import Modal from './openModal.component';

class App extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }
    constructor(props){
        super(props)
    }
    closeModal = () => {
        this.setState({selectedOption: false})
    }
    handleDeleteOptions = ()  => {
        this.setState(() => ({options: []}));
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({options: prevState.options.filter((option) => optionToRemove !== option)}));
    }
    handleAddOptions = (option) => {
        if (!option) {
            return 'Please Enter a value';
        } else if(this.state.options.indexOf(option) > -1) {
            return 'This entry already exist';
        }
        this.setState((prevState) => {
            return{
                options: prevState.options.concat(option)
            }
        });
    }
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState({
            selectedOption: option
        })
    }
    componentDidMount() {
        const options = JSON.parse(localStorage.getItem('options'));
        this.setState(() => ({options}));
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const data = JSON.stringify(this.state.options);
            localStorage.setItem('options', data);
        }
    }
    render(){
        return(
            <div>
            <Header />
            <div className='container body'>
            <Action hasAction = {this.state.options.length > 0 ? false : true} handlePick = {this.handlePick}/>
            <div className='widget'>
                <Options options = {this.state.options} deleteAll = {this.handleDeleteOptions} deleteOne = {this.handleDeleteOption}/>
                <AddOption addOptions = {this.handleAddOptions}/>
            </div>
            <Modal 
            selectedOption= {this.state.selectedOption}
            closeModal = {this.closeModal}
            />
            </div>
            </div>
        );
    }
}

export default App;