
let count = 0;
const addOne = () => {
    count ++ ;
    renderCount();
}
const subOne = () => { 
    count --;
    renderCount();
}

const renderCount = () => {
    const Template = () => {
        return(
            <div>
            <h1> count { count }</h1>
            <button onClick={addOne}> +1 </button>
            <button onClick={subOne}> -1 </button>
            </div>
        );
    }
    
    ReactDOM.render(<Template name='david'/>, document.getElementById('app'));
};
renderCount();