const counterBox = document.getElementById('counterBox');
var ThirdComponent = React.createClass({

    getInitialState: function() {
        return {
            sum: 0 //initial state - defaul value
        }
    },

    addFive: function() {
        this.setState({
            sum: this.state.sum + 5
        })

    },

    addEight: function() {
        this.setState({
            sum: this.state.sum + 8
        })
    },

    render: function() {
        return (
            <div>
                <h2 id="test" className="test">Sum: <span>{this.state.sum}</span></h2> {/* instead of class="" have to be className , id is the same*/}
                <button onClick = {this.addFive}> Add 5 to sum </button>
                <button onClick = {this.addEight}> Add 8 to sum </button>
            </div>
        )
    }
});
ReactDOM.render(
    <ThirdComponent/>,
    counterBox
);
