const Button = (props) => {
    return (
        <button disabled={props.type} style={{}} onClick = {props.event}>{props.name}</button>
    );
}
let options = [];
const onFormSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.option.dataset.action)
    options.push(e.target.option.value);
    render();
}
const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * options.length);
    const option = options[randomNum];
    console.log(option);
}
const removeAll = () => {
    options = [];
    render();
}
const render = () => {
    const Template = () => {
        return (
            <div>
            <h1>You have {options.length} option(s)</h1>
            <Button name = 'remove all' event = {removeAll}/>
            <Button type={options.length === 0 ? true : false} event = {makeDecision} name='What should i do?'/>
            {/*<button disabled= {options.length === 0 ? true : false} onClick = {makeDecision}>What should i do?</button>*/}
            <form onSubmit = {onFormSubmit}>
                <input type ='text' placeholder='example' name='option' data-action = 'option'/>
                <Button name='add option'/>
            </form>
            {
                options.map((num, i) =>{
                    return (
                        <p key= {i}> {num}</p>
                    );
                })
            }
            </div>
            );
    };
    
    ReactDOM.render(<Template />, document.getElementById('app'));
};

render();
