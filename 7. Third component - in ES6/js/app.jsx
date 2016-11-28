const counterBox = document.getElementById('counterBox');

class ThirdComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = { sum: 0 } ;{/*initial state - defaul value */}
        this.addNumber = this.addNumber.bind(this)
    }

    addNumber(value){
        this.setState({
            sum: this.state.sum + value
        })
    }

    render() {
        return (
            <div>
                <h2 id="test" className="test">Sum: <span>{this.state.sum}</span></h2> {/* instead of class="" has to be className , id is the same*/}
                <Button text = {`${this.props.text} ${this.props.numberOne}`} value={this.props.numberOne} clickHandler = {()=>this.addNumber(this.props.numberOne)} className="classname here"/>
                <Button text = {`${this.props.text} ${this.props.numberTwo}`} value={this.props.numberTwo} clickHandler = {()=>this.addNumber(this.props.numberTwo)} />
            </div>
        )
    }

};

ThirdComponent.defaultProps = { // Dafault properties
        numberOne: 5,
        numberTwo: 8,
        text: 'Add'
};

const Button = (number) =>{   // StateLess functional component
    return(
        <button value = {number.value} onClick = {number.clickHandler} className={number.style}>{number.text}</button>
    )
};
ReactDOM.render(
    <ThirdComponent/>,
    counterBox
);
