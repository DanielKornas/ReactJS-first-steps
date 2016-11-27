const counterBox = document.getElementById('counterBox');
var ThirdComponent = React.createClass({

    getInitialState: function() {
        return {
            sum: 0 //initial state - defaul value
        }
    },

    addNumber: function(value){
        this.setState({
            sum: this.state.sum + value
        })
    },

    getDefaultProps: function(){ // Dafault properties
        return{
            numberOne: 5,
            numberTwo: 8,
            text: 'Add'
        }
    },

    render: function() {
        return (
            <div>
                <h2 id="test" className="test">Sum: <span>{this.state.sum}</span></h2> {/* instead of class="" has to be className , id is the same*/}
                <Button text = {`${this.props.text} ${this.props.numberOne}`} value={this.props.numberOne} clickHandler = {this.addNumber.bind(this, this.props.numberOne)} className="classname here"/>
                <Button text = {`${this.props.text} ${this.props.numberTwo}`} value={this.props.numberTwo} clickHandler = {this.addNumber.bind(this, this.props.numberTwo)} />
            </div>
        )
    }

});
const Button = function(number){   // StateLess functional component
    return(
        <button value = {number.value} onClick = {number.clickHandler} className={number.style}>{number.text}</button>
    )
};
ReactDOM.render(
    <ThirdComponent/>,
    counterBox
);
